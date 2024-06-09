

function logOut() {
    localStorage.removeItem("userLogin")
    location="index.html"
    
}

if( localStorage.getItem("userLogin") !== null ){
    document.querySelector("#user").innerHTML= " welcome " + JSON.parse(localStorage.getItem("userLogin"))
}