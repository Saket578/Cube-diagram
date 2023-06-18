var Fside = ["blue","blue","blue","blue","blue","blue","blue","blue","blue",];
var Lside = ["orange","orange","orange","orange","orange","orange","orange","orange","orange"];
var Rside = ["red","red","red","red","red","red","red","red","red",];
var Bside = ["green","green","green","green","green","green","green","green","green"];
var Uside = ["yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow"];
var Dside = ["white","white","white","white","white","white","white","white","white"];

var temporary_block_1 = null;
var startY = null;
var endY = null;
var disY = null;
var trigger_touchend = null;

function printAll(){
document.getElementById("Ftl").src = Fside[0]+".png";
document.getElementById("Ftm").src = Fside[1]+".png";
document.getElementById("Ftr").src = Fside[2]+".png";
document.getElementById("Fml").src = Fside[3]+".png";
document.getElementById("Fmm").src = Fside[4]+".png";
document.getElementById("Fmr").src = Fside[5]+".png";
document.getElementById("Fbl").src = Fside[6]+".png";
document.getElementById("Fbm").src = Fside[7]+".png";
document.getElementById("Fbr").src = Fside[8]+".png";

document.getElementById("Rtl").src = Rside[0]+".png";
document.getElementById("Rtm").src = Rside[1]+".png";
document.getElementById("Rtr").src = Rside[2]+".png";
document.getElementById("Rml").src = Rside[3]+".png";
document.getElementById("Rmm").src = Rside[4]+".png";
document.getElementById("Rmr").src = Rside[5]+".png";
document.getElementById("Rbl").src = Rside[6]+".png";
document.getElementById("Rbm").src = Rside[7]+".png";
document.getElementById("Rbr").src = Rside[8]+".png";

document.getElementById("Ltl").src = Lside[0]+".png";
document.getElementById("Ltm").src = Lside[1]+".png";
document.getElementById("Ltr").src = Lside[2]+".png";
document.getElementById("Lml").src = Lside[3]+".png";
document.getElementById("Lmm").src = Lside[4]+".png";
document.getElementById("Lmr").src = Lside[5]+".png";
document.getElementById("Lbl").src = Lside[6]+".png";
document.getElementById("Lbm").src = Lside[7]+".png";
document.getElementById("Lbr").src = Lside[8]+".png";

document.getElementById("Btl").src = Bside[0]+".png";
document.getElementById("Btm").src = Bside[1]+".png";
document.getElementById("Btr").src = Bside[2]+".png";
document.getElementById("Bml").src = Bside[3]+".png";
document.getElementById("Bmm").src = Bside[4]+".png";
document.getElementById("Bmr").src = Bside[5]+".png";
document.getElementById("Bbl").src = Bside[6]+".png";
document.getElementById("Bbm").src = Bside[7]+".png";
document.getElementById("Bbr").src = Bside[8]+".png";

document.getElementById("Utl").src = Uside[0]+".png";
document.getElementById("Utm").src = Uside[1]+".png";
document.getElementById("Utr").src = Uside[2]+".png";
document.getElementById("Uml").src = Uside[3]+".png";
document.getElementById("Umm").src = Uside[4]+".png";
document.getElementById("Umr").src = Uside[5]+".png";
document.getElementById("Ubl").src = Uside[6]+".png";
document.getElementById("Ubm").src = Uside[7]+".png";
document.getElementById("Ubr").src = Uside[8]+".png";

document.getElementById("Dtl").src = Dside[0]+".png";
document.getElementById("Dtm").src = Dside[1]+".png";
document.getElementById("Dtr").src = Dside[2]+".png";
document.getElementById("Dml").src = Dside[3]+".png";
document.getElementById("Dmm").src = Dside[4]+".png";
document.getElementById("Dmr").src = Dside[5]+".png";
document.getElementById("Dbl").src = Dside[6]+".png";
document.getElementById("Dbm").src = Dside[7]+".png";
document.getElementById("Dbr").src = Dside[8]+".png";
}

