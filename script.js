var  figure=function(color,name,y,x){
    var color;// 0-белые, 1- черные
    var name;// от 0 до 15 белые, от 16 до 32 черные 
    var y;//позиция фигуры по вертикали относительно его стороны
    var x;// позиция фигуры по горизонтали относительно его стороны
    var img_url;
};
var chesses=[];//фигуры шахмат
var color_game_table=[];//1 - черный 0 - белый
var game_table=[];//положение фигур на доске
var my_color=0;
var vr_fig,vr_pos_x,vr_pos_y;
function fill_color_game_table(){//заполнение доски черно белыми квадратами
    for(var i=0; i<8; i++){
        var table=[];
        for(var j=0; j<8; j++){
            if((i+j)%2!=0){
                table.push(1);
            }else{
                table.push(0);
            };
        };
        color_game_table.push(table);
    };
};
function init_mass_chesses(){
    for (var i=0; i<16; i++){
        var chess=new figure();
        chess.color=1;
        chess.name=i;
        if(i==0){
            chess.img_url="img/1.png";
        }else if(i==1){
            chess.img_url="img/2.png";
        }else if(i==2 || i==3){
            chess.img_url="img/3.png";
        }else if(i==4 || i==5){
            chess.img_url="img/4.png";
        }else if(i==6 || i==7){
            chess.img_url="img/5.png";
        }else{
            chess.img_url="img/6.png";
        };
        chesses.push(chess);
    };
    for (var i=0; i<16; i++){
        var chess=new figure();
        chess.color=0;
        chess.name=i+16;
        if(i==0){
            chess.img_url="img/7.png";
        }else if(i==1){
            chess.img_url="img/8.png";
        }else if(i==2 || i==3){
            chess.img_url="img/9.png";
        }else if(i==4 || i==5){
            chess.img_url="img/10.png";
        }else if(i==6 || i==7){
            chess.img_url="img/11.png";
        }else{
            chess.img_url="img/12.png";
        };
        chesses.push(chess);
    };
};
function fill_game_table(who_create_game){//заполнение доски фигурами
    if(who_create_game==1){
    game_table=[[23,21,19,16,17,18,20,22],
                [31,30,29,28,27,26,25,24],
                [50,50,50,50,50,50,50,50],
                [50,50,50,50,50,50,50,50],
                [50,50,50,50,50,50,50,50],
                [50,50,50,50,50,50,50,50],
                [8,9,10,11,12,13,14,15],
                [6,4,2,0,1,3,5,7]];
    }else{
        game_table=[[6,4,2,0,1,3,5,7],
                [8,9,10,11,12,13,14,15],
                [50,50,50,50,50,50,50,50],
                [50,50,50,50,50,50,50,50],
                [50,50,50,50,50,50,50,50],
                [50,50,50,50,50,50,50,50],
                [31,30,29,28,27,26,25,24],
                [23,21,19,16,17,18,20,22]];
    };
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            if(game_table[i][j]!=50){
                chesses[game_table[i][j]].x=j;
                chesses[game_table[i][j]].y=i;
            };
        };
    };
};
function fill_table_colors(){
    $("#game_table").html("");
    var ready_table="<table>";
    for(var i=0; i<8;i++){
        ready_table+="<tr>";
        for(var j=0; j<8; j++){
            if(color_game_table[i][j]==0){
                ready_table+="<td class='white' id="+"td"+(i)+""+(j)+" >";
                if(game_table[i][j]!=50){
                    ready_table+="<img data-idel="+game_table[i][j]+" id="+"img"+(i)+""+(j)+">";
                    ready_table+="</td>";
                }else{
                    ready_table+="</td>";
                };
            }else{
                ready_table+="<td class='black' id="+"td"+(i)+""+(j)+" >";
                if(game_table[i][j]!=50){
                    ready_table+="<img data-idel="+game_table[i][j]+" id="+"img"+(i)+""+(j)+">";
                    ready_table+="</td>";
                }else{
                    ready_table+="</td>";
                };
            };
        };
        ready_table+="</tr>";    
    };
    ready_table+="</table>";
    $("#game_table").append(ready_table);
};
function fill_table_chesses(){
     for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            if(game_table[i][j]!=50){
                $("#"+"img"+i+""+j).attr('src',chesses[game_table[i][j]].img_url);
            };
        };
    };
};

init_mass_chesses();
fill_game_table();
fill_color_game_table();
fill_table_colors();
fill_table_chesses();
//drag on drop
$('img').draggable({
    create: function() {
        if(chesses[parseInt($(this).data('idel'))].color!=my_color){
             $(this).draggable("disable")
        };
    },
    start: function(){
        var elem_id=$(this).data('idel');
        vr_pos_x=chesses[parseInt(elem_id)].x;
        vr_pos_y=chesses[parseInt(elem_id)].y;
        vr_fig=$("#td"+vr_pos_y+""+vr_pos_x).html();
    },
    stop: function() {
    }
});
$('img').mouseup(function(){
    var elem_id=$(this).data('idel');
    var position_x=Math.ceil(($(this).offset().left - $("table").offset().left)/100)-1;
    var position_y=Math.ceil(($(this).offset().top-$("table").offset().top)/100)-1;
    console.log(position_x+" "+position_y+" "+($(this).offset().left-$("table").offset().left)+" "+($(this).offset().top-$("table").offset().top));
    $("#td"+vr_pos_y+""+vr_pos_x).html($("#td"+position_y+""+position_x).html());
    $("#td"+position_y+""+position_x).html(vr_fig);
    game_table[position_y][position_x]=game_table[vr_pos_y][vr_pos_x];;
    game_table[vr_pos_y][vr_pos_x]=vr_fig;
    chesses[parseInt(elem_id)].x=position_x;
    chesses[parseInt(elem_id)].y=position_y;
});
