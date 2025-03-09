function newEmployeeCard(name, position) {
    const employeeContainer = document.getElementById("employeeContainer")
    //getElementById employeeContainer
    let card = document.createElement("div");
    card.setAttribute("class", "employee-card");
    card.setAttribute("id", `employee-${employeeCount}`);
    card.innerHTML = "<h2>${name}</h3><p>${position}</p>";
    
    //creatElement div tag
    // classList.add employee-card
    
    // innerHTML
    // appendChild to container
    
    // use examples
    //addEmployeeCard("Alice", "Software Engineer")
    //

    })
}