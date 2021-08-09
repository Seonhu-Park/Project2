function init(){
    const elNav = document.querySelector('header');
    const elNavLogo = document.querySelector('header figure');
    const elNavHd = document.querySelector('.hdmenu');
    const elVdo = document.querySelector('.video');
    const elCm = document.querySelector('.cm');

    function scrollNav(){
        if(scrollY > elVdo.offsetTop){
            elNav.style='background-color: rgba(255,255,255,0.9);';
            elCm.style = 'display:flex;';
            elNavHd.classList.add('scrollNav');
            elNavLogo.innerHTML = '<img src="img/logo_head/밀리의서재 로고.png">';
        }
        else if((scrollY < elVdo.offsetTop)){
            elNav.style='background-color: rgba(167,163,154,0.9);';
            elCm.style = 'display:none;';
            elNavHd.classList.remove('scrollNav');
            elNavLogo.innerHTML = '<img src="img/logo_head/밀리의서재 로고1.png">';
        };
    }
    
    window.addEventListener('scroll',function(){
        scrollNav();
    })

}
window.onload = init;