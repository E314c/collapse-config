const config = require('./index.js');

function setConfig(object) {
    Object.entries(object).forEach(([key, value]) => {
        config[key] = value;
    });
}

module.exports= {
    setConfig
};
