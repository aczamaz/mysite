var  figure=function(color,name,y,x){
    var color;// 0-белые, 1- черные
    var name;// от 0 до 15 белые, от 16 до 32 черные 
    var y;//позиция фигуры по вертикали относительно его стороны
    var x;// позиция фигуры по горизонтали относительно его стороны
    var img;
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
    chesses.push(chess);
};
console.log(chesses);