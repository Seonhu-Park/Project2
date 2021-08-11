function init(){
    fetch('data/index.json')
    .then( res => res.json() )
    .then( data => callback(data) );

    const elNav = document.querySelector('header'),
          elNavLogo = document.querySelector('header figure'),
          elNavHd = document.querySelector('.hdmenu'),
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
          elFncCon = document.querySelectorAll('.function .conall');


        let tagList = '';
        let tagList2 = '';
        let tagList3 = '';
        let tagList4 = '';
        let tagList5 = '';
        let tagList6 = '';
        let newList = '';
        let rofanList = '';
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
    }; // 헤더부분 스크롤 이벤트 
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
    
    
    //TODO 함수실행 
    window.addEventListener('scroll',function(){
        scrollNav();
        scrollevent(elBp,elBpTit,elBpDet);
        scrollevent(elHm,elHmTit,elHmDet);
        scrollevent(elNb,elNbTit,elNbDet);
        scrollevent(elBs,elBsTit,elBsDet);
        scrollevent(elRf,elRfTit,elRfDet);
        scrollevent(elTm,elTmTit,elTmDet);
        scrollevent(elBk,elBkTit,elBkDet);
        scrollevent(elFr,elFrTit,elFrDet);
        for(let i=0; i<elFncTab.length; i++){
            scrollevent(elFnc,elFncTit[i],elFncDet[i]);
        };
        scrollevent(elStr,elStrTit,elStrDet);
    }); // 스크롤 이벤트

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

    $('.single-item').slick({
        dots:true
    });


};
window.onload = init;