export default function getUrlParam(sUrl, sKey) {
    var str = sUrl.match(/\?(.*)#/)[1];
    var res = str.split('&').reduce((prev, item) => {
        var frag = item.split('=');
        prev[frag[0]] ? prev[frag[0]].push(frag[1]) : prev[frag[0]] = [frag[1]];

        return prev;
    }, {});
//     Object.keys(res).forEach(function(key) {
//         res[key].length === 1 ? res[key] = res[key][0] : null;
//     })

    return sKey === void 0 ? res : res[sKey];
}

// function getUrlParam(sUrl,sKey){
//     var result = {};
//     sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
//         if(result[k] !== void 0){
//             var t = result[k];
//             result[k] = [].concat(t,v);
//         }else{
//             result[k] = v;
//         }
//     });
//     if(sKey === void 0){
//         return result;
//     }else{
//         return result[sKey] || '';
//     }
// }