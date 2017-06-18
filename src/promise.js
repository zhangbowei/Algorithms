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
