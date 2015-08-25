/// <reference path="../tsDefinitions/phaser.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var itsis;
(function (itsis) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.Preload = function () {
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            //  Load our actual games assets
            // this.load.image('titlepage', 'assets/titlepage.jpg');
            this.load.image('logo', 'assets/architecte.png');
            // this.load.audio('music', 'assets/title.mp3', true);
            // this.load.spritesheet('simon', 'assets/simon.png', 58, 96, 5);
            // this.load.image('level1', 'assets/level1.png');
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    })(Phaser.State);
    itsis.Preloader = Preloader;
})(itsis || (itsis = {}));
/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Preloader.ts" />
var itsis;
(function (itsis) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            try {
                this.load.image('preloadBar', 'assets/loader.png');
            }
            catch (e) {
                console.log(e);
            }
            console.log("test");
        };
        Boot.prototype.create = function () {
            console.log("test create");
            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;
            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
            }
            else {
            }
            console.log("reee");
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    })(Phaser.State);
    itsis.Boot = Boot;
})(itsis || (itsis = {}));
/// <reference path="../tsDefinitions/phaser.d.ts" />
var itsis;
(function (itsis) {
    var InGame = (function (_super) {
        __extends(InGame, _super);
        function InGame() {
            _super.apply(this, arguments);
        }
        return InGame;
    })(Phaser.Game);
    itsis.InGame = InGame;
})(itsis || (itsis = {}));
/// <reference path="../tsDefinitions/phaser.d.ts" />
var itsis;
(function (itsis) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;
            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            this.input.onDown.addOnce(this.fadeOut, this);
        };
        MainMenu.prototype.fadeOut = function () {
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        };
        MainMenu.prototype.startGame = function () {
            // this.game.state.start('Level1', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    itsis.MainMenu = MainMenu;
})(itsis || (itsis = {}));
/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Preloader.ts" />
/// <reference path="./Boot.ts" />
/// <reference path="./MainMenu.ts" />
/// <reference path="./InGame.ts" />
var itsis;
(function (itsis) {
    var ItsisGame = (function (_super) {
        __extends(ItsisGame, _super);
        function ItsisGame() {
            _super.call(this, 400, 400, Phaser.AUTO, 'content', null);
            this.state.add('Boot', itsis.Boot, false);
            this.state.add('Preloader', itsis.Preloader, false);
            this.state.add('MainMenu', itsis.MainMenu, false);
            this.state.add('InGame', itsis.InGame, false);
            this.state.start('Boot');
        }
        return ItsisGame;
    })(Phaser.Game);
    itsis.ItsisGame = ItsisGame;
})(itsis || (itsis = {}));
/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path='./ItsisGame.ts' />
window.onload = function () {
    var game = new itsis.ItsisGame();
};
