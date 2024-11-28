/**
 * 
 */

function joinCheck() {  // 유효성 체크 함수 joinCheck 선언
	
	var joinForm = document.joinForm   // var: 변수선언
	
	/* 아이디가 공란으로 입력되었는지 유효성 검사 */ 	
	if(joinForm.memberId.value.length == 0) {
		alert("아이디는 필수 입력 사항입니다.\n다시 확인후 가입해 주세요.");
		joinForm.memberId.focus(); //해당 폼 위치로 커서를 이동 시킴 
		return false;		
 } if(joinForm.memberPw.value.length == 0) {
	  alert("비번은 필수 입력 사항입니다.\n다시 확인후 가입해 주세요.");
	  joinForm.memberPw.focus(); //해당 폼 위치로 커서를 이동 시킴 
	  return false; }					
   if(joinForm.memberName.value.length == 0) {
	  alert("이름은 필수 입력 사항입니다.\n다시 확인후 가입해 주세요.");
	  joinForm.memberName.focus(); //해당 폼 위치로 커서를 이동 시킴 
	  return false; }		
   if(joinForm.memberPhone.value.length == 0) {
	  alert("전화번호는 필수 입력 사항입니다.\n다시 확인후 가입해 주세요.");
	  joinForm.memberPhone.focus(); //해당 폼 위치로 커서를 이동 시킴 
	  return false; 
  }	
 	return true;
}