function R(){
    temporary_block_1 = Fside[2];
    Fside[2] = Dside[2];
    Dside[2] = Bside[8];
    Bside[8] = Uside[2];
    Uside[2] = temporary_block_1;

    temporary_block_1 = Uside[8];
    Uside[8] = Fside[8];
    Fside[8] = Dside[8];
    Dside[8] = Bside[2];
    Bside[2] = temporary_block_1;
    
    temporary_block_1 = Fside[5];
    Fside[5] = Dside[5];
    Dside[5] = Bside[5];
    Bside[5] = Uside[5];
    Uside[5] = temporary_block_1;

    temporary_block_1 = Rside[0];
    Rside[0] = Rside[6];
    Rside[6] = Rside[8];
    Rside[8] = Rside[2];
    Rside[2] = temporary_block_1;

    temporary_block_1= Rside[1];  
    Rside[1] = Rside[3];
    Rside[3] = Rside[7];
    Rside[7] = Rside[5];
    Rside[5] = temporary_block_1;
    temporary_block_1 = null;
printAll();
}

function Rp(){
    R();
    R();
    R();
}

function U(){
    temporary_block_1 = Fside[2];
    Fside[2] = Rside[2];
    Rside[2] = Bside[0];
    Bside[0] = Lside[2];
    Lside[2] = temporary_block_1;
    temporary_block_1 = null;

    temporary_block_1 = Fside[0];
    Fside[0] = Rside[0];
    Rside[0] = Bside[2];
    Bside[2] = Lside[0];
    Lside[0] = temporary_block_1;
    temporary_block_1 = null;

    temporary_block_1 = Uside[8];
    Uside[8] = Uside[2];
    Uside[2] = Uside[0];
    Uside[0] = Uside[6];
    Uside[6] = temporary_block_1;
    temporary_block_1 = null;
    
    temporary_block_1 = Fside[1];
    Fside[1] = Rside[1];
    Rside[1] = Bside[1];
    Bside[1] = Lside[1];
    Lside[1] = temporary_block_1;
    temporary_block_1 = null;

    temporary_block_1 = Uside[1];
    Uside[1] = Uside[3];
    Uside[3] = Uside[7];
    Uside[7] = Uside[5];
    Uside[5] = temporary_block_1;
    printAll();
    temporary_block_1 = null;
}

function Up(){
    U();
    U();
    U();
}

function L(){
    temporary_block_1 = Fside[0];
    Fside[0] = Uside[0];
    Uside[0] = Bside[6];
    Bside[6] = Dside[0];
    Dside[0] = temporary_block_1;

    temporary_block_1 = Uside[6];
    Uside[6] = Bside[0];
    Bside[0] = Dside[6];
    Dside[6] = Fside[6];
    Fside[6] = temporary_block_1;
    
    temporary_block_1 = Lside[2];
    Lside[2] = Lside[0];
    Lside[0] = Lside[6];
    Lside[6] = Lside[8];
    Lside[8] = temporary_block_1;

    temporary_block_1 = Lside[1];
    Lside[1] = Lside[3];
    Lside[3] = Lside[7];
    Lside[7] = Lside[5];
    Lside[5] = temporary_block_1;

    temporary_block_1 = Fside[3];
    Fside[3] = Uside[3];
    Uside[3] = Bside[3];
    Bside[3] = Dside[3];
    Dside[3] = temporary_block_1;

    temporary_block_1 = null;
    printAll();
}

function Lp(){
    L();
    L();
    L();
}

function D(){
    temporary_block_1 = Fside[6];
    Fside[6] = Lside[6];
    Lside[6] = Bside[8];
    Bside[8] = Rside[6];
    Rside[6] = temporary_block_1;

    temporary_block_1 = Lside[8];
    Lside[8] = Bside[6];
    Bside[6] = Rside[8];
    Rside[8] = Fside[8];
    Fside[8] = temporary_block_1;

    temporary_block_1 = Dside[0];
    Dside[0] = Dside[6];
    Dside[6] = Dside[8];
    Dside[8] = Dside[2];
    Dside[2] = temporary_block_1;

    temporary_block_1 = Fside[7];
    Fside[7] = Lside[7];
    Lside[7] = Bside[7];
    Bside[7] = Rside[7];
    Rside[7] = temporary_block_1;

    temporary_block_1 = Dside[1];
    Dside[1] = Dside[3];
    Dside[3] = Dside[7];
    Dside[7] = Dside[5];
    Dside[5] = temporary_block_1;

    temporary_block_1 = null;
    printAll();
}

function Dp(){
    D();
    D();
    D();
}

