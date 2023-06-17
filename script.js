/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
//   function By map
  function PrintDeveloperbyMap() {
    arr.map(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
//   function by ForEach
  function PrintDeveloperbyForEach() {
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
//   add data of new employee by creating object
  function addData() {
    const newEmployee = { id: 4, name: "Ajit", age: "22", profession: "intern" };
    arr.push(newEmployee);
    console.log(newEmployee);
  }
  
//   removing admin from arr using filter fun
  function removeAdmin() {
    arr = arr.filter(employee => employee.profession !== "admin");
    console.log(arr);
  }
  
//   concatenateArray by creating new array with 3 objects
  function concatenateArray() {
    const newArray = [
      { id: 4, name: "harshal", age: "25", profession: "intern" },
      { id: 5, name: "akshay", age: "24", profession: "SDE" },
      { id: 6, name: "shubham", age: "23", profession: "developer" }
    ];
  
    const concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
  }