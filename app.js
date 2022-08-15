
//Each function holds an array of multiple strings. When called, the randomIndex will randomly select and return a value from the array

const who = () => {
    let whoShould = ["You should", "You and your family should", "You and your friends should", "You and your dog should", "You and your cat should"]
    let randomWho = Math.floor(Math.random() * whoShould.length);
    return whoShould[randomWho]
}

//what() contains an array called whatActivity which holds different activities the user can participate in

//using the Math object, a activity will be randomly selected from the array when the function is called

const what = () => {
    let whatActivity = ["go hiking", "plan a camping trip", "go surfing", "swim with the dolphins", "go to an amusment park", "go bike riding"]
    let randomActivity = Math.floor(Math.random() * whatActivity.length);
    return whatActivity[randomActivity]
}

//when() contains an array called whenToGo which holds different dates the user should do an activity

//using the Math object, a date will be randomly selected from the array when the function is called

const when = () => {
    let whenToGo = ["tommorrow", "this evening", "next week", "next month", "next year", "in two weeks"]
    let randomDate = Math.floor(Math.random() * whenToGo.length);
    return whenToGo[randomDate]
}
//randomInfo() takes in a array and will choose a ranom object from that array
let randomInfo = (array) => { Math.floor(Math.random() * array.length) }

//combineMessages() will combine all of the individual message parts into one complete sentence

const combineMessage = () => {
    let message = who() + " " + what() + " " + when();
    return message
};


//Each time the user clicks the button, a new message will display on the screen

let mesageButton = document.getElementById("generateMessageBtn");

mesageButton.onclick = () => {

    document.querySelector("h1").innerText = combineMessage();

}