function B(){
    temporary_block_1 = Rside[8];
    Rside[8] = Uside[2];
    Uside[2] = Lside[0];
    Lside[0] = Dside[6];
    Dside[6] = temporary_block_1;

    temporary_block_1 = Uside[0];
    Uside[0] = Lside[6];
    Lside[6] = Dside[8];
    Dside[8] = Rside[2];
    Rside[2] = temporary_block_1;

    temporary_block_1 = Uside[1];
    Uside[1] = Lside[3];
    Lside[3] = Dside[7];
    Dside[7] = Rside[5];
    Rside[5] = temporary_block_1;

    temporary_block_1 = Bside[2];
    Bside[2] = Bside[0];
    Bside[0] = Bside[6];
    Bside[6] = Bside[8];
    Bside[8] = temporary_block_1;

    temporary_block_1 = Bside[5];
    Bside[5] = Bside[1];
    Bside[1] = Bside[3];
    Bside[3] = Bside[7];
    Bside[7] = temporary_block_1;
    printAll();
    temporary_block_1 = null;
}

function Bp(){
    B();
    B();
    B();
}

function F(){
    temporary_block_1 = Rside[6];
    Rside[6] = Uside[8];
    Uside[8] = Lside[2];
    Lside[2] = Dside[0];
    Dside[0] = temporary_block_1;

    temporary_block_1 = Rside[0];
    Rside[0] = Uside[6];
    Uside[6] = Lside[8];
    Lside[8] = Dside[2];
    Dside[2] = temporary_block_1;

    temporary_block_1 = Fside[0];
    Fside[0] = Fside[6];
    Fside[6] = Fside[8];
    Fside[8] = Fside[2];
    Fside[2] = temporary_block_1;

    temporary_block_1 = Uside[7];
    Uside[7] = Lside[5];
    Lside[5] = Dside[1];
    Dside[1] = Rside[3];
    Rside[3] = temporary_block_1;

    temporary_block_1 = Fside[1];
    Fside[1] = Fside[3];
    Fside[3] = Fside[7];
    Fside[7] = Fside[5];
    Fside[5] = temporary_block_1;
    temporary_block_1 = null;
    printAll();
}

function Fp(){
    F();
    F();
    F();
}

function M(){
    temporary_block_1 = Fside[1];
    Fside[1] = Uside[1];
    Uside[1] = Bside[7];
    Bside[7] = Dside[1];
    Dside[1] = temporary_block_1;

    temporary_block_1 = Fside[7];
    Fside[7] = Uside[7];
    Uside[7] = Bside[1];
    Bside[1] = Dside[7];
    Dside[7] = temporary_block_1;

    temporary_block_1 = Fside[4];
    Fside[4] = Uside[4];
    Uside[4] = Bside[4];
    Bside[4] = Dside[4];
    Dside[4] = temporary_block_1;
    temporary_block_1 = null;
    printAll();
}

function Mp(){
    M();
    M();
    M();
}

function f(){
    F();
    
    temporary_block_1 = Uside[4];
    Uside[4] = Lside[4];
    Lside[4] = Dside[4];
    Dside[4] = Rside[4];
    Rside[4] = temporary_block_1;

    temporary_block_1 = Uside[3];
    Uside[3] = Lside[7];
    Lside[7] = Dside[5];
    Dside[5] = Rside[1];
    Rside[1] = temporary_block_1;

    temporary_block_1 = Uside[5];
    Uside[5] = Lside[1];
    Lside[1] = Dside[3];
    Dside[3] = Rside[7];
    Rside[7] = temporary_block_1;

    temporary_block_1 = null;
    printAll();
}

function S(){
    temporary_block_1 = Rside[5];
    Rside[5] = Fside[5];
    Fside[5] = Lside[5];
    Lside[5] = Bside[3];
    Bside[3] = temporary_block_1;

    temporary_block_1 = Rside[4];
    Rside[4] = Fside[4];
    Fside[4] = Lside[4];
    Lside[4] = Bside[4];
    Bside[4] = temporary_block_1;

    temporary_block_1 = Rside[3];
    Rside[3] = Fside[3];
    Fside[3] = Lside[3];
    Lside[3] = Bside[5];
    Bside[5] = temporary_block_1;
    printAll();
}

function Sp(){
    S();
    S();
    S();
}

window.addEventListener("keydown",turn);

