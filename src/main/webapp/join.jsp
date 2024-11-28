<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="js/joinCheck.js"></script>
<title>회원 가입</title>
</head>
<body>
	<h2>회원 가입</h2>
	<hr>
	<form action="joinOk.jsp" name="joinForm" onsubmit="return joinCheck()">
		아이디 : <input type="text" name="memeberId"><br><br>
		비밀번호 : <input type="password" name="memeberPw"><br><br>
		이름 : <input type="text" name="memeberName"><br><br>
		전화번호 : <input type="text" name="memeberPhone"> ※ 숫자만 입력하세요. <br><br>
		<input type="submit" value="회원가입">	
	</form>	
</body>
</html>