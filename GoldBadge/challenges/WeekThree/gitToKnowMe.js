

gitToKnowMe = [
    {
        Name: "Jonathan Cernero",
        Age: 41,
        graduatedHSYear: 1997,
        pets: true,
        petNames: ["Violet","Lavender","Lilly","Darcy"],
        mostRecentMovieWatched: "LOTR: Return of the King",
        carsOwned: [{
            Make: "Honda",
            Model: "Civic"
        }],
        favoritePotato: "Sweet",
    },
    {
        Name: "Steve Emerson",
        Age: 48,
        graduatedHSYear: 1990,
        pets: true,
        petNames: ["Goldy"],
        mostRecentMovieWatched: "The Princess Bride",
        carsOwned: [{
            Make:"Chevy",
            Model:"Silverado"
        }],
        favoritePotato: "Mashed",
    },
    {
        Name: "Ginger Alford",
        Age: 39,
        graduatedHSYear: 1999,
        pets: true,
        petNames: ["Ripley"],
        mostRecentMovieWatched: "Palm Springs",
        carsOwned: [{
            Make: "Toyota",
            Model: "Prius"
        }],
        favoritePotato: "Home Fries",
    },
    {
        Name: "Jessica Nadolski",
        Age: 43,
        graduatedHSYear: 1995,
        pets: true,
        petNames: ["Barley","Wrigley"],
        mostRecentMovieWatched: "Hoosiers",
        carsOwned: [{
            Make: "Mazada",
            Model: "CX5"
        }],
        favoritePotato: "Hashbrown",
    },
    {
        Name: "Andrew White",
        Age: 42,
        graduatedHSYear: 1996,
        pets:true,
        petNames: ["Bella", "CC"],
        mostRecentMovieWatched: "Social Dilemma",
        carsOwned: [{
            Make: "Honda",
            Model: "CRV"
        }],
        favoritePotato: "Tater Tot",
    }
]
let moviesWatched = new Array();
let movieWatcher = new Array();
for (i = 0; i < gitToKnowMe.length; i++) {
    moviesWatched.push(gitToKnowMe[i].mostRecentMovieWatched);
}
console.log(moviesWatched);

//another example - a for of loop


//GET EX from slack


//another example - a forEach loop


let mostRecentMovieWatched = [];
​
for (let i = 0; i < webDevGroup.length; i++) {
  console.log(webDevGroup[i].mostRecentMovie);
  mostRecentMovieWatched.push(webDevGroup[i].mostRecentMovie);
}
​
console.log(mostRecentMovieWatched);
mostRecentMovieWatched = [];
for (student of webDevGroup) {
  mostRecentMovieWatched.push(student.mostRecentMovie);
}
console.log(mostRecentMovieWatched);
mostRecentMovieWatched = [];
​
webDevGroup.forEach((student) => {
  mostRecentMovieWatched.push(student.mostRecentMovie);
});
​
