function Promise(callbackFn) {
    let state = 'pending';
    const nextList = [], failList = [];
    const resolve = (data) => {
        state = 'fulfilled';
        setTimeout(function () {
            nextList.reduce(function (prev, item, index) {
                return prev&&prev.instanceof(Promise) ? prev.then(item, failList[index]) : item(data);
            }, null);
        }, 0);
    };
    const reject = (data) => {
        state = 'rejected';
        setTimeout(function () {
            const tempRe = failList[0](data);
            if (tempRe.instanceof(Promise)) {
                nextList.slice(1).forEach(function(item, index) {
                    tempRe.then(item, failList(index));
                });
            } else {
                nextList.unshift();
                failList.unshift();
                resolve(tempRe);
            }
        }, 0);
    }

    this.then = function (done, fail) {
        if (state === 'pending') {
            nextList.push(done);
            failList.push(fail);
        }
        if (state === 'fulfilled') {
            done();
        }
        if (state === 'rejected') {
            fail();
        }

        return this;
    };


    callbackFn(resolve, reject);
}

Promise.all = function(promises){
    if (!Array.isArray(promises)) {
        throw new TypeError('You must pass an array to all.');
      }
　　　　// 返回一个promise 实例
      return new Promise(function(resolve,reject){
          var i = 0,
              result = [],
              len = promises.length,
            　 count = len;

　　　　　　// 每一个 promise 执行成功后，就会调用一次 resolve 函数
          function resolver(index) {
          　　return function(value) {
            　　　resolveAll(index, value);
          　　};
        　}

        function rejecter(reason){
            reject(reason);
        }

        function resolveAll(index,value){
　　　　　　　// 存储每一个promise的参数
            result[index] = value;
　　　　　　　// 等于0 表明所有的promise 都已经运行完成，执行resolve函数
            if( --count == 0){
                resolve(result)
            }
        }
　　　　　　// 依次循环执行每个promise
          for (; i < len; i++) {
　　　　　　　　 // 若有一个失败，就执行rejecter函数
              promises[i].then(resolver(i),rejecter);
          }
      });
}