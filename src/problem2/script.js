
// Manage Toast Message

function sendRequest(){
    // Click Send Button will trigger this function and show the toast Message depend on the input
    let sender = document.getElementById("input-address").value;
    let amount = document.getElementById("input-amount").value;
    let otp = document.getElementById("input-otp").value;
    if(sender==="" || amount==="" || otp===""){
        showErrorToast();
    }
    else{
        showSuccessToast(sender, amount);
    }

}

function toast({type = "", title="", message="", duration = 3000}){
    const toastContainer = document.getElementById("toast");
    const toast = document.createElement("div");
    const autoRemove = setTimeout(function() {
        toastContainer.removeChild(toast);
    },duration + 100)
    if(toastContainer){
        toast.classList.add("toast", `toast--${type}`);
        let icon;
        if(type==="success"){
            icon = "fas fa-check-circle";
        }
        else{
            icon = "fa-solid fa-circle-exclamation"
        }
        toast.innerHTML = ` <div class="toast__icon toast__icon--${type}">
                                <i class="${icon}"></i>
                            </div>
                            <div class="toast__message">
                                <h1>${title}</h1>
                                <p>${message}</p>
                            </div>
                            <div class="toast__close">
                                <i class="fas fa-times"></i>
                            </div>
        `
        toast.onclick = function(e){
            if(e.target.closest('.toast__close')){
                toastContainer.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }
    }
    toastContainer.appendChild(toast);
    
}

function showSuccessToast(sender, amount){
    toast({
        type: "success",
        title: "Success",
        message: `Sent ${amount} ETH from ${sender}`,

    })
}
function showErrorToast(){
    toast({
        type: "error",
        title: "Error",
        message: "You haven't complete the form",

    })
}






//Mange Input Change 


// Input Box effect
let inputAddress = document.getElementById("input-address");
    inputAddress.addEventListener("input", (event)=>{
        if(event.target.value===""){
            event.target.style.opacity = "0.5";
        }
        else{
            event.target.style.opacity = "0.8";  //Modifies the css property of the element
        }
        
})

// Input Box effect
let inputAmount = document.getElementById("input-amount");
    inputAmount.addEventListener("input", (event)=>{
        if(event.target.value===""){
            event.target.style.opacity = "0.5";
        }
        else{
            event.target.style.opacity = "0.8"; //Modifies the css property of the element
        }
        
})
// Input Box effect
let inputOtp = document.getElementById("input-otp");
    inputOtp.addEventListener("input", (event)=>{
        if(event.target.value===""){
            event.target.style.opacity = "0.5";
        }
        else{
            event.target.style.opacity = "0.8"; //Modifies the css property of the element
        }
        
})