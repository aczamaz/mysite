var  figure=function(color,name,y,x){
    var color;// 0-белые, 1- черные
    var name;// от 0 до 15 белые, от 16 до 32 черные 
    var y;//позиция фигуры по вертикали относительно его стороны
    var x;// позиция фигуры по горизонтали относительно его стороны
    var img_url;
};
var chesses=[];
for (var i=0; i<16; i++){
    var chess=new figure();
    chess.color=0;
    chess.name=i;
    if(i<8){
        chess.y=0;
    }else{
        chess.y=1;
    };
    if(i<8){
        chess.x=i;
    }else{
        chess.x=i-8;
    };
    switch(i){
        case 0:
            chess.img_url="img/1.png";
        break;
        case 1:
            chess.img_url="img/2.png";
        break;
        case 2:
            chess.img_url="img/3.png";
        break;
        case 3:
            chess.img_url="img/4.png";
        break;
        case 4:
            chess.img_url="img/5.png";
        break;
        default:
            chess.img_url="img/6.png";
        break;
    };
    chesses.push(chess);
};
for (var i=0; i<16; i++){
    var chess=new figure();
    chess.color=1;
    chess.name=i+16;
    if(i<8){
        chess.y=0;
    }else{
        chess.y=1;
    };
    if(i<8){
        chess.x=i;
    }else{
        chess.x=i-8;
    };
    switch(i){
        case 0:
            chess.img_url="img/7.png";
        break;
        case 1:
            chess.img_url="img/8.png";
        break;
        case 2:
            chess.img_url="img/9.png";
        break;
        case 3:
            chess.img_url="img/10.png";
        break;
        case 4:
            chess.img_url="img/11.png";
        break;
        default:
            chess.img_url="img/12.png";
        break;
    };
    chesses.push(chess);
};
console.log(chesses);