/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Preloader.ts" />

module itsis{
	export class Boot extends Phaser.State{
		preload() {

            this.load.image('preloadBar', 'assets/loader.png');
            console.log("test");
        }
 
        create() {
            console.log("test create");
            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;
 
            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;
 
            if (this.game.device.desktop) {
                //  If you have any desktop specific settings, they can go in here
                // this.stage.scale.pageAlignHorizontally = true;
            }
            else {
                //  Same goes for mobile settings.
            }
            console.log("reee");
            this.game.state.start('Preloader', true, false);
 
        }
 
		
	}
}