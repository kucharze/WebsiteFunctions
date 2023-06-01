let menu = {
  breakfast: ["Pancakes and eggs", "Sausage Supreme"],
  lunch: ["Chicken Sandwhich", "FishSandwich"],
  dinner: ["Chicken dinner", "Fish Dinner"],
  desert: ["Chocolate Sundea", "Hot fudge Sundea", "Chocolate Chunk Brownie"],
};

let specials = ["Fish and chips", "Diablo Pizza"];

let specialDrinks = {
  captainMorgan: { name: "Captain Morgan", alcoholLevel: 10, happyHour: true },
  budLight: { name: "Bud Light", alcoholLevel: 5, happyHour: true },
};

locations = 5;

locationList = [
  "Albany, NY",
  "Pittsburgh, PA",
  "Dallas, TX",
  "Washington, DC",
  "Las Vegas, CA",
];

//-----Functions-----
//2 ways to write functions
//Function declaration
//listen to radio
// function name() {}

//2 arrow function
//listen to ipod
//More of standard
// const whateverName = () => {};

const getBreakfastItems = () => {
  let items = menu.breakfast;
  let screen = document.querySelector(".breakfast");
  let button = document.querySelector(".view");
  button.innerHTML = "Menu now open";
  items.forEach((i) => {
    console.log(i);
    screen.append(i);
  });
};

const getAnyItem = (themes) => {
  if (themes === "breakfast") {
    console.log(menu.breakfast);
  } else if (themes === "lunch") {
    console.log(menu.lunch);
  } else {
    console.log(menu.dinner);
  }
};
//build function
//give name
//reference name in HTML

//Take two or three elements
//Write a function that displays elements to the console
//Homework functions

const showDrinks = () => {
  console.log(specialDrinks);
  let locations = document.querySelector(".drinks");
  locations.innerHTML =
    specialDrinks.captainMorgan.name + " " + specialDrinks.budLight.name;
};

const showSpecials = () => {
  console.log(specials);
  let locations = document.querySelector(".Specials");
  locations.innerHTML = specials.join(", ");
};

const showLocations = () => {
  console.log(locationList);
  let locations = document.querySelector(".locations");
  locations.innerHTML = locationList.join(", ");
};
