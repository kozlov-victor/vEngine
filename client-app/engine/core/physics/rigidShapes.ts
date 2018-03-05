
declare const DEBUG:boolean;

const gravityAcceleration:number = 50;

let Vec2 = function (x, y) {
    this.x = x;
    this.y = y;
};

Vec2.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vec2.prototype.add = function (vec) {
    return new Vec2(vec.x + this.x, vec.y + this.y);
};

Vec2.prototype.subtract = function (vec) {
    return new Vec2(this.x - vec.x, this.y - vec.y);
};

Vec2.prototype.scale = function (n) {
    return new Vec2(this.x * n, this.y * n);
};

Vec2.prototype.dot = function (vec) {
    return (this.x * vec.x + this.y * vec.y);
};

Vec2.prototype.cross = function (vec) {
    return (this.x * vec.y - this.y * vec.x);
};

Vec2.prototype.rotate = function (center, angle) {
    //rotate in counterclockwise
    var r = [];

    var x = this.x - center.x;
    var y = this.y - center.y;

    r[0] = x * Math.cos(angle) - y * Math.sin(angle);
    r[1] = x * Math.sin(angle) + y * Math.cos(angle);

    r[0] += center.x;
    r[1] += center.y;

    return new Vec2(r[0], r[1]);
};

Vec2.prototype.normalize = function () {

    var len = this.length();
    if (len > 0) {
        len = 1 / len;
    }
    return new Vec2(this.x * len, this.y * len);
};

Vec2.prototype.distance = function (vec) {
    var x = this.x - vec.x;
    var y = this.y - vec.y;
    return Math.sqrt(x * x + y * y);
};

export function CollisionInfo() {
    this.mDepth = 0;
    this.mNormal = new Vec2(0, 0);
    this.mStart = new Vec2(0, 0);
    this.mEnd = new Vec2(0, 0);
}

/**
 * Set the depth of the CollisionInfo
 * @memberOf CollisionInfo
 * @param {Number} s how much penetration
 * @returns {void}
 */
CollisionInfo.prototype.setDepth = function (s) {
    this.mDepth = s;
};

/**
 * Set the normal of the CollisionInfo
 * @memberOf CollisionInfo
 * @param {vec2} s vector upon which collision interpenetrates
 * @returns {void}
 */
CollisionInfo.prototype.setNormal = function (s) {
    this.mNormal = s;
};

/**
 * Return the depth of the CollisionInfo
 * @memberOf CollisionInfo
 * @returns {Number} how much penetration
 */
CollisionInfo.prototype.getDepth = function () {
    return this.mDepth;
};

/**
 * Return the depth of the CollisionInfo
 * @memberOf CollisionInfo
 * @returns {vec2} vector upon which collision interpenetrates
 */
CollisionInfo.prototype.getNormal = function () {
    return this.mNormal;
};

/**
 * Set the all value of the CollisionInfo
 * @memberOf CollisionInfo
 * @param {Number} d the depth of the CollisionInfo
 * @param {Vec2} n the normal of the CollisionInfo
 * @param {Vec2} s the startpoint of the CollisionInfo
 * @returns {void}
 */
CollisionInfo.prototype.setInfo = function (d, n, s) {
    this.mDepth = d;
    this.mNormal = n;
    this.mStart = s;
    this.mEnd = s.add(n.scale(d));
};

/**
 * change the direction of normal
 * @memberOf CollisionInfo
 * @returns {void}
 */
CollisionInfo.prototype.changeDir = function () {
    this.mNormal = this.mNormal.scale(-1);
    var n = this.mStart;
    this.mStart = this.mEnd;
    this.mEnd = n;
};



function RigidShape(center, mass, friction, restitution) {

    this.mCenter = center;
    this.mInertia = 0;
    this.fixedAngle = false;
    if (mass !== undefined) {
        this.mInvMass = mass;
    } else {
        this.mInvMass = 1;
    }

    if (friction !== undefined) {
        this.mFriction = friction;
    } else {
        this.mFriction = 0.2;
    }

    if (restitution !== undefined) {
        this.mRestitution = restitution;
    } else {
        this.mRestitution = 0.1;
    }

    this.mVelocity = new Vec2(0, 0);

    if (this.mInvMass !== 0) {
        this.mInvMass = 1 / this.mInvMass;
        this.mAcceleration = new Vec2(0, gravityAcceleration); // todo const
    } else {
        this.mAcceleration = new Vec2(0, 0);
    }

    //angle
    this.mAngle = 0;

    //negetive-- clockwise
    //postive-- counterclockwise
    this.mAngularVelocity = 0;

    this.mAngularAcceleration = 0;

    this.mBoundRadius = 0;

}

