function init(){

    let idNo = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    let pwNo = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;

    submitbtn.onclick = function(e){
        e.preventDefault();
        if(phone(idNo,telno,'올바른 번호를 입력해주세요.')) return;
        if(phone(pwNo,password,'올바른 암호를 입력해주세요.')) return;
        else{location.href="/Project2"};

        function phone(no,inputno,msg){
            if(!no.test(inputno.value)){
                alert(msg);
                inputno.value='';
                inputno.focus();
                return true;
            }
            
            return false;
        }
    }
    
}
window.onload = init;

$(window).load(function() {
    $('#load').hide();
});