
import * as mat4 from './geometry/mat4'
import {Point2d} from "./geometry/point2d";
import {Rect} from "./geometry/rect";

// todo class

export const isPointInRect = (point:Point2d,rect:Rect,angle?:number)=> {
    // if (angle) {
    //     const vec2 = new Vec2(point.x - rect.x - rect.width/2,point.y - rect.y - rect.height/2);
    //     vec2.setAngle(vec2.getAngle() - angle);
    //     point = {x:vec2.getX() + point.x,y:vec2.getY() + point.y};
    //
    // }
    return point.x>rect.x &&
        point.x<(rect.x+rect.width) &&
        point.y>rect.y &&
        point.y<(rect.y+rect.height);
};

export const overlapTest = (a:Rect, b:Rect)=> {
    return  (a.x < b.x + b.width) &&
        (a.x + a.width > b.x) &&
        (a.y < b.y + b.height) &&
        (a.y + a.height > b.y);
};

export const radToDeg = (rad:number)=>{
    return rad *  180 / Math.PI;
};

export const degToRad = (deg:number)=> {
    return deg *  Math.PI / 180;
};

export const rectToPolar = (point:Point2d,center:Point2d)=>{
    let radius = Math.sqrt(point.x*point.x+center.y*center.y);
    let angle = Math.atan2(center.y-point.y,center.x - point.x);
    return {radius,angle}
};

export const polarToRect = (radius:number,angle:number,center:Point2d)=>{
    let x = radius*Math.cos(angle);
    let y = radius*Math.sin(angle);
    return new Point2d(center.x-x,center.y-y);
};

export const getDistanceSquared = (p1:Point2d,p2:Point2d):number=>{
    return Math.pow(p1.x - p2.x,2) + Math.pow(p1.y - p2.y,2)
};

const EPSILON_CLOSE_TO = 0.01;

export const closeTo = (a:number,b:number,epsilon = EPSILON_CLOSE_TO):boolean=> {
    return Math.abs(a-b)<=epsilon;
};

export const getDistance = (p1:Point2d,p2:Point2d):number=>{
    return Math.sqrt(getDistanceSquared(p1,p2))
};

export const getAngle = (p1:Point2d,p2:Point2d):number=>{
    let dx:number = p1.x - p2.x;
    let dy:number = p1.y - p2.y;
    return Math.atan2(dy,dx);
};

export const random = (min:number, max:number)=>{
    if (min>max) {
        const tmp = min;
        min = max;
        max = tmp;
    }
    let res = ~~(Math.random() * (max - min)) + min;
    if (res>max) res = max;
    else if (res<min) res = min;
    return res;
};

/**
 * analog of glu unproject function
 * https://github.com/bringhurst/webgl-unproject/blob/master/GLU.js
 */
export const unProject = (winPoint:Point2d, width, height, viewProjectionMatrix)=>{
    const x = 2.0 * winPoint.x / width - 1;
    const y = 2.0 * winPoint.y / height - 1;
    const viewProjectionInverse = mat4.inverse(viewProjectionMatrix);

    const point3D = [x, y, 0, 1];
    const res = mat4.multMatrixVec(viewProjectionInverse,point3D);
    res[0] = (res[0]/2+0.5)*width;
    res[1] = (res[1]/2+0.5)*height;
    return new Point2d(res[0],res[1]);
};


// simple linear tweening - no easing, no acceleration
export const linear = (t, b, c, d)=> c*t/d + b;

// quadratic easing in - accelerating from zero velocity
export const easeInQuad = (t, b, c, d)=> {
    t /= d;
    return c*t*t + b;
};

// quadratic easing out - decelerating to zero velocity
export const easeOutQuad = (t, b, c, d)=> {
    t /= d;
    return -c * t*(t-2) + b;
};

// quadratic easing in/out - acceleration until halfway, then deceleration
export const easeInOutQuad = (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};

