
var inbtemail = document.getElementById("email")
var inbtpassword = document.getElementById("password")
var inbtLogin = document.getElementById("Login")


function remveDataInbt(){
  inbtname.value = ""
  inbtemail.value = ""
  inbtpassword.value = ""
}

function SignUp(){
  window.location="signUp.html"
}
function vaildtionpass(){
  var text = inbtpassword.value
  var ragex =/^[0-9]{8}$/
  if( ragex.test(text) == true){
        return true
      }else{
        return false
    }
}
function vaildtionemil(){
  var text = inbtemail.value
  var ragex =/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  if( ragex.test(text) == true){
        return true
      }else{
        return false
    }
}
function Login(){

  if (vaildtionemil() == true && vaildtionpass() == true) {
    

    var user = {
      email : inbtemail.value,
      pass : inbtpassword.value
    }

    var users = JSON.parse(localStorage.getItem("list"))
    console.log(users)
    for(var i = 0 ; i<users.length ; i++){
      if(users[i].emaill == user.email && users[i].password == user.pass){
        console.log(users[i])
        localStorage.setItem("userLogin",JSON.stringify(users[i].name))
        break;
      }
    }
    window.location="home.html"
  }
  remveDataInbt()
}

