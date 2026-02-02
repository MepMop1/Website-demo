let darkMode = false; //Variabel som kollar om ljust eller mörkt

function visaMessage() {
    if (darkMode == false) {
        document.body.style.backgroundColor = "black"; // Mörkt tema

        document.getElementById("msg").innerHTML = "Ljust Tema"; //byter texten på knappen till "Ljust tema"
        darkMode = true; //mörkt
    } else {
        document.body.style.backgroundColor = "white";// Ljust tema

        document.getElementById("msg").innerHTML = "Mörkt Tema"; //byter texten på knappen till "Mörkt Tema"
        darkMode = false; //ljust
    }
}

function kollaLosenord() {
    let losenord = document.getElementById("losenord").value; //Användarens input blir till ett värde
    let upLosenord = document.getElementById("upLosenord").value; //Användarens input blir till ett värde

    if (losenord != upLosenord) { //Om  inte lösenord och upprepaLösenord är samma skickar den en alert.
        alert("Lösenorden är inte samma!");

        return false; //Stoppar formuläret
    }

    return true; //Skickar formuläret
}





