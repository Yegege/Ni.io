/**
 * Created by 大妹子 on 2017/8/26.
 */
( function ( w ) {
    function Sky ( ctx, img, speed ) {
        this.ctx = ctx;
        this.img= img;
        this.speed = speed;
        this.width = this.img.width;
        Sky.len++;
        this.x = this.width * ( Sky.len - 1 );
        this.y = 0;
    }
    Sky.len = 0;
    Sky.prototype = {
        constructor: Sky,
        draw: function ( ) {
            this.ctx.drawImage( this.img, this.x, this.y );
        },
        update: function ( ) {
            this.x -= this.speed;
            if ( this.x <= -this.width ) {
                this.x += this.width * Sky.len;
            }
        }

    };
    w.getSky = function ( ctx, img, speed ) {
        return new Sky ( ctx, img, speed )
    }
} ( window ));