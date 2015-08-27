module Itsis {

    export class Player extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'main_character', 0);

            this.anchor.setTo(0.5, 0);

            this.animations.add('walkVertical', [6, 7, 6, 7], 30, true);
            this.animations.add('walkHorizontal', [3, 2, 1, 0], 30, true);
            
            game.add.existing(this);
            
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            
        }

        update() {

            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {

                this.body.velocity.x = -250;
                this.body.velocity.y = -130;
                this.animations.play('walkVertical');

                if (this.scale.x == -1) {
                    this.scale.x = 1;
                }
                
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {

                this.body.velocity.x = 250;
                this.body.velocity.y = 130;
                this.animations.play('walkVertical');

                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }

            }else if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {

                this.body.velocity.x = -250;
                this.body.velocity.y = 130;
                this.animations.play('walkHorizontal');

                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }

            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

                this.body.velocity.x = 250;
                this.body.velocity.y = -130;
                this.animations.play('walkHorizontal');

                if (this.scale.x == -1) {
                    this.scale.x = 1;
                }

            }
            else {
                this.animations.frame = 0;
            }

        }

    }

}