RigidShape.prototype.updateMass = function (delta) {
    var mass;
    if (this.mInvMass !== 0) {
        mass = 1 / this.mInvMass;
    } else {
        mass = 0;
    }

    mass += delta;
    if (mass <= 0) {
        this.mInvMass = 0;
        this.mVelocity = new Vec2(0, 0);
        this.mAcceleration = new Vec2(0, 0);
        this.mAngularVelocity = 0;
        this.mAngularAcceleration = 0;
    } else {
        this.mInvMass = 1 / mass;
        this.mAcceleration = new Vec2(0, gravityAcceleration); // todo const
    }
    this.updateInertia();
};

RigidShape.prototype.updateInertia = function () {
    // subclass must define this.
    // must work with inverted this.mInvMass
};

RigidShape.prototype.update = function (time,_dt) {

    // if (this.fixed) {
    //     this.mAcceleration.x = 0;
    //     this.mVelocity.x = 0;
    //     this.mAcceleration.y = 0;
    //     this.mVelocity.y = 0;
    //     this.mAngularVelocity = 0;
    //     this.angularAcceleration = 0;
    //     return;
    // }

    var dt = _dt / 1000;

    //v += a*t
    this.mVelocity = this.mVelocity.add(this.mAcceleration.scale(dt));
    //s += v*t
    this.move(this.mVelocity.scale(dt));

    this.mAngularVelocity += this.mAngularAcceleration * dt;
    //if (!this.fixedAngle)
        this.rotate(this.mAngularVelocity * dt);

};

RigidShape.prototype.boundTest = function (otherShape) {
    var vFrom1to2 = otherShape.mCenter.subtract(this.mCenter);
    var rSum = this.mBoundRadius + otherShape.mBoundRadius;
    var dist = vFrom1to2.length();
    if (dist > rSum) {
        //not overlapping
        return false;
    }
    return true;
};

var Circle = function (center, radius, mass, friction, restitution) {
    RigidShape.call(this, center, mass, friction, restitution);
    this.mType = "Circle";
    this.mRadius = radius;
    this.mBoundRadius = radius;
    //The start point of line in circle
    this.mStartpoint = new Vec2(center.x, center.y - radius);
    this.updateInertia();
};

var prototype = Object.create(RigidShape.prototype);
prototype.constructor = Circle;
Circle.prototype = prototype;

Circle.prototype.move = function (s) {
    this.mStartpoint = this.mStartpoint.add(s);
    this.mCenter = this.mCenter.add(s);
    return this;
};

Circle.prototype.draw = function (context) {
    context.beginPath();

    //draw a circle
    context.arc(this.mCenter.x, this.mCenter.y, this.mRadius, 0, Math.PI * 2, true);

    //draw a line from start point toward center
    context.moveTo(this.mStartpoint.x, this.mStartpoint.y);
    context.lineTo(this.mCenter.x, this.mCenter.y);

    context.closePath();
    context.stroke();
};

//rotate angle in counterclockwise
Circle.prototype.rotate = function (angle) {
    this.mAngle += angle;
    this.mStartpoint = this.mStartpoint.rotate(this.mCenter, angle);
    return this;
};

Circle.prototype.updateInertia = function () {
    if (this.mInvMass === 0) {
        this.mInertia = 0;
    } else {
        // this.mInvMass is inverted!!
        // Inertia=mass * radius^2
        // 12 is a constant value that can be changed
        this.mInertia = (1 / this.mInvMass) * (this.mRadius * this.mRadius) / 12;
    }
};

Circle.prototype.collisionTest = function (otherShape, collisionInfo) {
    var status = false;
    if (otherShape.mType === "Circle") {
        status = this.collidedCircCirc(this, otherShape, collisionInfo);
    } else {
        status = otherShape.collidedRectCirc(this, collisionInfo);
    }
    return status;
};

