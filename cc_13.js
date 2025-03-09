let employeeCount = 0 //Cards start at 0 
function newEmployeeCard(name, position) {
    const employeeContainer = document.getElementById("employeeContainer")
    //getElementById employeeContainer
    let card = document.createElement("div");
    card.setAttribute("class", "employee-card");
    card.setAttribute("id", `employee-${employeeCount}`);//setting attributes
    card.innerHTML = `<h2>${name}</h3><p>${position}</p>`;//create heading for name and paragrah for position
    employeeContainer.appendChild(card);//append the employee card

    const removeButton = document.createElement(`button`);
    removeButton.textContent = `Remove Employee`;
    removeButton.addEventListener(`click`, function(event){
        event.stopPropagation();
        card.remove();
    }); //creating remove button for deleting card
    card.appendChild(removeButton);
    
    //creatElement div tag
    // classList.add employee-card
    
    // innerHTML
    // appendChild to container
    
    // use examples
    //addEmployeeCard("Alice", "Software Engineer")
    //

    })
}