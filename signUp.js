var inbtname = document.getElementById("name")
var inbtemail = document.getElementById("email")
var inbtpassword = document.getElementById("password")
var exist = document.querySelector("#exist")

function LogIn(){
    window.location="index.html"
  }

  var users = []

if( localStorage.getItem("list")  !== null ){
  users = JSON.parse(localStorage.getItem("list"))

}

function isEmpty() {

  if (inbtname.value == "" || inbtemail.value == "" || inbtpassword.value == "") {
      return false
  } else {
      return true
  }
}


function adduser() {


    if (isEmpty() == false) {
     exist.innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
      return false
    }

  if(vaildtionname() == true && vaildtionpass() == true &&  vaildtionemil() == true){
    var user= {
      name:inbtname.value,
      password:inbtpassword.value,
      emaill:inbtemail.value,
    }

    for (var i = 0; i < users.length; i++) {
        if (users[i].emaill === user.emaill) {
          exist.innerHTML = "<span class='text-success m-3'> successfully </span>"
          remveDataInbt()
            return   
        }
    }
    users.push(user)
    remveDataInbt()
    localStorage.setItem("list",JSON.stringify(users))
    // window.location="index.html"
  }
}

function vaildtionname(){
    var text = inbtname.value
    var ragex =/^\D{5,8}$/
    if( ragex.test(text) == true){
          return true
        }else{
          return false
      }
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

  function remveDataInbt(){
    inbtname.value = ""
    inbtemail.value = ""
    inbtpassword.value = ""
}