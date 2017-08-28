/**
 * Created by 大妹子 on 2017/8/26.
 */
( function ( w ) {
    function  Pipe ( ctx, imgDown, imgUp, landHeight, speed ) {
        this.ctx = ctx;
        this.imgDown = imgDown
        this.imgUp = imgUp;
        this.landHeight = landHeight;
        this.speed = speed;
        this.space = 130;
        this.height = this.imgDown.height;
        this.width = this.imgDown.width;
        this.minHeight = 100;
        Pipe.len++;
        Pipe.len =  Pipe.len >=7 ? 1:Pipe.len;
        this.x = 350 + this.width * ( Pipe.len - 1 ) * 3 ;
        this._init();
    }
    Pipe.len = 0;
    Pipe.prototype = {
        _init : function ( ) {
            var maxHeight = this.ctx.canvas.height - this.space - this.landHeight - this.minHeight;
            var randomHeight = this.minHeight + Math.random() * ( maxHeight - this.minHeight );
            randomHeight = randomHeight < this.minHeight? this.minHeight : randomHeight;
            this.imgDownY = randomHeight - this.height;
            this.imgUpY = randomHeight + this.space;
        },
        draw: function ( ) {
            this.ctx.drawImage( this.imgDown, this.x, this.imgDownY );
            this.ctx.drawImage( this.imgUp, this.x, this.imgUpY );
            this._drawPath();
        },
        update : function ( ) {
            this.x -= this.speed;
            if ( this.x <= -this.width ) {
                this._init();
                this.x += this.width * Pipe.len * 3  ;
            }
        },
        _drawPath : function ( ) {
            this.ctx.rect( this.x, this.imgDownY, this.width, this.height );
            this.ctx.rect( this.x, this.imgUpY, this.width, this.height )
        }
    }
    w.getPipe = function ( ctx, imgDown, imgUp, landHeight, speed ) {
        return new Pipe( ctx, imgDown, imgUp, landHeight, speed )
    }
} ( window ) );