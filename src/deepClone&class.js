export default function DeepClone(originData) {
    if (this instanceof DeepClone) {
        const type = Object.prototype.toString.call(originData).match(/\[object\s(\w+)\]/)[1];

        this.rawData = originData;
        this.cloneData = this.isObject() ? this[['_', type.toLowerCase()].join('')]() : this.rawData;
    } else {
        return new DeepClone(originData);
    }
}

DeepClone.prototype = {
    isObject: function() {
        return typeof(this.rawData) === 'object' ? true : false;
    },
    _array: function() {
        const rawData = this.rawData;
        return rawData.reduce(function(prev, item) {
            return prev.concat([DeepClone(item).cloneData]);
        }, []);
    },
    _object: function() {
        const rawData = this.rawData;
        let res = {};

        for (let key in rawData) {
            res[key] = DeepClone(rawData[key]).cloneData;
        }
        return res;
    }
}
