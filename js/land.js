/**
 * Created by 大妹子 on 2017/8/26.
 */
( function ( w ) {
    function  Land ( ctx, img, speed ) {
        this.ctx = ctx;
        this.img = img;
        this.speed = speed;
        this.width = this.img.width;
        this.height = this.img.height;
        Land.len++;
        Land.len = Land.len >=5? 1 :Land.len;
        this.x = this.width * ( Land.len - 1 );
        this.y = this.ctx.canvas.height - this.img.height;
    }
    Land.len = 0;
    Land.prototype = {
        constructor: Land,
        draw: function ( ) {
            this.ctx.drawImage( this.img, this.x, this.y )
        },
        update: function ( ) {
            this.x -= this.speed;
            if ( this.x < -this.width ) {
                this.x += this.width * Land.len;
            }
        }
    };
    w.getLand = function ( ctx, img, speed ) {
        return new Land( ctx, img, speed )
    }
} ( window ));