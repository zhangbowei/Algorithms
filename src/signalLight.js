// export function signalLamp(signArr) {
//     function getTic(sign, delay) {
//         return () => new Promise((res, rej) => setTimeout(function () {
//             res();
//             console.log(sign);
//         }, delay));
//     }

//     const rawArr = signArr.slice();
//     const ticArr = rawArr.reduce(function (prev, item) {
//         return prev.concat([getTic(item, 1000)]);
//     }, []);
//     const runStep = function (iterator) {
//         if (iterator === ticArr.length) {
//             return runStep(0);
//         } else {
//             return () => ticArr[iterator]().then(runStep(++iterator));
//         }
//     }

//     runStep(0)();
// }

async function signalLamp(signArr) {
    const sleep = () => new Promise((res) => setTimeout(() => res(), 100));

    for (let i = 0; i < signArr.length; ++i) {
        await sleep();
        console.log(signArr[i]);

        if (i === signArr.length - 1) {
            i = 0;
        }
    }

    var sleep = () => new Promise((res) => setTimeout(() => res(), 100));
}
signalLamp(['red', 'green', 'yellow']);