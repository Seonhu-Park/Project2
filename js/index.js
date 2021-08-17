function init(){
    fetch('data/index.json')
    .then( res => res.json() )
    .then( data => callback(data) );

    const elNav = document.querySelector('header'),
          elNavLogo = document.querySelector('header figure'),
          elNavHd = document.querySelector('.hdmenu'),
          elBanner = document.querySelector('.bnimg-1'),
          elVdo = document.querySelector('.video'),
          elCm = document.querySelector('.cm'),
          elBp = document.querySelector('.bestpoint'),
          elBpTit = document.querySelector('.bestpoint .title'),
          elBpDet = document.querySelector('.bestpoint .detail'),
          elHm = document.querySelector('.howmany'),
          elHmTit = document.querySelector('.howmany .title'),
          elHmDet = document.querySelector('.howmany .detail'),
          elNb = document.querySelector('.newbook'),
          elNbUl = document.querySelector('.newbook ul'),
          elNbTit = document.querySelector('.newbook .title'),
          elNbDet = document.querySelector('.newbook .detail'),
          elBs = document.querySelector('.bestseller'),
          elBsTit = document.querySelector('.bestseller .title'),
          elBsDet = document.querySelector('.bestseller .detail'),
          elRf = document.querySelector('.rofan'),
          elRfUl = document.querySelector('.rofan ul'),
          elRfTit = document.querySelector('.rofan .title'),
          elRfDet = document.querySelector('.rofan .detail'),
          elTm = document.querySelector('.time'),
          elTmTit = document.querySelector('.time .title'),
          elTmDet = document.querySelector('.time .detail'),
          elBk = document.querySelector('.bookcase'),
          elBkTit = document.querySelector('.bookcase .title'),
          elBkDet = document.querySelector('.bookcase .detail'),
          elFr = document.querySelector('.free'),
          elFrTit = document.querySelector('.free .title'),
          elFrDet = document.querySelector('.free .detail'),
          elFnc = document.querySelector('.function'),
          elFncTit = document.querySelectorAll('.function .conall .title'),
          elFncDet = document.querySelectorAll('.function .conall .detail'),
          elStr = document.querySelector('.story'),
          elStrTit = document.querySelector('.story .title'),
          elStrDet = document.querySelector('.story .detail'),
          elBsTab = document.querySelectorAll('.bestseller .besttab p'),
          elBsCon = document.querySelectorAll('.bestseller .bstlist'),
          elFncTab = document.querySelectorAll('.function nav div'),
          elFncCon = document.querySelectorAll('.function .conall'),
          elVdoThm = document.querySelectorAll('.thum'),
          elNavi = document.querySelectorAll('.navi ul li');
    let tagList = '', tagList2 = '', tagList3 = '', tagList4 = '', tagList5 = '', tagList6 = '', newList = '', rofanList = '';

    

    //TODO fetch jason 
    function callback(data){
        data.best1.forEach(function(v,k){
            tagList += `<li>
            <img src="${v.bookimg}">
            <article class="bookdtl">
            <h5>${v.title}</h5>
            <span>${v.time}</span>
            </article>
            </li>
            `;
        })
        data.best2.forEach(function(v,k){
            tagList2 += `<li>
            <img src="${v.bookimg}">
            <article class="bookdtl">
            <h5>${v.title}</h5>
            <span>${v.time}</span>
            </article>
            </li>
            `;
        })
        data.best3.forEach(function(v,k){
            tagList3 += `<li>
            <img src="${v.bookimg}">
            <article class="bookdtl">
            <h5>${v.title}</h5>
            <span>${v.time}</span>
            </article>
            </li>
            `;
        })
        data.best4.forEach(function(v,k){
            tagList4 += `<li>
            <img src="${v.bookimg}">
            <article class="bookdtl">
            <h5>${v.title}</h5>
            <span>${v.time}</span>
            </article>
            </li>
            `;
        })
        data.best5.forEach(function(v,k){
            tagList5 += `<li>
            <img src="${v.bookimg}">
            <article class="bookdtl">
            <h5>${v.title}</h5>
            <span>${v.time}</span>
            </article>
            </li>
            `;
        })
        data.best6.forEach(function(v,k){
            tagList6 += `<li>
            <img src="${v.bookimg}">
            <article class="bookdtl">
            <h5>${v.title}</h5>
            <span>${v.time}</span>
            </article>
            </li>
            `;
        })
        data.newbook.forEach(function(v,k){
            newList += `<li>
            <img src="${v.bookimg}">
            <article class="bookdtl">
            <h5>${v.title}</h5>
            <span>${v.time}</span>
            </article>
            </li>
            `;
        })
        data.rofan.forEach(function(v,k){
            rofanList += `<li>
            <img src="${v.bookimg}">
            <article class="bookdtl">
            <h5>${v.title}</h5>
            <span>${v.time}</span>
            </article>
            </li>
            `;
        })
        elBsCon[0].innerHTML = tagList;
        elBsCon[1].innerHTML = tagList2;
        elBsCon[2].innerHTML = tagList3;
        elBsCon[3].innerHTML = tagList4;
        elBsCon[4].innerHTML = tagList5;
        elBsCon[5].innerHTML = tagList6;
        elNbUl.innerHTML = newList;
        elRfUl.innerHTML = rofanList;

        bsTabFnc();
        $('.multiple-items').slick({
            infinite: false,
            slidesToShow: 7,
            slidesToScroll: 2,
            responsive:[
                {
                    breakpoint: 1200,
                    settings : {
                        slidesToShow: 3.8
                    }
                },
                {
                    breakpoint: 767,
                    settings : {
                        slidesToShow: 3.2
                    }
                }
            ]
        });
    }


    //TODO 함수선언 
    function scrollNav(){
        if(window.scrollY >= elVdo.offsetTop){
            elNav.style='background-color: rgba(255,255,255,0.9);';
            elCm.style = 'display:flex;';
            elNavHd.classList.add('scrollNav');
            elNavLogo.innerHTML = '<img src="img/logo_head/밀리의서재 로고.png">';
        }
        else if((window.scrollY <= elVdo.offsetTop)){
            elNav.style='background-color: rgba(167,163,154,0.9);';
            elCm.style = 'display:none;';
            elNavHd.classList.remove('scrollNav');
            elNavLogo.innerHTML = '<img src="img/logo_head/밀리의서재 로고1.png">';
        };
    }; //헤더부분 스크롤 이벤트 
    function scrollNavi(){
        if(window.scrollY >= elBp.offsetTop-200){
            navi.style='opacity: 1;';
        }
        else if((window.scrollY <= elBp.offsetTop)){
            navi.style='opacity: 0;';
        };
    }; //네비게이터 스크롤 이벤트
    function naviscroll(num,EL){
        if(pageYOffset > EL.offsetTop - 60){
            $('.navi ul li').removeClass('active');
            $('.navi ul li').eq(num).addClass('active');
        }
    } //네비게이터 스크롤 이동 이벤트
    function NaviGo(x,elcon){
        elNavi[x].addEventListener('click',function(){
            window.scrollTo({
                left:0,
                top: elcon.offsetTop - elNav.offsetHeight,
                behavior:'smooth'
            });
        });
    } //네비게이터 이동 이벤트
    function scrollevent(table,title,detail){
        if(table.offsetTop - window.innerHeight + 250 <= window.pageYOffset){
            title.classList.add('scrFnc');
            detail.classList.add('scrFnc');
        }
        else if(table.offsetTop - window.innerHeight - table.offsetHeight <= window.pageYOffset){
            title.classList.remove('scrFnc');
            detail.classList.remove('scrFnc');
        }
    }; //컨텐츠 스크롤 페이드인 이벤트 
    function bsTabFnc(){
        let idx = 0;
        for(let i=0; i<elBsTab.length; i++){
            elBsTab[i].addEventListener('click',function(){
                elBsCon[idx].classList.remove('active');
                elBsTab[idx].classList.remove('active');
                elBsCon[i].classList.add('active');
                elBsTab[i].classList.add('active');
                idx = i;
            })
        };
    } //베스트셀러 탭 
    function fncTabFnc(){
        let idx2 = 0;
        for(let i=0; i<elFncTab.length; i++){
            elFncTab[i].addEventListener('click',function(){
                elFncTab[idx2].classList.remove('active');
                elFncCon[idx2].classList.remove('active');
                elFncTab[i].classList.add('active');
                elFncCon[i].classList.add('active');
                idx2 = i;
            })
        };
    } //앱 기능 탭
    function faqSlide(){
        $('.faq li').on('click',function(){
            if( $(this).hasClass('active') ){
                $(this).removeClass('active').find('.answer').stop().slideUp();
                $(this).find('.detail:nth-of-type(2)').html('⌵');
                return;
            }else{
                $(this).addClass('active').find('.answer').stop().slideDown();
                $(this).find('.detail:nth-of-type(2)').html('💡');
            }
        })
    } //faq 슬라이드업다운 기능
    function countNo(){
            var cnt0 = 0;
            counterFn();
            function counterFn() {
                id0 = setInterval(count0Fn, 10);
                function count0Fn() {
                    cnt0+=1250;
                    if (cnt0 > 100000) {
                        id0;
                    } else {
                        $(".countNo").html(cnt0.toLocaleString());
                    }
                }
            }
    } //숫자카운트 기능
    function Howmany(){
        if(elHm.offsetTop - window.innerHeight + 250 <= window.pageYOffset){
            elHmTit.classList.add('scrFnc');
            elHmDet.classList.add('scrFnc');
        }
        else if(elHm.offsetTop - window.innerHeight - elHm.offsetHeight <= window.pageYOffset){
            elHmTit.classList.remove('scrFnc');
            elHmDet.classList.remove('scrFnc');
            countNo();
        }
    } //숫자카운트 & 스크롤 이벤트
    function HowmanyBar(){
        if(elHm.offsetTop - window.innerHeight + 250 <= window.pageYOffset){
            elBar.classList.add('scrFnc');
        }
        else if(elHm.offsetTop - window.innerHeight - elHm.offsetHeight <= window.pageYOffset){
            elBar.classList.remove('scrFnc');
        }
    } //표 막대부분 스크롤 이벤트
    function youtube(){
        for(i=0; i<elVdoThm.length; i++){
            elVdoThm[i].addEventListener('click',function(){
                ytvdocon.innerHTML=`<iframe width="400" height="400" src="https://www.youtube.com/embed/c-XG8k_w1LM?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="ytvdo"></iframe>`;
                ytvdo.style='opacity:1';
            })
        }
    } //유튜브 재생 제어 이벤트
    function bookcase(){
        if(elBk.offsetTop - window.innerHeight + 500 <= window.pageYOffset){
            bkli1.classList.add('scrFnc');
            bkli2.classList.add('scrFnc');
            bkli3.classList.add('scrFnc');
        }
        else if(elBk.offsetTop - window.innerHeight - elBk.offsetHeight <= window.pageYOffset){
            bkli1.classList.remove('scrFnc');
            bkli2.classList.remove('scrFnc');
            bkli3.classList.remove('scrFnc');
        }
    } //책장이미지 스크롤 페이드인
    function freeLi1(){
        if(elFr.offsetTop - window.innerHeight + 250 <= window.pageYOffset){
            freeli1.classList.add('scrFnc');
        }else if(elFr.offsetTop - window.innerHeight - elFr.offsetHeight <= window.pageYOffset){
            freeli1.classList.remove('scrFnc');
        }
    } //무료! li 스크롤 페이드인
    function freeLi2(){
        if(elFr.offsetTop - window.innerHeight + 500 <= window.pageYOffset){
            freeli2.classList.add('scrFnc');
        }else if(elFr.offsetTop - window.innerHeight - elFr.offsetHeight <= window.pageYOffset){
            freeli2.classList.remove('scrFnc');
        }
    } //무료! li 스크롤 페이드인
    function timeLi(){
        if(elTm.offsetTop - window.innerHeight + 500 <= window.pageYOffset){
            rdtm1.classList.add('scrFnc');
            rdtm2.classList.add('scrFnc');
            rdtm3.classList.add('scrFnc');
            rdtm4.classList.add('scrFnc');
        }
        else if(elTm.offsetTop - window.innerHeight - elTm.offsetHeight <= window.pageYOffset){
            rdtm1.classList.remove('scrFnc');
            rdtm2.classList.remove('scrFnc');
            rdtm3.classList.remove('scrFnc');
            rdtm4.classList.remove('scrFnc');
        }
    }
    xbtn.onclick = function(){setCookie();}
    getCookie();

    function setCookie(){
        if(chked.checked){
            let date = new Date();
            date.setDate( date.getDate() + 2 );
            document.cookie = 'popup=test;expires='+date.toUTCString();
        }
        popup.style='display:none;';
    }
    function getCookie(){
        if(document.cookie.match('test')){
            popup.style='display:none;';
        }
    }


    //TODO 함수실행 
    window.addEventListener('scroll',function(){
        scrollNav();
        scrollNavi();
        Howmany();
        HowmanyBar();
        bookcase();
        freeLi1();
        freeLi2();
        timeLi();
        scrollevent(elBp,elBpTit,elBpDet);
        scrollevent(elNb,elNbTit,elNbDet);
        scrollevent(elBs,elBsTit,elBsDet);
        scrollevent(elRf,elRfTit,elRfDet);
        scrollevent(elTm,elTmTit,elTmDet);
        scrollevent(elBk,elBkTit,elBkDet);
        scrollevent(elFr,elFrTit,elFrDet);
        scrollevent(elStr,elStrTit,elStrDet);
        for(let i=0; i<elFncTab.length; i++){
            scrollevent(elFnc,elFncTit[i],elFncDet[i]);
        };
        naviscroll(0,elBp);
        naviscroll(1,elHm);
        naviscroll(2,elNb);
        naviscroll(3,elBs);
        naviscroll(4,elRf);
        naviscroll(5,elTm);
        naviscroll(6,elBk);
        naviscroll(7,elFr);
        naviscroll(8,elFnc);
        naviscroll(9,elStr);
    });
    window.addEventListener('load',function(){
        elBanner.classList.add('active');
    });
    fncTabFnc();
    faqSlide();
    youtube();
    NaviGo(0,elBp);
    NaviGo(1,elHm);
    NaviGo(2,elNb);
    NaviGo(3,elBs);
    NaviGo(4,elRf);
    NaviGo(5,elTm);
    NaviGo(6,elBk);
    NaviGo(7,elFr);
    NaviGo(8,elFnc);
    NaviGo(9,elStr);

    let num = 0;
    $('.navi ul li').on('click',function(){
        num = $(this).index();
        $('.navi ul li').removeClass('active');
        $('.navi ul li').eq(num).addClass('active');
    })


    //MEMO 슬릭슬라이드 
    $('.single-item').slick({
        dots:true
    });



};
window.onload = init;

$(window).load(function() {
    $('#load').hide();
});