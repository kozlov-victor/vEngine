
export default class Vec2 {

    constructor(x=0,y=0){
        this.x = x;
        this.y = y;
    }

    // скалярное произведение
    dotProduct(another){
        return this.x*another.x + this.y*another.y;
    }

    crossProduct(another) {
        return this.x * another.y - this.y * another.x;
    }

    setXY(x,y){
        this.x = x;
        this.y = y;
    }

    addXY(x,y){
        this.x += x;
        this.y += y;
    }

    multToScalar(scalar,mutateOrigin = true){
        if (mutateOrigin) return new Vec2(this.x*scalar,this.y*scalar);
        this.x*=scalar;
        this.y*=scalar;
        return this;
    }

    divByScalar(scalar,mutateOrigin = true){
        return this.multToScalar(1/scalar,mutateOrigin);
    }

    plus(another,mutateOrigin = false){
        if (!mutateOrigin) return new Vec2(this.x+another.x,this.y+another.y);
        this.x+=another.x;
        this.y+=another.y;
        return this;
    }

    minus(another,mutateOrigin = false){
        if (!mutateOrigin) return new Vec2(this.x-another.x,this.y-another.y);
        this.x-=another.x;
        this.y-=another.y;
        return this;
    }

    getLength() {
        return Math.sqrt(this.lengthSquared());
    }

    lengthSquared() {
        return (this.x * this.x) + (this.y * this.y);
    }

    normalize() {
        let length = this.getLength();
        this.x = this.x / length;
        this.y = this.y / length;
        return this;
    }

    setLength(value) {
        let _angle = this.getAngle();
        this.x = Math.cos(_angle) * value;
        this.y = Math.sin(_angle) * value;
    };

    getAngle() {
        return Math.atan2(this.y, this.x);
    };

    getAngleBetween(that){
        return Math.acos(
            (this.x*that.x + this.y*that.y)/
            this.getLength()*that.getLength()
        )
    }

    setAngle(value) {
        let len = this.getLength();
        this.x = Math.cos(value) * len;
        this.y = Math.sin(value) * len;
    };

    clone() {
        return new Vec2(this.x, this.y);
    }

    static angleBetween(v1, v2) {
        v1 = v1.clone().normalize();
        v2 = v2.clone().normalize();
        return Math.acos(v1.dotProduct(v2));
    };

    static normalBetween(v1,v2){
        let v = v1.minus(v2);
        return v.normalize();
    }

    static distance(a,b) {
        return Math.sqrt(Vec2.distanceSquared(a,b));
    }

    static distanceSquared(a, b) {
        return (a.x - b.x)*(a.x - b.x) + (a.y - b.y)*((a.y - b.y));
    }

}