Circle.prototype.collidedCircCirc = function (c1, c2, collisionInfo) {
    var vFrom1to2 = c2.mCenter.subtract(c1.mCenter);
    var rSum = c1.mRadius + c2.mRadius;
    var dist = vFrom1to2.length();
    if (dist > Math.sqrt(rSum * rSum)) {
        //not overlapping
        return false;
    }
    if (dist !== 0) {
        // overlapping bu not same position
        var normalFrom2to1 = vFrom1to2.scale(-1).normalize();
        var radiusC2 = normalFrom2to1.scale(c2.mRadius);
        collisionInfo.setInfo(rSum - dist, vFrom1to2.normalize(), c2.mCenter.add(radiusC2));
    } else {
        //same position
        if (c1.mRadius > c2.mRadius) {
            collisionInfo.setInfo(rSum, new Vec2(0, -1), c1.mCenter.add(new Vec2(0, c1.mRadius)));
        } else {
            collisionInfo.setInfo(rSum, new Vec2(0, -1), c2.mCenter.add(new Vec2(0, c2.mRadius)));
        }
    }
    return true;
};

var Rectangle = function (center, width, height, mass?, friction?, restitution?) {

    RigidShape.call(this, center, mass, friction, restitution);
    this.mType = "Rectangle";
    this.mWidth = width;
    this.mHeight = height;
    this.mBoundRadius = Math.sqrt(width * width + height * height) / 2;
    this.mVertex = [];
    this.mFaceNormal = [];

    //0--TopLeft;1--TopRight;2--BottomRight;3--BottomLeft
    this.mVertex[0] = new Vec2(center.x - width / 2, center.y - height / 2);
    this.mVertex[1] = new Vec2(center.x + width / 2, center.y - height / 2);
    this.mVertex[2] = new Vec2(center.x + width / 2, center.y + height / 2);
    this.mVertex[3] = new Vec2(center.x - width / 2, center.y + height / 2);

    //0--Top;1--Right;2--Bottom;3--Left
    //mFaceNormal is normal of face toward outside of rectangle
    this.mFaceNormal[0] = this.mVertex[1].subtract(this.mVertex[2]);
    this.mFaceNormal[0] = this.mFaceNormal[0].normalize();
    this.mFaceNormal[1] = this.mVertex[2].subtract(this.mVertex[3]);
    this.mFaceNormal[1] = this.mFaceNormal[1].normalize();
    this.mFaceNormal[2] = this.mVertex[3].subtract(this.mVertex[0]);
    this.mFaceNormal[2] = this.mFaceNormal[2].normalize();
    this.mFaceNormal[3] = this.mVertex[0].subtract(this.mVertex[1]);
    this.mFaceNormal[3] = this.mFaceNormal[3].normalize();

    this.updateInertia();
};

var prototype = Object.create(RigidShape.prototype);
prototype.constructor = Rectangle;
Rectangle.prototype = prototype;

Rectangle.prototype.rotate = function (angle) {
    this.mAngle += angle;
    var i;
    for (i = 0; i < this.mVertex.length; i++) {
        this.mVertex[i] = this.mVertex[i].rotate(this.mCenter, angle);
    }
    this.mFaceNormal[0] = this.mVertex[1].subtract(this.mVertex[2]);
    this.mFaceNormal[0] = this.mFaceNormal[0].normalize();
    this.mFaceNormal[1] = this.mVertex[2].subtract(this.mVertex[3]);
    this.mFaceNormal[1] = this.mFaceNormal[1].normalize();
    this.mFaceNormal[2] = this.mVertex[3].subtract(this.mVertex[0]);
    this.mFaceNormal[2] = this.mFaceNormal[2].normalize();
    this.mFaceNormal[3] = this.mVertex[0].subtract(this.mVertex[1]);
    this.mFaceNormal[3] = this.mFaceNormal[3].normalize();
    return this;
};

Rectangle.prototype.move = function (v) {
    var i;
    for (i = 0; i < this.mVertex.length; i++) {
        this.mVertex[i] = this.mVertex[i].add(v);
    }
    this.mCenter = this.mCenter.add(v);
    return this;
};

Rectangle.prototype.draw = function (context) {
    context.save();

    context.translate(this.mVertex[0].x, this.mVertex[0].y);
    context.rotate(this.mAngle);
    context.strokeRect(0, 0, this.mWidth, this.mHeight);

    context.restore();
};

