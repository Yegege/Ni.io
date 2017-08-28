(function (w) {
    function  GameOver ( ctx ) {
        this.ctx = ctx;

    }
    GameOver.prototype = {
        draw :  function ( ) {
                this.ctx.fillStyle = 'rgba(100, 100, 100, 0.85)';
                this.ctx.fillRect( 0, 0, this.ctx.canvas.width, this.ctx.canvas.height );
                this.ctx.fillStyle = 'red';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.font = '900 40px 微软雅黑';
                this.ctx.fillText( 'GameOver', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2 );
                this.ctx.fillText( '下次加油！！！', this.ctx.canvas.width / 2 + 30, this.ctx.canvas.height / 2 + 80 );
                return;
            }
        };

    w.getGameOver = function (ctx ) {
        return new GameOver( ctx );
    }
} ( window ));