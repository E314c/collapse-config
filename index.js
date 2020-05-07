const frozenKeys = new Set();

module.exports = new Proxy({}, {
    set: (obj, prop, value) => {
        if (frozenKeys.has(prop)) {
            throw new TypeError(`Config property ${prop} has already been accessed and so cannot be modified`);
        }
        obj[prop] = value;
    },
    get: (obj, prop) => {
        frozenKeys.add(prop);
        return obj[prop];
    }
});
