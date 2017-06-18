function setInterval(callbackFn, delay) {
  function getTic(fn, time) {
    return () => new Promise( (res, rej) => setTimeout( () => {fn(); res();}, time));
  }

  const cycleFn = getTic(callbackFn, delay);
  const runStep = function () {
    return () => cycleFn().then(runStep());
  }

  runStep()();
}

setInterval(function() {console.log('cycle')}, 1000);