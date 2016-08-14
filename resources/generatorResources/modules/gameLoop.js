// http://gameprogrammingpatterns.com/game-loop.html#play-catch-up
(function () {

    ve_local.GameLoop = function () {

        var requestAnimationFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};

        var kFPS = 60;
        // Frames per second
        var kMPF = 1000 / kFPS; // Milleseconds per frame.

        // Variables for timing gameloop.
        var mPreviousTime;
        var mLagTime;
        var mCurrentTime;
        var mElapsedTime;

        var mUpdate, mRender;

        // The current loop state (running or should stop)
        var mIsLoopRunning = false;

        // This function assumes it is sub-classed from MyGame
        var _runLoop = function () {
            
            // Step B: compute elapsed time since last RunLoop was executed
            mCurrentTime = Date.now();
            mElapsedTime = mCurrentTime - mPreviousTime;
            mPreviousTime = mCurrentTime;
            mLagTime += mElapsedTime;

            // Step C: update the game the appropriate number of times.
            // Update only every Milliseconds per frame.
            // If lag larger then update frames, update until caught up.
            while ((mLagTime >= kMPF) && mIsLoopRunning) {
                // call MyGame.update()
                mUpdate(mCurrentTime,mElapsedTime);
                mLagTime -= kMPF;
            }

            // Step D: now let's draw
            // Call MyGame.draw()
            mRender();

            if (mIsLoopRunning) {
                // Step A: set up for next call to _runLoop and update input!
                requestAnimationFrame(function () {
                    _runLoop();
                });
            }

        };

        this.setUpdateFn = function(fn) {
           mUpdate = fn;
        };

        this.setRenderFn = function(fn) {
            mRender = fn;
        };

        this.start = function() {
            mPreviousTime = Date.now();
            mLagTime = 0.0;
            mIsLoopRunning = true;
            requestAnimationFrame(_runLoop);
        };

        this.stop = function(){
            mIsLoopRunning = false;
        }
    };

})();