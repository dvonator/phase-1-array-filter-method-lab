// Code your solution here

const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

// function findMatching(array, name) {
//   console.log(`aofjaofao`, array);

//   function lowerCaseFunction(element) {
//     console.log(element);
//     return element.toLowerCase() === name.toLowerCase();
//   }
//   return array.filter(lowerCaseFunction); // it take each element of the array and passes it into a function if that function returns true the elemtns are added to your new array
// }

function findMatching(drivers, name) {
  return drivers.filter(
    (element) => element.toLowerCase() === name.toLowerCase()
  );
}
`if element is = BILL then this would return nothing into the filter array`;

function fuzzyMatch(drivers, name) {
  return drivers.filter((element) => element[0] === name[0]);
}
`if element is = BILL then this would return both of the Bobbys`;

function matchName(drivers, name) {
  return drivers.filter((element) => element.name === name);
}
`if element is = BILL then this would return nothing into the filter array`;
