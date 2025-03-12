let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let input4 = document.querySelector(".input4");
let btn = document.querySelector("#btn");

// Get gender radio buttons
function getGender() {
    let selectedGender = document.querySelector("input[name='gender']:checked");
    return selectedGender ? selectedGender.value : null;
}
// Get dropdowns
let dateDropdown = document.getElementById("date");
let monthDropdown = document.getElementById("date2");
let yearDropdown = document.getElementById("date3");

// Populate Dates (1-31)
for (let i = 1; i <= 31; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    dateDropdown.appendChild(option);
}

// Populate Months (1-12)
for (let i = 1; i <= 12; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = new Date(2000, i - 1, 1).toLocaleString("default", { month: "long" });
    monthDropdown.appendChild(option);
}

// Populate Years (1900 - current year)
let currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1900; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearDropdown.appendChild(option);
}

// Function to check form completion
function match() {
    let gender = getGender(); // Get selected gender

    if (input1.value && input2.value && input3.value && input4.value && gender && dateDropdown.value && monthDropdown.value && yearDropdown.value) {
        alert("Account Created Successful");
    } else {
        alert("Enter all the fields correctly");
    }
}

btn.addEventListener("click", match);


input1.addEventListener("keypress",(eve)=>{
    if(eve.key === "Enter"){
        match();
    }
})
input2.addEventListener("keypress",(eve)=>{
    if(eve.key === "Enter"){
        match();
    }
})
input3.addEventListener("keypress",(eve)=>{
    if(eve.key === "Enter"){
        match();
    }
})
input4.addEventListener("keypress",(eve)=>{
    if(eve.key === "Enter"){
        match();
    }
})

dateDropdown.addEventListener("keypress",(eve)=>{
    if(eve.key === "Enter"){
        match();
    }
})
monthDropdown.addEventListener("keypress",(eve)=>{
    if(eve.key === "Enter"){
        match();
    }
})
yearDropdown.addEventListener("keypress",(eve)=>{
    if(eve.key === "Enter"){
        match();
    }
})



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