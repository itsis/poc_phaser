/// <reference path="../tsDefinitions/phaser.d.ts" />

/// <reference path="./Boot.ts" />
/// <reference path="./MainMenu.ts" />


module itsis{
	export class ItsisGame extends Phaser.Game{
		constructor(){
			super(800,600,Phaser.AUTO,'content',null);
			
			this.state.add('Boot',Boot,false);
			this.state.add('Preloader',Preloader,false);
			this.state.add('MainMenu',MainMenu,false);
			this.state.start('Boot');

		}
	}
	
}