Rectangle.prototype.updateInertia = function () {
    // Expect this.mInvMass to be already inverted!
    if (this.mInvMass === 0) {
        this.mInertia = 0;
    } else {
        //inertia=mass*width^2+height^2
        this.mInertia = (1 / this.mInvMass) * (this.mWidth * this.mWidth + this.mHeight * this.mHeight) / 12;
        this.mInertia = 1 / this.mInertia;
    }
};

Rectangle.prototype.collisionTest = function (otherShape, collisionInfo) {
    var status = false;
    if (otherShape.mType === "Circle") {
        status = this.collidedRectCirc(otherShape, collisionInfo);
    } else {
        status = this.collidedRectRect(this, otherShape, collisionInfo);
    }
    return status;
};

// todo remove
RigidShape.prototype.boundTest = function (otherShape) {
    var vFrom1to2 = otherShape.mCenter.subtract(this.mCenter);
    var rSum = this.mBoundRadius + otherShape.mBoundRadius;
    var dist = vFrom1to2.length();
    if (dist > rSum) {
        //not overlapping
        return false;
    }
    return true;
};

var SupportStruct = function () {
    this.mSupportPoint = null;
    this.mSupportPointDist = 0;
};
var tmpSupport = new SupportStruct();

Rectangle.prototype.findSupportPoint = function (dir, ptOnEdge) {
    //the longest project length
    var vToEdge;
    var projection;

    tmpSupport.mSupportPointDist = -9999999;
    tmpSupport.mSupportPoint = null;
    //check each vector of other object
    for (var i = 0; i < this.mVertex.length; i++) {
        vToEdge = this.mVertex[i].subtract(ptOnEdge);
        projection = vToEdge.dot(dir);

        //find the longest distance with certain edge
        //dir is -n direction, so the distance should be positive
        if ((projection > 0) && (projection > tmpSupport.mSupportPointDist)) {
            tmpSupport.mSupportPoint = this.mVertex[i];
            tmpSupport.mSupportPointDist = projection;
        }
    }
};

/**
 * Find the shortest axis that overlapping
 * @memberOf Rectangle
 * @param {Rectangle} otherRect  another rectangle that being tested
 * @param {CollisionInfo} collisionInfo  record the collision information
 * @returns {Boolean} true if has overlap part in all four directions.
 * the code is convert from http://gamedevelopment.tutsplus.com/tutorials/how-to-create-a-custom-2d-physics-engine-oriented-rigid-bodies--gamedev-8032
 */
Rectangle.prototype.findAxisLeastPenetration = function (otherRect, collisionInfo) {

    var n;
    var supportPoint;

    var bestDistance = 999999;
    var bestIndex = null;

    var hasSupport = true;
    var i = 0;

    while ((hasSupport) && (i < this.mFaceNormal.length)) {
        // Retrieve a face normal from A
        n = this.mFaceNormal[i];

        // use -n as direction and the vectex on edge i as point on edge
        var dir = n.scale(-1);
        var ptOnEdge = this.mVertex[i];
        // find the support on B
        // the point has longest distance with edge i
        otherRect.findSupportPoint(dir, ptOnEdge);
        hasSupport = (tmpSupport.mSupportPoint !== null);

        //get the shortest support point depth
        if ((hasSupport) && (tmpSupport.mSupportPointDist < bestDistance)) {
            bestDistance = tmpSupport.mSupportPointDist;
            bestIndex = i;
            supportPoint = tmpSupport.mSupportPoint;
        }
        i = i + 1;
    }
    if (hasSupport) {
        //all four directions have support point
        var bestVec = this.mFaceNormal[bestIndex].scale(bestDistance);
        collisionInfo.setInfo(bestDistance, this.mFaceNormal[bestIndex], supportPoint.add(bestVec));
    }
    return hasSupport;
};
/**
 * Check for collision between RigidRectangle and RigidRectangle
 * @param {Rectangle} r1 Rectangle object to check for collision status
 * @param {Rectangle} r2 Rectangle object to check for collision status against
 * @param {CollisionInfo} collisionInfo Collision info of collision
 * @returns {Boolean} true if collision occurs
 * @memberOf Rectangle
 */
