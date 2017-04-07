export default function getUrlParam(sUrl, sKey) {
    var str = sUrl.match(/\?(.*)#/)[1];
    var res = str.split('&').reduce((prev, item) => {
        var frag = item.split('=');
        prev[frag[0]] ? prev[frag[0]].push(frag[1]) : prev[frag[0]] = [frag[1]];

        return prev;
    }, {});

    return sKey === void 0 ? res : res[sKey];
}