// cubic easing in - accelerating from zero velocity
export const easeInCubic = (t, b, c, d)=> {
    t /= d;
    return c*t*t*t + b;
};

// cubic easing out - decelerating to zero velocity
export const easeOutCubic = (t, b, c, d)=> {
    t /= d;
    t--;
    return c*(t*t*t + 1) + b;
};

// cubic easing in/out - acceleration until halfway, then deceleration
export const easeInOutCubic = (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
};

// quartic easing in - accelerating from zero velocity
export const easeInQuart = (t, b, c, d)=> {
    t /= d;
    return c*t*t*t*t + b;
};

// quartic easing out - decelerating to zero velocity
export const easeOutQuart = (t, b, c, d)=> {
    t /= d;
    t--;
    return -c * (t*t*t*t - 1) + b;
};

// quartic easing in/out - acceleration until halfway, then deceleration
export const easeInOutQuart =  (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t + b;
    t -= 2;
    return -c/2 * (t*t*t*t - 2) + b;
};

// quintic easing in - accelerating from zero velocity
export const easeInQuint =  (t, b, c, d)=> {
    t /= d;
    return c*t*t*t*t*t + b;
};

// quintic easing out - decelerating to zero velocity
export const easeOutQuint = (t, b, c, d)=> {
    t /= d;
    t--;
    return c*(t*t*t*t*t + 1) + b;
};

// quintic easing in/out - acceleration until halfway, then deceleration
export const easeInOutQuint = (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t*t*t + 2) + b;
};


// sinusoidal easing in - accelerating from zero velocity
export const easeInSine = (t, b, c, d)=> {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
};



// sinusoidal easing out - decelerating to zero velocity
export const easeOutSine = (t, b, c, d)=> {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
};



// sinusoidal easing in/out - accelerating until halfway, then decelerating
export const easeInOutSine = (t, b, c, d)=> {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
};

// exponential easing in - accelerating from zero velocity
export const easeInExpo = (t, b, c, d)=> {
    return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
};

// exponential easing out - decelerating to zero velocity
export const easeOutExpo = (t, b, c, d)=> {
    return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
};

// exponential easing in/out - accelerating until halfway, then decelerating
export const easeInOutExpo = (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
    t--;
    return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
};

// circular easing in - accelerating from zero velocity
export const easeInCirc = (t, b, c, d)=> {
    t /= d;
    return -c * (Math.sqrt(1 - t*t) - 1) + b;
};

// circular easing out - decelerating to zero velocity
export const easeOutCirc = (t, b, c, d)=> {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t*t) + b;
};

// circular easing in/out - acceleration until halfway, then deceleration
export const easeInOutCirc = (t, b, c, d)=> {
    t /= d/2;
    if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    t -= 2;
    return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
};

export const easeInElastic = (t, b, c, d)=> {
    let s=1.70158,p=0,a=c;
    if (t===0) return b;  if ((t/=d)===1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; s=p/4; }
    else s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
};

export const easeOutElastic = (t, b, c, d)=> {
    let s=1.70158,p=0,a=c;
    if (t===0) return b;  if ((t/=d)===1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; s=p/4; }
    else s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
};

export const easeInOutElastic = (t, b, c, d)=> {
    let s=1.70158,p=0,a=c;
    if (t===0) return b;  if ((t/=d/2)===2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; s=p/4; }
    else s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
};

export const easeInBack = (t, b, c, d)=> {
    const s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
};

export const easeOutBack = (t, b, c, d)=> {
    const s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
};

export const easeInOutBack = (t, b, c, d)=> {
    let s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
};

export const easeInBounce = (t, b, c, d)=> {
    return c - easeOutBounce (d-t, 0, c, d) + b;
};

export const easeOutBounce  = (t, b, c, d)=> {
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

export const easeInOutBounce = (t, b, c, d)=> {
    if (t < d/2) return easeInBounce(t*2, 0, c, d) * .5 + b;
    else return easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
};