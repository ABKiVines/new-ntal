function validateForm(){

	var psw = document.getElementById("psw").value;	var confirmPsw = document.getElementById("confirmPsw").value;

	if(psw == confirmPsw){

		window.open('confirmed.html');

		return true;

	}

	

	else{

	document.getElementById("p1").innerHTML = "*Password not matched"

	return false;

	}

}
