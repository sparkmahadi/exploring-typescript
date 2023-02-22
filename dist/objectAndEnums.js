"use strict";
var _a;
var player;
player = {
    name: 'Messi',
    age: 35,
    country: "Argentina",
    married: true,
    clubs: ["Barcelona"],
};
player = {
    name: 'Neymar',
    // age: 30,
    country: "Brazil",
    married: false,
    // clubs: ["Barcelona"],
};
player.age = player.age + 5;
player.clubs = (_a = player.clubs) === null || _a === void 0 ? void 0 : _a.map(function (club) { return club.toUpperCase(); });
// console.log(player, player.country, player["clubs"]);
// Enums
var Friends;
(function (Friends) {
    Friends[Friends["Arif"] = 10] = "Arif";
    Friends[Friends["Kalam"] = 15] = "Kalam";
    Friends[Friends["Salam"] = 20] = "Salam";
    Friends[Friends["Balam"] = 30] = "Balam";
})(Friends || (Friends = {}));
var Configs;
(function (Configs) {
    Configs["API_Key"] = "api_key";
    Configs["Domain_Name"] = "domain_name";
})(Configs || (Configs = {}));
console.log(Configs.API_Key);
// console.log(Friends.Balam);
