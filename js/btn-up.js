function irArriba(up){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var btnUp = document.getElementById('btnUp');

        if (scroll > up){
            btnUp.style.left = 40 + "px";
        }else{
            btnUp.style.left = -100 + "px";
        }
    })
}

irArriba(300)