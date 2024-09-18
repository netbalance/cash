document.getElementById("goToSolde").addEventListener("click",function(event){
    event.preventDefault();
    var password = prompt("Password:");
    
    if (password==="Eeeoei181181"){
        window.location.href="gestion solde.html";
    } 
    else{
        alert("Denied.");
    }
});