function checkForm(){
    console.log('submit fired');
    var id = document.getElementById('studentid').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
     
     if(id=="") {		
        alert("Student ID cannot be blank");
        return false;
    }
    
    if(id.length<7) {		
        alert("Student ID must consist of 7 character");
        return false;
    }
  
    if(name=="") {		
        alert("Name cannot be blank");
        return false;
    }

    if(email=="") {		
        alert("Email cannot be blank");
        return false;
    }

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Invalid e-mail address");
        return false;
    }
    
    if(pass1== "") {
			alert("Password cannot be blank");
			return false;
    }

    if(pass1 != pass2) {
        alert("Confirm password do not match with password!");
        return false;
    }

    if(pass1.length < 6) {
        alert("Password must contain at least six characters");
        return false;
    }
    if(pass1== id) {
			alert("Password must be different from Username!");
			return false;
    }
		
    var re = /[0-9]/;
    if(!re.test(pass1)) {
        alert("Password must contain at least one number (0-9)");
        return false;
    }

    var re = /[a-z]/;
    if(!re.test(pass1)) {
        alert("Password must contain at least one lowercase letter (a-z)");
        return false;
    }

    var re = /[A-Z]/;
    if(!re.test(pass1)) {
        alert("Password must contain at least one uppercase letter (A-Z)");
        return false;
    }

    else{
        alert("Successfull registered");
        location.assign('index.html');
        return true;
    }
        
    
}



