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

    const removeButton = document.createElement(`button`);
    removeButton.textContent = `Remove Employee`;
    removeButton.addEventListener(`click`, function(event){
        event.stopPropagation();
        card.remove();
    }); //creating remove button for deleting card
    card.appendChild(removeButton);
    employeeCount +=1;// adding to employee count when adding a new card
    };
    newEmployeeCard("James Gunn", "Director")
    newEmployeeCard("Chris Pratt", "Actor")
    newEmployeeCard("Kevin Feige", "Producer")

    //Task 3:Converting NodeLists to Arrays for Bulk Updates

    const employeeCards = document.querySelectorAll(".employeeCard");//using document.querySelectorAll
    const employeeCardsArray = Array.from(employeeCards);// converting into an array with Array.from
    employeeCardsArray.forEach(card => {
        card.computedStyleMap.transition = "box-shadow 0.3s ease-in-out";
        card.onmouseover = () => {
            card.computedStyleMap.boxShadow = "0 0 15px rgba(0, 255, 255, 0.8)";
        };
        card.onomouseout = () => {
            card.computedStyleMap.boxShadow = "none";
        }//this was not taught in class I looked up how to get this affect
        
    })

