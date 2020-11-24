let netflix = {
    id: 1,
    name: "The Office",
    season1: {
      seasonInfo: {
        episodeInfo: [
          {
            episode: 1,
            episodeName: "Pilot",
          },
          {
            episode: 2,
            episodeName: "Diversity Day",
          },
          {
            episode: 3,
            episodeName: "Health Care",
          },
          {
            episode: 4,
            episodeName: "The Alliance",
          },
          {
            episode: 5,
            episodeName: "Basketball",
          },
        ],
      },
    },
    season2: {},
    season3: {},
  };

  console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);


  let contact = {};
  //set up to be an empty object

  //can build the object up this way

  contact.name = "Jessica";
  contact.number = "2192265849";

  console.log(contact);

  //a way to give it another key

  contact["notes"] = "Best friend";

  console.log(contact);

  //the keys are notes, name, number

  //to check if an object has this property - store it as a variable and console log it
  hasName = contact.hasOwnProperty("name");
  console.log(hasName);

  //you can also delete a property
  delete contact.notes;
  console.log(contact);

  //you can put all of the keys into an array

  let newArray = Object.keys(contact);
  console.log(newArray);

  //JSON - meaning = java script object notation


  //WEEK THREE GROUP CHALLENGE

  let restaurantData= {
    restaurantName: "Lou Malnati's",
    yearBuilt: "1971",
    seating: "10-20",
    carryOut: true,
    softdrinks: ['Pepsi', 'Mr. Pibb'],
  }

  console.log(restaurantData);