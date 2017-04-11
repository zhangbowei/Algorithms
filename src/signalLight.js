export function singalLamp(singalArr) {
    function tic(singal, time) {
        return () => new Promise((res) => setTimeout(() => {
            console.log(singal);
            res();
        }, time));
    }

    const rawArr = singalArr.slice();
    const lampArr = rawArr.reduce(function(prev, item) {
        return prev.concat([tic(item, 1000)]);
    }, []);
    const step = function(iterator) {
        if (iterator === lampArr.length) {
            return step(0);
        } else {
            return () => lampArr[iterator]().then(step(++iterator));
        }
    }

    step(0)();
}

singalLamp(['red', 'green', 'yellow']);