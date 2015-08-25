/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Preloader.ts" />
/// <reference path="./Boot.ts" />
/// <reference path="./MainMenu.ts" />
/// <reference path="./InGame.ts" />

module itsis{
	export class ItsisGame extends Phaser.Game{
		constructor(){
			super(400,400,Phaser.AUTO,'content',null);
			
			this.state.add('Boot',Boot,false);
			this.state.add('Preloader',Preloader,false);
			this.state.add('MainMenu',MainMenu,false);
			this.state.add('InGame',InGame,false);
			
			
			this.state.start('Boot');
		}
	}
	
}

