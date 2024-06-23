import { Scene } from "excalibur";
import { Resources } from "../resources.js";
import { Background } from "../classes/background.js";
import { Player } from "../classes/player.js";
import { Ground } from "../classes/ground.js";
import { Settings } from "../settings.js";
import { Spawner } from "../classes/spawner.js";
import { Healthbar } from "../classes/healthbar.js";
import { Score } from "../classes/score.js";

export class Level1 extends Scene {
    constructor(engine) {
        super();
        this.engine = engine;
    }

    onInitialize(engine) {
        Resources.Music.play(0.5);
        const background1 = new Background("Background", 200);
        const ground = new Ground(Settings.groundHeight); 
        const healthbar = new Healthbar(engine);
        const score = new Score();
        const player = new Player(healthbar, score); 
        const spawner = new Spawner();

        healthbar.setPlayer(player);

        this.add(background1);
        this.add(player);
        this.add(ground);
        this.add(healthbar);
        this.add(spawner);
        this.add(score);  
    }

    onActivate() {
        super.onActivate();
        if (Resources.Music.isPlaying()) {
            Resources.Music.stop(); 
        }
        Resources.Music.play(0.5);
    }

    onDeactivate() {
        super.onDeactivate();
        Resources.Music.stop();
    }

    restart() {
        this.clear();
        this.onInitialize(this.engine);
    }
}
