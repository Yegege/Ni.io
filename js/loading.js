/**
 * Created by 大妹子 on 2017/8/26.
 */
load =  {
    loadImg : function ( imgUrl, fn ) {
        var imgObj = {};
        var tempImg;
        length = 0;
        loaded = 0;
        for ( var key in imgUrl ) {
            length++;
            tempImg = new Image();
            tempImg.onload = function () {
                loaded++;
                if( loaded >= length ) {
                    fn( imgObj );
                }
            }
            tempImg.src  = imgUrl[key];
            imgObj[key] = tempImg
        }
    }
}