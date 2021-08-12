function init(){

    let idNo = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;

    submitbtn.onclick = function(e){
        e.preventDefault();
        phone(idNo,telno,'올바른 번호를 입력해주세요.');

        function phone(no,inputno,msg){
            if(!no.test(inputno.value)){
                alert(msg);
                inputno.value='';
                inputno.focus();
                return true;
            }else{
                alert('이미 가입된 번호입니다! 로그인 해주세요.');
                location.href="/Project2/login.html"
            }
            return false;
        }
    }

}
window.onload = init;

$(window).load(function() {
    $('#load').hide();
});