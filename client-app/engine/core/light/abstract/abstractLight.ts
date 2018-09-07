import {DebugError} from "../../../debugError";

declare const DEBUG:boolean;

import {Game} from "../../game";
import {Color} from "../../color";
import {Transient} from "../../misc/decorators";

@Transient({
    game: true
})
export abstract class AbstractLight {

    public color:Color = Color.WHITE;
    public intensity:number = 1.0;

    protected game:Game;

    constructor(game:Game){
        if (DEBUG && !game) throw new DebugError(`game instanse is not passed to AbstractLight constructor`);
        this.game = game;
    }

}