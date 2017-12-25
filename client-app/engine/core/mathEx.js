/*global DEBUG:true*/

import mat4 from './mat4'

exports.isPointInRect = (point,rect,angle)=> {
    // if (angle) {
    //     let vec2 = new Vec2(point.x - rect.x - rect.width/2,point.y - rect.y - rect.height/2);
    //     vec2.setAngle(vec2.getAngle() - angle);
    //     point = {x:vec2.getX() + point.x,y:vec2.getY() + point.y};
    //
    // }
    return point.x>rect.x &&
        point.x<(rect.x+rect.width) &&
        point.y>rect.y &&
        point.y<(rect.y+rect.height);
};

exports.overlapTest = (a, b)=> {
    return  (a.x < b.x + b.width) &&
        (a.x + a.width > b.x) &&
        (a.y < b.y + b.height) &&
        (a.y + a.height > b.y);
};

exports.radToDeg = function(rad){
    return rad *  180 / Math.PI;
};

exports.degToRad = function(deg) {
    return deg *  Math.PI / 180;
};

exports.random = function(min, max){
    if (min>max) {
        let tmp = min;
        min = max;
        max = tmp;
    }
    let res = Math.random() * (max - min) + min;
    if (res>max) res = max;
    else if (res<min) res = min;
    return res;
};

/**
 * analog of glu unproject function
 * https://github.com/bringhurst/webgl-unproject/blob/master/GLU.js
 */
exports.unProject = (winX,winY, width, height, viewProjectionMatrix)=>{
    let x = 2.0 * winX / width - 1;
    let y = 2.0 * winY / height - 1;
    let viewProjectionInverse = mat4.inverse(viewProjectionMatrix);

    let point3D = [x, y, 0, 1];
    let res = mat4.multMatrixVec(viewProjectionInverse,point3D);
    res[0] = (res[0]/2+0.5)*width;
    res[1] = (res[1]/2+0.5)*height;
    return res;
};

//
// exports.getNormalizedVectorFromPoints = function(pointA,pointB) {
//     let angle = Math.atan2(pointB.y-pointA.y,pointB.x-pointA.x);
//     return {
//         x:Math.cos(angle),
//         y:Math.sin(angle)
//     }
// };
//
let ease = {};

// simple linear tweening - no easing, no acceleration
ease.linear = function (t, b, c, d) {
    return c*t/d + b;
};

// quadratic easing in - accelerating from zero velocity
ease.easeInQuad = function (t, b, c, d) {
    t /= d;
    return c*t*t + b;
};

// quadratic easing out - decelerating to zero velocity
ease.easeOutQuad = function (t, b, c, d) {
    t /= d;
    return -c * t*(t-2) + b;
};

// quadratic easing in/out - acceleration until halfway, then deceleration
ease.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};

