// let email = document.getElementById("email");
// let pass = document.getElementById("pass");

// const curr_email = "asadurrahaman2005@gmail.com";
// const curr_pass = "9TShadow05";

// let btn = document.querySelector("button");

// function match(){
//     return new Promise((resolve,reject)=>{
//         btn.addEventListener("click",()=>{
//             if(curr_email===email.value && curr_pass===pass.value){
//                 resolve("Data Saved");
//             } else{
//                 reject("Try Again");
//             }
//         })
//     })
// }

// match()
// .then((result)=>{
//     alert(result)
// })
// .catch((err)=>{
//     alert(err);
// })




const curr_mail = "fbexample@gmail.com";
const curr_pass = "facebook@123";

let email = document.querySelector("#mail");
let pass = document.querySelector("#pass");
let btn = document.querySelector("#btn");

function match(){
    if(curr_mail===email.value && curr_pass===pass.value){
        alert("Login Successful");
    }else{
        if(!email.value && !pass.value){
            alert("Enter Email & Password"); 
        }else{
        if(curr_mail!==email.value){
            alert("Email or phone number is Wrong, Try Again!");
        }
        if(curr_pass!==pass.value){
            alert("Password is Wrong, Try Again! ");
        }
    }
    }
}

btn.addEventListener("click",match)


email.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        match();
    }
});

pass.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        match();
    }
});



// function myfunction(){
//     var a = document.querySelector("#pass");
//     if(a.type === "password"){
//         a.type="text";
//     }
//     else{
//         a.type = "password";
//     }
// }

let check = document.querySelector("#check");

check.addEventListener("click",()=>{
    var a = document.querySelector("#pass");
    if(a.type === "password"){
        a.type="text";
    }
    else{
        a.type = "password";
    }
})