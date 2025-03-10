//Task 2: Adding Employee Cards Dynamically
let employeeCount = 0 //Cards start at 0 
function newEmployeeCard(name, position) {
    const employeeContainer = document.getElementById("employeeContainer")
    //getElementById employeeContainer
    let card = document.createElement("div");
    card.setAttribute("class", "employee-card");
    card.setAttribute("id", `employee-${employeeCount}`);//setting attributes
    card.innerHTML = `<h2>${name}</h2><p>${position}</p>`;//create heading for name and paragrah for position
    employeeContainer.appendChild(card);//append the employee card

    const editButton = document.createElement(`button`);
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function(event){
        event.stopPropagation();
        cardEditing(card);
    });
    card.appendChild(editButton);// Creating edit button for task 5

    const removeButton = document.createElement(`button`);
    removeButton.textContent = `Remove Employee`;
    removeButton.addEventListener(`click`, function(event){
        event.stopPropagation();
        employeeContainer.removeChild(card);
    }); //creating remove button for deleting card
    card.appendChild(removeButton);
    employeeCount +=1;// adding to employee count when adding a new card
    };
    newEmployeeCard("James Gunn", "Director")
    newEmployeeCard("Chris Pratt", "Actor")
    newEmployeeCard("Kevin Feige", "Producer")

    //Task 3:Converting NodeLists to Arrays for Bulk Updates

    const employeeCards = document.querySelectorAll(".employee-card");//using document.querySelectorAll
    const employeeCardsArray = Array.from(employeeCards);// converting into an array with Array.from
    employeeCardsArray.forEach(card => {
        card.style.backgroundColor = "lightgreen";
        card.style.border = "2px solid darkgreen"
        
    });
//Task 4: Implementing Removal of Employee Cards with Event Bubbling
const employeeContainer = document.getElementById("employeeContainer");
employeeContainer.addEventListener("click", (event)=> {
    const card = event.target.closest(`.employee-card`);//event listener for whrn card is clicked
    if(card) {
        console.log(`Employee card clicked: ${card.id}`);//message when card is clicked
    }
});

//Task 5: Inline Editing of Employee Details
function cardEditing(card) {
    const nameElement = card.querySelector(`h2`);
    const positionElement = card.querySelector(`p`);

    const nameInput = document.createElement(`input`);
    nameInput.value =nameElement.textContent;// creating input fields for name

    const positionInput = document.createElement(`input`);
    positionInput.value = positionElement.textContent;// creating input fields for position

    nameElement.textContent = ``;
    nameElement.appendChild(nameInput);//replacing the text with inputs for name

    positionElement.textContent= ``;
    positionElement.appendChild(positionInput);//replacing text with input for position

    const saveButton = document.createElement(`button`);
    saveButton.textContent = `Save`//making a save button

    card.appendChild(saveButton);
    saveButton.addEventListener("click", function(){
        nameElement.textContent = nameInput.value;
        positionElement.textContent = positionInput.value;
        card.removeChild(saveButton);
    });
};