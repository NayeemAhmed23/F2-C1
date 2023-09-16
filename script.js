let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((element, index) => {
    if (data[index].profession == "developer") {
      console.log(`The person having the profession has developer are :`, data);
    }
  });
}

// 2. Add Data
function addData() {
  const newData = {
    name: prompt("Enter a name:"),
    age: parseInt(prompt("Enter an Age")),
    profession: prompt("Enter your Profession"),
  };
  data.push(newData);
  console.log("New data added :", data);
}

// 3. Remove Admins
function removeAdmin() {
  for (let i in data) {
    if (data[i].profession == "admin") {
      data.splice(i, 1);
    }
  }
  console.table(`After removing the person having profession admin are :`, data);
}

// 4. Concatenate Array
function concatenateArray() {
  let newArr = [
    { name: "susan", age: 20, profession: "intern" },
    { name: "smith", age: 24, profession: "developer" },
  ];
  data = data.concat(newArr);
  console.log(`After concatenate :`,data);
}

// 5. Average Age
function averageAge() {
  let sumOfAges = 0;
  let n = data.length;
  for (let i in data) {
    sumOfAges += data[i].age;
  }
  console.log("Averege age is :", sumOfAges / n);
}

// 6. Age Check
function checkAgeAbove25() {
  let count = 0;
  for (let i of data) {
    if (i.age > 25) {
      count++;
    }
  }
  console.log(`The number of persons having the age greater than 25 are :`,count);
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueArr = [];

  for (let i = 0; i < data.length; i++) {
    if (uniqueArr.indexOf(data[i].profession) === -1) {
      uniqueArr.push(data[i].profession);
    }
  }

  console.log(`The unique professions are :`,uniqueArr);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);

  console.log(`After sorting the ages in ascending order are :`,data);
}

// 9. Update Profession
function updateJohnsProfession() {
  // Find the object with name "john" and update its profession
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === "john") {
      data[i].profession = "manager";
      break; // Assuming there is only one "john" in the array, you can exit the loop once found.
    }
  }

  console.log(`Changing the john profession from developer to manager : `,data);
}

// 10. Profession Count
function getTotalProfessions() {
    let count = 0;
    for (let i=0 ; i<data.length ; i++){
        if((data[i].profession == "developer")|(data[i].profession == "admin")){
            count++;
        }
    }
    console.log(`The combined  total number of professions such as developers and admins are :`,count);
}
