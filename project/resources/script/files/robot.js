ve.models.Behaviour.extend({

    vel:100,

    onCreate: function () {
        this.leftAnim = this.getFrAnimation('left');
        this.rightAnim = this.getFrAnimation('right');
        this.upAnim = this.getFrAnimation('up');
        this.downAnim = this.getFrAnimation('down');
    },

    onUpdate: function (time) {
        var self = this;
        if (ve.keyboard.isPressed(ve.keyboard.KEY_UP)) {
            self.velY = self.vel;
            self.upAnim.play();
        }
        if (ve.keyboard.isPressed(ve.keyboard.KEY_DOWN)) {
            self.velY = -self.vel;
            self.downAnim.play();
        }
        if (ve.keyboard.isPressed(ve.keyboard.KEY_LEFT)) {
            self.velX = self.vel;
            self.leftAnim.play();
        }
        if (ve.keyboard.isPressed(ve.keyboard.KEY_RIGHT)) {
            self.velX = -self.vel;
            self.rightAnim.play();
        }

        if (
            ve.keyboard.isJustReleased(ve.keyboard.KEY_LEFT) ||
            ve.keyboard.isJustReleased(ve.keyboard.KEY_RIGHT) ||
            ve.keyboard.isJustReleased(ve.keyboard.KEY_UP) ||
            ve.keyboard.isJustReleased(ve.keyboard.KEY_DOWN)
        ) {
            self.stopFrAnimations();
            self.velX = 0;
            self.velY = 0;
        }
    },

    onDestroy: function () {

    }
});



