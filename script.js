
function confirmPassword (){
    var password=document.getElementById("password").value ;
    var checkpassword =document.getElementById("check password").value ;
    var message = document.getElementById("p");
    if ( password.length !=0){
        if( password!=checkpassword ){
            message.innerHTML = "Password don't match !!!"
        }
    }
}
