( function ( w ) {
    function  Game ( ctx, imgObj, timee) {
        this.ctx = ctx;
        this.timee = timee;
        this.imgObj  = imgObj;
        this.roles = [];
        this.ready();
        this.listers = [];
    }
    Game.prototype = {
        constructor: Game,
        ready: function ( ) {
                this.roles.push( getSky( this.ctx, this.imgObj.sky, 4 ) );
                this.roles.push( getSky( this.ctx, this.imgObj.sky, 4 ) );

                for (var i = 0; i < 6; i++) {
                    this.roles.push( getPipe( this.ctx, this.imgObj.pipeDown, this.imgObj.pipeUp, this.imgObj.land.height,  4 ) );
                }

                for (var i = 0; i < 4; i++) {
                    this.roles.push( getLand( this.ctx, this.imgObj.land, 4 ) )
                }

                this.roles.push( getBird( this.ctx, this.imgObj.bird, 3, 1 ,20, 20,1 ) )

        },
        goOn : function ( ) {
            this.ctx.beginPath();
            this.roles.forEach( function ( role) {
                role.draw();
                role.update();
            })
        },
        addListener: function ( fn ) {
            this.listers.push( fn )
        },
        birdOver:function ( ) {
            clearInterval( this.timee );
            this.listers.forEach( function ( lister ) {
                lister();
            })
        },
        draw: function ( ) {
            var bird  = getBird();
            var birdCoreX = bird.x + bird.width /2 ;
            var birdCoreY = bird.y + bird.height /2 ;
            if ( this.ctx.isPointInPath( birdCoreX, birdCoreY ) ||
                    birdCoreY <= 0  || birdCoreY > this.ctx.canvas.height - this.imgObj.land.height
            ) {
                this.birdOver();
            }
            else{
                this.goOn();
            }
        }
    };
    w.getGame = function ( ctx, imgObj, timee) {
        return new Game( ctx, imgObj, timee )
    }
} ( window) );