var collisionInfoR1 = new CollisionInfo();
var collisionInfoR2 = new CollisionInfo();
Rectangle.prototype.collidedRectRect = function (r1, r2, collisionInfo) {

    var status1 = false;
    var status2 = false;

    //find Axis of Separation for both rectangle
    status1 = r1.findAxisLeastPenetration(r2, collisionInfoR1);

    if (status1) {
        status2 = r2.findAxisLeastPenetration(r1, collisionInfoR2);
        if (status2) {
            //if both of rectangles are overlapping, choose the shorter normal as the normal
            if (collisionInfoR1.getDepth() < collisionInfoR2.getDepth()) {
                var depthVec = collisionInfoR1.getNormal().scale(collisionInfoR1.getDepth());
                collisionInfo.setInfo(collisionInfoR1.getDepth(), collisionInfoR1.getNormal(), collisionInfoR1.mStart.subtract(depthVec));
            } else {
                collisionInfo.setInfo(collisionInfoR2.getDepth(), collisionInfoR2.getNormal().scale(-1), collisionInfoR2.mStart);
            }
        }
    }
    return status1 && status2;
};

/**
 * Check for collision between Rectangle and Circle
 * @param {Circle} otherCir circle to check for collision status against
 * @param {CollisionInfo} collisionInfo Collision info of collision
 * @returns {Boolean} true if collision occurs
 * @memberOf Rectangle
 */
Rectangle.prototype.collidedRectCirc = function (otherCir, collisionInfo) {

    var inside = true;
    var bestDistance = -99999;
    var nearestEdge = 0;
    var i, v;
    var circ2Pos, projection;
    for (i = 0; i < 4; i++) {
        //find the nearest face for center of circle
        circ2Pos = otherCir.mCenter;
        v = circ2Pos.subtract(this.mVertex[i]);
        projection = v.dot(this.mFaceNormal[i]);
        if (projection > 0) {
            //if the center of circle is outside of rectangle
            bestDistance = projection;
            nearestEdge = i;
            inside = false;
            break;
        }
        if (projection > bestDistance) {
            bestDistance = projection;
            nearestEdge = i;
        }
    }
    var dis, normal, radiusVec;
    if (!inside) {
        //the center of circle is outside of rectangle

        //v1 is from left vertex of face to center of circle
        //v2 is from left vertex of face to right vertex of face
        var v1 = circ2Pos.subtract(this.mVertex[nearestEdge]);
        var v2 = this.mVertex[(nearestEdge + 1) % 4].subtract(this.mVertex[nearestEdge]);

        var dot = v1.dot(v2);

        if (dot < 0) {
            //the center of circle is in corner region of mVertex[nearestEdge]
            dis = v1.length();
            //compare the distance with radium to decide collision
            if (dis > otherCir.mRadius) {
                return false;
            }

            normal = v1.normalize();
            radiusVec = normal.scale(-otherCir.mRadius);
            collisionInfo.setInfo(otherCir.mRadius - dis, normal, circ2Pos.add(radiusVec));
        } else {
            //the center of circle is in corner region of mVertex[nearestEdge+1]

            //v1 is from right vertex of face to center of circle
            //v2 is from right vertex of face to left vertex of face
            v1 = circ2Pos.subtract(this.mVertex[(nearestEdge + 1) % 4]);
            v2 = v2.scale(-1);
            dot = v1.dot(v2);
            if (dot < 0) {
                dis = v1.length();
                //compare the distance with radium to decide collision
                if (dis > otherCir.mRadius) {
                    return false;
                }
                normal = v1.normalize();
                radiusVec = normal.scale(-otherCir.mRadius);
                collisionInfo.setInfo(otherCir.mRadius - dis, normal, circ2Pos.add(radiusVec));
            } else {
                //the center of circle is in face region of face[nearestEdge]
                if (bestDistance < otherCir.mRadius) {
                    radiusVec = this.mFaceNormal[nearestEdge].scale(otherCir.mRadius);
                    collisionInfo.setInfo(otherCir.mRadius - bestDistance, this.mFaceNormal[nearestEdge], circ2Pos.subtract(radiusVec));
                } else {
                    return false;
                }
            }
        }
    } else {
        //the center of circle is inside of rectangle
        radiusVec = this.mFaceNormal[nearestEdge].scale(otherCir.mRadius);
        collisionInfo.setInfo(otherCir.mRadius - bestDistance, this.mFaceNormal[nearestEdge], circ2Pos.subtract(radiusVec));
    }
    return true;
};

export let RigidCircle = Circle;
export let RigidRectangle = Rectangle;
export let V2 = Vec2;