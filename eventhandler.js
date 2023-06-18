document.addEventListener("mousedown", swipeStart, { passive: false });
document.addEventListener("touchstart", swipeStart, { passive: false });

function swipeStart(e){
    target_element = e.target.id;

    if(target_element == ''){

    }else{
    e.preventDefault();


    X_pos_1 = e.clientX || e.touches[0].clientX;
    Y_pos_1 = e.clientY || e.touches[0].clientY;
    console.log("X-cordinates => "+X_pos_1+"  Y-cordinates => "+Y_pos_1);
    }
}

document.addEventListener("mouseup", swipeEnd, {passive:false});
document.addEventListener("touchend", swipeEnd, {passive:false});

function swipeEnd(e){
    e.preventDefault();

    X_pos_2 = e.clientX || e.changedTouches[0].clientX;
    Y_pos_2 = e.clientY || e.changedTouches[0].clientY;
    console.log("X-cordinates => "+X_pos_2+"  Y-cordinates => "+Y_pos_2);

    X_distance = X_pos_1 - X_pos_2;
    Y_distance = Y_pos_1 - Y_pos_2;

    if(X_distance > 100){
         leftSwipe();
    }

    if(X_distance < -100){
        rightSwipe();
    }

    if(Y_distance > 100){
        upSwipe();
    }

    if(Y_distance < -100){
        downSwipe();
}
}

function leftSwipe(e){
    if(target_element == 'Ftl'){
        U();
    }
    if(target_element == 'Ftm'){
        U();
    }
    if(target_element == 'Ftr'){
        U();
    }
    if(target_element == 'Fml'){
        Sp();
    }
    if(target_element == 'Fmm'){
        Sp();
    }
    if(target_element == 'Fmr'){
        Sp();
    }
    if(target_element == 'Fbl'){
        Dp();
    }
    if(target_element == 'Fbm'){
        Dp();
    }
    if(target_element == 'Fbr'){
        Dp();
    }
}
function rightSwipe(e){
    if(target_element == 'Ftl'){
        Up();
    }
    if(target_element == 'Ftm'){
        Up();
    }
    if(target_element == 'Ftr'){
        Up();
    }
    if(target_element == 'Fml'){
        S();
    }
    if(target_element == 'Fmm'){
        S();
    }
    if(target_element == 'Fmr'){
        S();
    }
    if(target_element == 'Fbl'){
        D();
    }
    if(target_element == 'Fbm'){
        D();
    }
    if(target_element == 'Fbr'){
        D();
    }
}

function downSwipe(e){
    if(target_element == 'Ftl'){
        L();
    }
    if(target_element == 'Ftm'){
        M();
    }
    if(target_element == 'Ftr'){
        Rp();
    }
    if(target_element == 'Fml'){
        L();
    }
    if(target_element == 'Fmm'){
        M();
    }
    if(target_element == 'Fmr'){
        Rp();
    }
    if(target_element == 'Fbl'){
        L();
    }
    if(target_element == 'Fbm'){
        M();
    }
    if(target_element == 'Fbr'){
        Rp();
    }
}

function upSwipe(e){
    if(target_element == 'Ftl'){
        Lp();
    }
    if(target_element == 'Ftm'){
        Mp();
    }
    if(target_element == 'Ftr'){
        R();
    }
    if(target_element == 'Fml'){
        Lp();
    }
    if(target_element == 'Fmm'){
        Mp();
    }
    if(target_element == 'Fmr'){
        R();
    }
    if(target_element == 'Fbl'){
        Lp();
    }
    if(target_element == 'Fbm'){
        Mp();
    }
    if(target_element == 'Fbr'){
        R();
    }   
}