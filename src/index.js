const form  = document.getElementById('addForm');

//Array to store all dish names
dishes = []

//Function to handle submission of form
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const dish = document.getElementById('add-name').value;

    if (dish) {

        // Add the new value to dishes array
        dishes.push(dish);

        // add dish to list
        fetchAll();

        //reset input form to placeholder
        form.reset();
    }
})


//Function to generate list
function fetchAll(){
    document.querySelector('#dishes').innerHTML = "";
    dishes.forEach(
        dish => displayDish(dish)
    );
}

//Function to display dish to screen
function displayDish(dish) {
    let el = document.getElementById('dishes');
    return el.innerHTML += `
        <div class="column"> ${dish}</div>
        <div class="column"> <button onclick=deleteDish("${dish}")>Delete</button> <br><br>`;
}

//Function to delete dish and refetch updated list
function deleteDish(dish){
    const index = dishes.indexOf(dish);
    dishes.splice(index, 1);
    fetchAll();
}

