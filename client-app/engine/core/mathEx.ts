/*global DEBUG:true*/
declare let GLOBAL:boolean;

import * as mat4 from './geometry/mat4'
import Point2d from "./geometry/point2d";

export let isPointInRect = (point,rect,angle?)=> {
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

export let overlapTest = (a, b)=> {
    return  (a.x < b.x + b.width) &&
        (a.x + a.width > b.x) &&
        (a.y < b.y + b.height) &&
        (a.y + a.height > b.y);
};

export let radToDeg = function(rad){
    return rad *  180 / Math.PI;
};

export let degToRad = function(deg) {
    return deg *  Math.PI / 180;
};

export let random = function(min, max){
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
export let unProject = (winX,winY, width, height, viewProjectionMatrix)=>{
    let x = 2.0 * winX / width - 1;
    let y = 2.0 * winY / height - 1;
    let viewProjectionInverse = mat4.inverse(viewProjectionMatrix);

    let point3D = [x, y, 0, 1];
    let res = mat4.multMatrixVec(viewProjectionInverse,point3D);
    res[0] = (res[0]/2+0.5)*width;
    res[1] = (res[1]/2+0.5)*height;
    return new Point2d(res[0],res[1]);
};


// simple linear tweening - no easing, no acceleration
export let linear = (t, b, c, d)=> c*t/d + b;

// quadratic easing in - accelerating from zero velocity
export let easeInQuad = (t, b, c, d)=> {
    t /= d;
    return c*t*t + b;
};

// quadratic easing out - decelerating to zero velocity
export let easeOutQuad = (t, b, c, d)=> {
    t /= d;
    return -c * t*(t-2) + b;
};

// quadratic easing in/out - acceleration until halfway, then deceleration
export let easeInOutQuad = (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};

// cubic easing in - accelerating from zero velocity
export let easeInCubic = (t, b, c, d)=> {
    t /= d;
    return c*t*t*t + b;
};

// cubic easing out - decelerating to zero velocity
export let easeOutCubic = (t, b, c, d)=> {
    t /= d;
    t--;
    return c*(t*t*t + 1) + b;
};

// cubic easing in/out - acceleration until halfway, then deceleration
export let easeInOutCubic = (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
};

// quartic easing in - accelerating from zero velocity
export let easeInQuart = (t, b, c, d)=> {
    t /= d;
    return c*t*t*t*t + b;
};

// quartic easing out - decelerating to zero velocity
export let easeOutQuart = (t, b, c, d)=> {
    t /= d;
    t--;
    return -c * (t*t*t*t - 1) + b;
};

// quartic easing in/out - acceleration until halfway, then deceleration
export let easeInOutQuart =  (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t + b;
    t -= 2;
    return -c/2 * (t*t*t*t - 2) + b;
};

// quintic easing in - accelerating from zero velocity
export let easeInQuint =  (t, b, c, d)=> {
    t /= d;
    return c*t*t*t*t*t + b;
};

// quintic easing out - decelerating to zero velocity
export let easeOutQuint = (t, b, c, d)=> {
    t /= d;
    t--;
    return c*(t*t*t*t*t + 1) + b;
};

// quintic easing in/out - acceleration until halfway, then deceleration
export let easeInOutQuint = (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t*t*t + 2) + b;
};


// sinusoidal easing in - accelerating from zero velocity
export let easeInSine = (t, b, c, d)=> {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
};



// sinusoidal easing out - decelerating to zero velocity
export let easeOutSine = (t, b, c, d)=> {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
};



// sinusoidal easing in/out - accelerating until halfway, then decelerating
export let easeInOutSine = (t, b, c, d)=> {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
};

// exponential easing in - accelerating from zero velocity
export let easeInExpo = (t, b, c, d)=> {
    return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
};

// exponential easing out - decelerating to zero velocity
export let easeOutExpo = (t, b, c, d)=> {
    return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
};

// exponential easing in/out - accelerating until halfway, then decelerating
export let easeInOutExpo = (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
    t--;
    return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
};

// circular easing in - accelerating from zero velocity
export let easeInCirc = (t, b, c, d)=> {
    t /= d;
    return -c * (Math.sqrt(1 - t*t) - 1) + b;
};

// circular easing out - decelerating to zero velocity
export let easeOutCirc = (t, b, c, d)=> {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t*t) + b;
};

// circular easing in/out - acceleration until halfway, then deceleration
export let easeInOutCirc = (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    t -= 2;
    return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
};

export let easeInElastic = (t, b, c, d)=> {
    let s=1.70158;let p=0;let a=c;
    if (t===0) return b;  if ((t/=d)===1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; s=p/4; }
    else s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
};

export let easeOutElastic = (t, b, c, d)=> {
    let s=1.70158;let p=0;let a=c;
    if (t===0) return b;  if ((t/=d)===1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; s=p/4; }
    else s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
};

export let easeInOutElastic = (t, b, c, d)=> {
    let s=1.70158;let p=0;let a=c;
    if (t===0) return b;  if ((t/=d/2)===2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; s=p/4; }
    else s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
};

export let easeInBack = (t, b, c, d)=> {
    let s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
};

export let easeOutBack = (t, b, c, d)=> {
    let s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
};

export let easeInOutBack = (t, b, c, d)=> {
    let s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
};

export let easeInBounce = (t, b, c, d)=> {
    return c - easeOutBounce (d-t, 0, c, d) + b;
};

export let easeOutBounce  = (t, b, c, d)=> {
    if ((t/=d) < (1/2.75)) {
        return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
};

export let easeInOutBounce = (t, b, c, d)=> {
    if (t < d/2) return easeInBounce(t*2, 0, c, d) * .5 + b;
    else return easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
};