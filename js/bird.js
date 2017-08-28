/**
 * Created by 大妹子 on 2017/8/26.
 */
( function ( w ) {
    function  Bird ( ctx, img, nWidth, nHeight, x, y, speed ) {
        this.ctx = ctx;
        this.img = img;
        this.nHeight = nHeight;
        this.nWidth = nWidth;
        this.speed = speed || 2;
        this.x = x;
        this.y = y;
        Bird.len = 0;
        this.width = this.img.width / this.nWidth;
        this.height = this.img.height / this.nHeight;
        this.speedA = 0.7;
        this._bird();

    }
    Bird.prototype = {
        constructor: Bird,
        draw : function ( ) {
            var rotate = Math.PI / 180 * 10 * this.speed;
            var maxRotate = Math.PI / 180 * 40;
            var minRotate = Math.PI / 180 * -40;
            rotate = rotate > maxRotate? maxRotate : rotate;
            rotate = rotate < minRotate? minRotate : rotate;
            this.ctx.save();
            this.ctx.translate ( this.x + this.width / 2 , this.y + this.height / 2  );
            this.ctx.rotate( rotate );
            this.ctx.drawImage( this.img, this.width * Bird.len, 0, this.width, this.height,
                -this.width / 2, -this.height / 2, this.width, this.height );
            this.ctx.restore()
        },
        update: function ( ) {
            Bird.len = ++Bird.len >= 3 ? 0 : Bird.len;
            this.y += this.speed;
            this.speed += this.speedA;
        },
        _bird : function ( ) {
            var self = this;
            this.ctx.canvas.addEventListener( 'click', function () {
                self.speed += -21;
            })
        }
    };
    var bird = null;
    w.getBird = function (  ctx, img, nWidth, nHeight, x, y, speed ) {
        if ( !bird ) {
            bird = new Bird(  ctx, img, nWidth, nHeight, x, y, speed  )
        }
        return bird;
    }
} ( window ) );