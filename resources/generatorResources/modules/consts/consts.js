
module.exports.noop = function(){};
//<code>module.exports.RESOURCE_NAMES = <%-JSON.stringify(resourceNames)%>;

exports.SCALE_STRATEGY = {
    NO_SCALE:                       0,
    CSS_PRESERVE_ASPECT_RATIO:      1,
    HARDWARE_PRESERVE_ASPECT_RATIO: 2,
    CSS_STRETCH:                    3,
    HARDWARE_STRETCH:               4
};