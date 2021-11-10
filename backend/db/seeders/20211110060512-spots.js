'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Spots', [
  {
  userId: 3,
  name: "Sedlec Estuary",
  description: "A quaint little unassuming chapel in the outskirts of Prague that just happens to be adorned with the skeletal remains of somewhere between 40,000 and 70,000 people.",
  address: null,
  city: "Prague",
  state: null,
  country: "Czech Republic",
  lat: 49.961944,
  lng: 15.288333,
  price: null
  },

  {
  userId: 3,
  name: "Ilha da Queimada Grande: Snake Island",
  description: "A picturesque tropical island off the coast of Brazil, which is so densely populated by deadly vipers that it is off limits to human visitors.",
  address: null,
  city: "São Paulo.",
  state: null,
  country: "Brazil",
  lat: -24.486111,
  lng: -46.675,
  price: null
  },

  {
  userId: 3,
  name: "The Red Forest",
  description: "Lovely little patch of temperate forest surrounding the Chernobyl Nuclear disaster site.  Named for the color of the pine trees after they died of exposure to extreme levels of radiation, the area remains one of the most contaminated in the world, and is home to radioactive wolves and wild boars. Also, there have been several major forest fires in recent years, likely releasing radioactive material into the air.",
  address: null,
  city: "Chernobyl",
  state: null,
  country: "Ukraine",
  lat: 51.38011,
  lng: 30.04908,
  price: null
  },

  {
  userId: 3,
  name: "Bikini Atoll",
  description: "A sexy name like Bikini Atoll, probably conjures up images of warm tropical sunshine over idyllic palm tree laden beaches.  But before you pack your hottest swimwear and head for this island paradise, you should know that this South Pacific coral reef was a nuclear test site for the United States. In 1946, the people of the atoll were forcibly relocated and a series of 23 nuclear test were done throughout the next decade.",
  address: null,
  city: "Bikini",
  state: null,
  country: "Republic of the Marshall Islands",
  lat: 11.583333,
  lng: 165.383333,
  price: null
  },

  {
  userId: 3,
  name: "Mount Washington",
  description: "Notorious for erratic weather, and long time holder of the world record for recorded wind speed at 231mph (371.76 km/h), Mt. Washington is considered to be one of the most dangerous mountains in the world",
  address: null,
  city: "Sargent's Purchase",
  state: "NH",
  country: "USA",
  lat: 44.2705,
  lng: -71.30325,
  price: null
  },

  {
  userId: 3,
  name: "Death Valley",
  description: "One of the hottest travel destinations in the world....literally!  Boiling and dry, this lifeless desert lives up to its name and reputation.",
  address: null,
  city: "Inyo",
  state: "CA",
  country: "USA",
  lat: 36.246944,
  lng: -116.816944,
  price: null
  },

  {
  userId: 3,
  name: "The Danakil Desert",
  description: "Not just an uninhabitable desert, but also a hotbed of volcanic and tectonic activity.",
  address: null,
  city: "Danakil",
  state: null,
  country: "Eritrea",
  lat: 14.2417,
  lng: 40.3,
  price: null
  },

  {
  userId: 3,
  name: "Mount Sinabung",
  description: "After a couple thousand years of relative dormancy, this sleeping dragon seems to be getting restless. Since 2010, activity has been increasing and after several eruptions and increased alerts, scientists fear that a major event may be eminent.",
  address: null,
  city: "Sumatra",
  state: null,
  country: "Indonesia",
  lat: 3.17,
  lng: 98.392,
  price: null
  }

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
