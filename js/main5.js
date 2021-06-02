function categoryChange(e) {
    var pSust_00000 = ["한국사", "과목명2", "과목명3", "과목명4"];
    var pSust_LNK = ["과목명2", "과목명3", "과목명1", "과목명4"];
    var pSust_FSN = ["과목명5", "과목명2", "과목명3", "과목명4", "과목명5"];
    var pSust_3A100 = ["과목명7", "과목명2", "과목명3", "과목명4", "과목명5"];
    var pSust_3A300 = ["과목명9", "과목명7", "과목명2", "과목명4", "과목명5"];
    var pSust_3A500 = ["과목명3", "과목명6", "과목명3", "과목명4", "과목명5"];
    var pSust_3B100 = ["과목명5", "과목명5", "과목명3", "과목명4", "과목명5"];
    var pSust_3B300 = ["과목명7", "과목명5", "과목명3", "과목명4", "과목명5"];
    

    var target = document.getElementById("pSust");
   
    if(e.value == "00000") var d = pSust_00000;
    else if(e.value == "LNK") var d = pSust_LNK;
    else if(e.value == "FSN") var d = pSust_FSN;
    else if(e.value == "3A1300") var d = pSust_3A100;
    else if(e.value == "3A300") var d = pSust_3A300;
    else if(e.value == "3A500") var d = pSust_3A500;
    else if(e.value == "3B100") var d = pSust_3B100;
    else if(e.value == "3B300") var d = pSust_3B300;
   

    target.options.length = 0;
   
    for (x in d) {
      var opt = document.createElement("option");
      opt.value = d[x];
      opt.innerHTML = d[x];
      target.appendChild(opt);
    } 
  }
  
  
  function check() {
    var email = document.getElementById("email").value;
    if (email != "") {
        var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if (exptext.test(email) == false) {
            //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
            alert("입력한 메일형식이 올바르지 않습니다.");
            document.formtag.email.focus();
            return false;
        }
    }
    return true;
}
function changeBtnName()  {
  const btnElement 
    = document.getElementById('btn');
  
  btnElement.value = "선택완료";
}
function changeBtnName1()  {
  const btnElement 
    = document.getElementById('btn1');
  
  btnElement.value = "신청완료";
}