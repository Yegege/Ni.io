/**
 * Created by 大妹子 on 2017/8/27.
 */
start = function (  ) {
    load.loadImg( {
        bird: './img/bird.png',
        land: './img/land.png',
        pipeDown: './img/pipeDown.png',
        pipeUp: './img/pipeUp.png',
        sky: './img/sky.png'
    }, function ( imgObj ) {
        this.ctx.canvas.width = imgObj.sky.width;
        this.ctx.canvas.height = imgObj.sky.height;


        this.ctx.beginPath();
        this.ctx.clearRect( 0, 0, this.ctx.canvas.width, this.ctx.canvas.height );

        var fen = document.querySelector( '#fen');
        var fe = 0;
            fen.innerHTML = '得分: ' + fe;
        var timee;
        var time = setTimeout(  function ( ) {
            fe += 1;
            fen.innerHTML = '得分: ' + fe;
             timee = setInterval( function () {
                fe++;
                 fen.innerHTML = '得分: ' + fe;
            },1950)
        }, 4650);
        var game = getGame( ctx, imgObj, again );
        var gameOver = getGameOver( ctx , fe );
        game.addListener( function ( ) {
            clearInterval( timer );
            clearInterval( timee );
            clearInterval( time );
            gameOver.draw();
        });
        var timer = setInterval( function ( ) {
            game.draw();
        }, 50 )
    } );
}