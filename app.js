

//randomInfo() takes in a array and will return a random object from that array
let randomInfo = (array) => { return Math.floor(Math.random() * array.length) }

//who() contains an array called whoShould which holds different people. 

//when this function is called it will return a random value from the array using the randomInfo function 

const who = () => {
    let whoShould = ["You should", "You and your family should", "You and your friends should", "You and your dog should", "You and your cat should"]
    return whoShould[randomInfo(whoShould)]
}


//what() contains an array called whatActivity which holds different activities the user can participate in

//when this function is called it will return a random value from the array using the randomInfo function 

const what = () => {
    let whatActivity = ["go hiking", "plan a camping trip", "go surfing", "swim with the dolphins", "go to an amusment park", "go bike riding"]
    return whatActivity[randomInfo(whatActivity)]
}

//when() contains an array called whenToGo which holds different dates the user should do an activity

//when this function is called it will return a random value from the array using the randomInfo function 

const when = () => {
    let whenToGo = ["tomorrow", "this evening", "next week", "next month", "next year", "in two weeks"]
    return whenToGo[randomInfo(whenToGo)]
}


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