function turn(e){
    var key = e.keyCode;
    if(key == '82'){
        if(e.shiftKey){
            Rp();
            console.log("Turn => "+key);
        }else{
        R();
        console.log("Turn => "+key);
        }
    }else if(key == '83'){
        if(e.shiftKey){
            Sp();
            console.log("Turn => "+key);
        }else{
        S();
        console.log("Turn => "+key);
        }
    }else if(key == '76'){
        if(e.shiftKey){
            Lp();
            console.log("Turn => "+key);
        }else{
        L();
        console.log("Turn => "+key);
        }
    }else if(key == '85'){
        if(e.shiftKey){
            Up();
            console.log("Turn => "+key);
        }else{
        U();
        console.log("Turn => "+key);
        }
    }else if(key == '68'){
        if(e.shiftKey){
            Dp();
            console.log("Turn => "+key);
        }else{
        D();
        console.log("Turn => "+key);
        }
    }else if(key == '66'){
        if(e.shiftKey){
            Bp();
            console.log("Turn => "+key);
        }else{
        B();
        console.log("Turn => "+key);
        }
    }else if(key == '70'){
        if(e.shiftKey){
            Fp();
            console.log("Turn => "+key);
        }else if(e.ctrlKey){
        f();
        console.log("Turn => "+key);
        }else{
            F();
            console.log("Turn => "+key);
        }
    }else if(key == '77'){
        if(e.shiftKey){
            Mp();
            console.log("Turn => "+key);
        }else{
        M();
        console.log("Turn => "+key);
        }
    }else if(key == '37'){
        sideChange();
        console.log("left switch");
    }else if(key == '39'){
        sideChange();
        sideChange();
        sideChange();
        console.log("right switch");
    }}

function sideChange(){
    temporary_block_1 = Rside[2];
    Rside[2] = Fside[2];
    Fside[2] = Lside[2];
    Lside[2] = Bside[0];
    Bside[0] = temporary_block_1;

    temporary_block_1 = Rside[0];
    Rside[0] = Fside[0];
    Fside[0] = Lside[0];
    Lside[0] = Bside[2];
    Bside[2] = temporary_block_1;

    temporary_block_1 = Rside[1];
    Rside[1] = Fside[1];
    Fside[1] = Lside[1];
    Lside[1] = Bside[1];
    Bside[1] = temporary_block_1;

    temporary_block_1 = Rside[5];
    Rside[5] = Fside[5];
    Fside[5] = Lside[5];
    Lside[5] = Bside[3];
    Bside[3] = temporary_block_1;

    temporary_block_1 = Rside[3];
    Rside[3] = Fside[3];
    Fside[3] = Lside[3];
    Lside[3] = Bside[5];
    Bside[5] = temporary_block_1;

    /*centres*/

    temporary_block_1 = Rside[4];
    Rside[4] = Fside[4];
    Fside[4] = Lside[4];
    Lside[4] = Bside[4];
    Bside[4] = temporary_block_1;

    /*centres*/

    temporary_block_1 = Rside[6];
    Rside[6] = Fside[6];
    Fside[6] = Lside[6];
    Lside[6] = Bside[8];
    Bside[8] = temporary_block_1;

    temporary_block_1 = Rside[8];
    Rside[8] = Fside[8];
    Fside[8] = Lside[8];
    Lside[8] = Bside[6];
    Bside[6] = temporary_block_1;

    temporary_block_1 = Rside[7];
    Rside[7] = Fside[7];
    Fside[7] = Lside[7];
    Lside[7] = Bside[7];
    Bside[7] = temporary_block_1;

    //top//

    temporary_block_1 = Uside[1];
    Uside[1] = Uside[3];
    Uside[3] = Uside[7];
    Uside[7] = Uside[5];
    Uside[5] = temporary_block_1;

    temporary_block_1 = Uside[0];
    Uside[0] = Uside[6];
    Uside[6] = Uside[8];
    Uside[8] = Uside[2];
    Uside[2] = temporary_block_1;
    //top//

    //bottom//
    temporary_block_1 = Dside[1];
    Dside[1] = Dside[5];
    Dside[5] = Dside[7];
    Dside[7] = Dside[3];
    Dside[3] = temporary_block_1;

    temporary_block_1 = Dside[0];
    Dside[0] = Dside[2];
    Dside[2] = Dside[8];
    Dside[8] = Dside[6];
    Dside[6] = temporary_block_1;
    //bottom//
    printAll();
}

function sideChanget(){
    sideChange();
    sideChange();
    sideChange();
}
