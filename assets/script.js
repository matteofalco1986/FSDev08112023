


// Cancella in campo di immissione utente
const fieldReset = () => {
    document.querySelector("input").value = "";
}
const barOnClick = (element) => {
    element.style.textDecoration = 'line-through';
}

// Crea un container per il paragrafo
const createContainer = () => {
    const container = document.createElement("div");
    container.className = "taskContainer";
    return container;
}

// Crea un paragrafo
const createParButton = () => {
    const parButton = document.createElement("button")
    const text = parButton.textContent;
    parButton.className = "taskButton";
    parButton.setAttribute("onClick", "replyClick(this.id)")
    return parButton;
}

const createBinButton = () => {
    const binButton = document.createElement("button");
    const text = "THRASH";
    binButton.textContent = text;
    binButton.className = "binButton";
    return binButton;
}

// Assing and id to each button
const assignId = () => {
    let buttonsInDocument = document.querySelectorAll("div button");
    for (let i = 1; i < buttonsInDocument.length; ++i){
        if (buttonsInDocument[i].className !== "binButton"){
            buttonsInDocument[i].setAttribute("id", "btn" + String(i));
        }
        console.log(buttonsInDocument[i]);
        console.log(buttonsInDocument[i].textContent);
    }
}



// Genera una task da aggiungere al DOM
const generateTask = () => {

    const container = createContainer();
    const parButton = createParButton();
    const binButton = createBinButton();
    const taskList = document.getElementById("taskList");
    const userInput = document.querySelector("input").value;
    
    // Terminate function and display pop-up if field is empty
    if (userInput === ""){
        window.alert("Attenzione! Inserisci una task nel campo");
        parButton.remove();
        container.remove();
        return;
    }

    // Add task to task section
    taskList.appendChild(container);
    container.appendChild(parButton);
    container.appendChild(binButton);

    // Populate li content with user input
    parButton.innerText = userInput;
    // Empty field
    fieldReset();
    assignId();
}

// Aggiunge un evento listener al bottone di generazione task
const buttonReact = (myFunction, id) => {
    myButton = document.getElementById(id);
    myButton.addEventListener("click", myFunction)
}

function replyClick(clicked_id)
{
    return clicked_id;
}

buttonReact(generateTask, "create-btn");
