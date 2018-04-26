const login = document.getElementById("login");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const userResult = document.querySelectorAll('.validate');
const name = document.getElementById("caption");
const remember = document.getElementById("remember");
let res = {};

function validate(evt) {
  evt.preventDefault()
  for (let i = 0; i < userResult.length; i++) {
    res.loginBoolean = userResult[0].checkValidity();
    res.passwordBoolean = userResult[1].checkValidity();
    if( !userResult[0].value){
      res.loginBoolean = false;
    } 
    if(!userResult[1].value){
      res.passwordBoolean = false;
    }
  }
  if(userResult[0].checkValidity()){
    res.login = userResult[0].value;
  }
  if(userResult[1].checkValidity()){
    res.password = userResult[1].value;
  }
  console.log(res);
}
name.textContent = localStorage.getItem("userLogin");

function showResults(){
 if(remember.checked){
  if(res.loginBoolean && res.password){
    localStorage.setItem("userLogin", `Hello, ${res.login}!`);
   }
 }
 if(res.login == false){
  localStorage.setItem("userLogin", "Log in to the Site");
 }
}

submitBtn.addEventListener("click", validate);
submitBtn.addEventListener("click", showResults);