// Global variables
var row = null; //variable for the submit function to correctly update the row, since its not defined globally


function Submit() {
  var dataEntered = getInfo(); //variable that stores the info array that the getInfo function gets
  var readData = readingDataFromLocalStorage(dataEntered);
  if (dataEntered == false) {
alert('Please fill out all the fields')
  } else {
    if (row == null) {  //checcking conditions, if row is empty inser
      insert(readData);
     
    } else {
       update(); //if not just update using the Update function
  
    }
  }

  document.getElementById("form").reset(); // clears the form
}


// getting info basically reading the info
function getInfo() {
  var name1 = document.getElementById("name").value;
  var job = document.getElementById("job").value;
  var exp = document.getElementById("exp").value;

  var arr = [name1, job, exp];
  if (arr.includes("")) {
    return false;
  } else {
    return arr;
  }
}
 
//Data in Local Storage
function readingDataFromLocalStorage(dataEntered) { //passing in the info array in the submit function
  // Storing info in local storage
  var n = localStorage.setItem("Name", dataEntered[0]); //getting the elements by key and index for elements in that array
  var j = localStorage.setItem("Job", dataEntered[1]);
  var e = localStorage.setItem("Experience", dataEntered[2]);

  // Shows info in table (Getting item from localStorage)
  var n1 = localStorage.getItem("Name", n); //passing in the key and values from the variables thaat store that info in the local storage
  var j1 = localStorage.getItem("Job", j);
  var e1 = localStorage.getItem("Experience", e);

  var arr = [n1, j1, e1]; //then i store that info i got in an array variable
  return arr;
}

// INSERT
function insert(readData) {
var row = table.insertRow();
row.insertCell(0).innerHTML = readData[0]
row.insertCell(1).innerHTML = readData[1]
row.insertCell(2).innerHTML = readData[2]
row.insertCell(3).innerHTML = `<button onClick= edit(this)>edit</button>
<button onClick = remove(this)>delete</button>`
}
// on click call the edit function and using the keyword this to reference the innerHTML


//EDIT
function edit(td) { //takes the value inside the collum as a perameter
  row = td.parentElement.parentElement; // added parentElement to reference the Table Row i want
  document.getElementById("name").value = row.cells[0].innerHTML; //row. cell index change the the inner HTML in the form
  document.getElementById("job").value = row.cells[1].innerHTML; //row. cell index change the the inner HTML in the form
  document.getElementById("exp").value = row.cells[2].innerHTML; //row. cell index change the the inner HTML in the form
}

// UPDATE
function update() { 
  // var row = td.parentElement.parentElement; // this was creating a new row so i removed it.
  row.cells[0].innerHTML = document.getElementById("name").value; // sets the the inner html of the specific row and cell and updates that to the value of 
  row.cells[1].innerHTML = document.getElementById("job").value; //whats entered in the form
  row.cells[2].innerHTML = document.getElementById("exp").value;
  row = null; //once data is updated set the row to null 
}

// DELETE
function remove(td) {
  var answer = confirm("Are you sure you want to delete the employee info?");
  if (answer == true) {
    var row = td.parentElement.parentElement; //getting the tr selected
    document.getElementById("table").deleteRow(row.rowIndex); // passing in the specific row I want, and deleting the row selected
   ;
  }
}