// // cubic easing in - accelerating from zero velocity
// ease.easeInCubic = function (t, b, c, d) {
//     t /= d;
//     return c*t*t*t + b;
// };
//
// // cubic easing out - decelerating to zero velocity
// ease.easeOutCubic = function (t, b, c, d) {
//     t /= d;
//     t--;
//     return c*(t*t*t + 1) + b;
// };
//
// // cubic easing in/out - acceleration until halfway, then deceleration
// ease.easeInOutCubic = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t*t + b;
//     t -= 2;
//     return c/2*(t*t*t + 2) + b;
// };
//
// // quartic easing in - accelerating from zero velocity
// ease.easeInQuart = function (t, b, c, d) {
//     t /= d;
//     return c*t*t*t*t + b;
// };
//
// // quartic easing out - decelerating to zero velocity
// ease.easeOutQuart = function (t, b, c, d) {
//     t /= d;
//     t--;
//     return -c * (t*t*t*t - 1) + b;
// };
//
// // quartic easing in/out - acceleration until halfway, then deceleration
// ease.easeInOutQuart = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t*t*t + b;
//     t -= 2;
//     return -c/2 * (t*t*t*t - 2) + b;
// };
//
// // quintic easing in - accelerating from zero velocity
// ease.easeInQuint = function (t, b, c, d) {
//     t /= d;
//     return c*t*t*t*t*t + b;
// };
//
// // quintic easing out - decelerating to zero velocity
// ease.easeOutQuint = function (t, b, c, d) {
//     t /= d;
//     t--;
//     return c*(t*t*t*t*t + 1) + b;
// };
//
// // quintic easing in/out - acceleration until halfway, then deceleration
// ease.easeInOutQuint = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t*t*t*t + b;
//     t -= 2;
//     return c/2*(t*t*t*t*t + 2) + b;
// };
//
//
// // sinusoidal easing in - accelerating from zero velocity
// ease.easeInSine = function (t, b, c, d) {
//     return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
// };
//
//
//
// // sinusoidal easing out - decelerating to zero velocity
// ease.easeOutSine = function (t, b, c, d) {
//     return c * Math.sin(t/d * (Math.PI/2)) + b;
// };
//
//
//
// // sinusoidal easing in/out - accelerating until halfway, then decelerating
// ease.easeInOutSine = function (t, b, c, d) {
//     return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
// };
//
// // exponential easing in - accelerating from zero velocity
// ease.easeInExpo = function (t, b, c, d) {
//     return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
// };
//
// // exponential easing out - decelerating to zero velocity
// ease.easeOutExpo = function (t, b, c, d) {
//     return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
// };
//
// // exponential easing in/out - accelerating until halfway, then decelerating
// ease.easeInOutExpo = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
//     t--;
//     return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
// };
//
// // circular easing in - accelerating from zero velocity
// ease.easeInCirc = function (t, b, c, d) {
//     t /= d;
//     return -c * (Math.sqrt(1 - t*t) - 1) + b;
// };
//
//
//
// // circular easing out - decelerating to zero velocity
// ease.easeOutCirc = function (t, b, c, d) {
//     t /= d;
//     t--;
//     return c * Math.sqrt(1 - t*t) + b;
// };
//
// // circular easing in/out - acceleration until halfway, then deceleration
// ease.easeInOutCirc = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
//     t -= 2;
//     return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
// };
//
// ease.easeInElastic = function (t, b, c, d) {
//     let s=1.70158;let p=0;let a=c;
//     if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
//     if (a < Math.abs(c)) { a=c; s=p/4; }
//     else s = p/(2*Math.PI) * Math.asin (c/a);
//     return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
// };
//
// ease.easeOutElastic = function (t, b, c, d) {
//     let s=1.70158;let p=0;let a=c;
//     if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
//     if (a < Math.abs(c)) { a=c; s=p/4; }
//     else s = p/(2*Math.PI) * Math.asin (c/a);
//     return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
// };
//
// ease.easeInOutElastic = function (t, b, c, d) {
//     let s=1.70158;let p=0;let a=c;
//     if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
//     if (a < Math.abs(c)) { a=c; s=p/4; }
//     else s = p/(2*Math.PI) * Math.asin (c/a);
//     if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
//     return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
// };
//
// ease.easeInBack = function (t, b, c, d) {
//     let s = 1.70158;
//     return c*(t/=d)*t*((s+1)*t - s) + b;
// };
//
// ease.easeOutBack = function (t, b, c, d) {
//     let s = 1.70158;
//     return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
// };
//
// ease.easeInOutBack = function (t, b, c, d) {
//     let s = 1.70158;
//     if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
//     return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
// };
//
// ease.easeInBounce = function(t, b, c, d) {
//     return c - ease.easeOutBounce (d-t, 0, c, d) + b;
// };
//
// ease.easeOutBounce  = function(t, b, c, d){
//     if ((t/=d) < (1/2.75)) {
//         return c*(7.5625*t*t) + b;
//     } else if (t < (2/2.75)) {
//         return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
//     } else if (t < (2.5/2.75)) {
//         return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
//     } else {
//         return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
//     }
// };
//
// ease.easeInOutBounce = function(t, b, c, d) {
//     if (t < d/2) return ease.easeInBounce(t*2, 0, c, d) * .5 + b;
//     else return ease.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
// };
//
exports.ease = ease;