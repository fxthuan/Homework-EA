let count = 0;
let countlocal = 0;


//function getElementById
function getID(id, error){
    var err = $(id).text(error).css('color','red');
    return err;
}

//function check username
function isUsername(name){
    if(name === '' || name.length < 6){
        getID('#iduserspan','Username is invalid,please input again !');
        flag = false;
    }else{ 
        getID('#iduserspan','');
        return true;
    }
}

//function check email
function isEmail(emailtxt){
    var emailregex = /\S+@\S+\.\S+/;
    if(!emailtxt.match(emailregex)){
        getID('#idemailspan','Email is invalid,please input again !');
        flag = false;
    }else{ 
        getID('#idemailspan',''); 
        return true;
    }
}

//function check password
function isPass(password){
//    var passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
//    if(!password.match(passregex)){
    if(password.length < 8){
        getID('#idpassspan','Password is invalid,please input again !');
        flag = false;
    }else{ 
        getID('#idpassspan',''); 
        return true;
    }
}

//function check re-pass
function isRe_pass(repass,bfpassword){
    //var passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    //if(!repass.match(passregex) || repass !== bfpassword){
 
    if(count == 0){
        if(repass !==bfpassword ||repass===''){
            getID('#idre-passspan','Password does not match,please input again !!');
            flag = false;
            return false;
        }else{ 
            getID('#idre-passspan',''); 
            return true;
        }
     }else{    
        getID('#idre-passspan',''); 
        return true;
    }
    
}

 
//------------------------GENPASS-----------------------------------
//function GenPass
function genpass(plength){
    var keylist = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*';
    var tmp = '';
    for(i = 0; i < plength; i++){
        tmp += keylist.charAt(Math.floor(Math.random()*keylist.length));        
    }return tmp;
}

function populateform(enterlength){
    document.form_register.passwordinput.value = genpass(enterlength);
}

//Click gen pass
$('#idGenpass').click(function(){
    count = 1;
    let valueGenpass = $('#txtlengthpass').val();
    if(isNaN(valueGenpass)|| valueGenpass < 8){
        getID('#idspantxtlengthpass','Please re-enter valid than 6 character is number !');
        flag = false; 
    }else{
        populateform(valueGenpass);
        $('label[for="re-passwordinput"]').hide();
        $('#re-passwordinput').hide();
        getID('#idspantxtlengthpass','');
        getID('#idpassspan','');
        
        return count;
    }
});
//------------------------CLOSE GENPASS------------------------------------

//------------Main Program-----------
$(document).ready(function(){
   $('.btnSubmit').click(function(e){
        
       e.preventDefault();
       
        var username = $.trim($('#userinput').val());
        var email    = $.trim($('#emailinput').val());
        var pass     = $.trim($('#passwordinput').val());
        var re_pass  = $.trim($('#re-passwordinput').val());
        
        var flag = true;
        var a1   = isUsername(username);       //check username
        var a2   = isEmail(email);             //check email
        var a3   = isPass(pass);               //check pass
        var a4   = isRe_pass(re_pass,pass);    //check Re-pass

    if(a1 && a2 && a3 && a4){ 
       $(this).prop('disabled',true);
       $('#loadingtext').show();

       setTimeout(function(){
           $(this).prop('disabled',false);
           $('#loadingtext').hide();    
           
//           $('#userinput').val('');
//           $('#userinput').prop('disabled', true);
           alert('Submit Successfully !');
           //window.location.href = 'https://www.google.com.vn/';
     
//           if (typeof(Storage) !== 'undefined') {
//
//               countlocal++;
//               alert(countlocal);
//                // Store
//               localStorage.website = 'User name: '+ username +'\n'+'Email Address: '+email+'\n'+'Password: '+pass+'  Count'+countlocal;
//                // Retrieve
//               $('#idlocal').text(localStorage.website);
//            } else {
//                countlocal = 0;
//                alert('Sorry, your browser does not support Web Storage...');
//            }
            setTimeout(function(){ location.reload(); }, 2000);
//           $('.btnSubmit').submit();
           
       }, 2000);
    }
       
//        setTimeout(function(){ location.reload(); }, 4000);
      // $('.btnSubmit').submit();
   });
    
});




