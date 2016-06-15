ve.models.Behaviour.extend({
    walkAnimation: null,

    onCreate: function () {
        var self = this;
        self.walkFwdAnimation = self.getFrAnimation('walkFwd');
        self.walkBackAnimation = self.getFrAnimation('walkBack');
        ve.keyboard.onKeyDown(function (key) {
            switch (key) {
                case ve.keyboard.KEY_LEFT:
                    self.posX -= 1;
                    self.walkBackAnimation.play();
                    break;
                case ve.keyboard.KEY_RIGHT:
                    self.posX += 1;
                    self.walkFwdAnimation.play();
                    break;
                default:
                    break;
            }
        });
        ve.keyboard.onKeyUp(function () {
            self.stopFrAnimations();
            self.setFrameIndex(0);
        });
    },

    onUpdate: function (time) {

    },

    onDestroy: function () {
    }
});



