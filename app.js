//Each function holds an array of multiple strings. When called the randomIndex whill randomly select and return a value from the array.

const who = () => {
    let whoShould = ["You should ", "You and your family should ", "You and your friends should "] 
    let randomWho = Math.floor(Math.random() * whoShould.length);
    return whoShould[randomWho]}
    
const what = () => {
    let whatActivity = ["go hiking ", "plan a camping trip ", "go surfing ", "swim with the dolphins ", "go to an amusment park "]
    let randomActivity = Math.floor(Math.random() * whatActivity.length);
    return whatActivity[randomActivity]}
    
const when = () => {
    let whenToGo = ["tommorrow ", "this evening ", "next week ", "next month ", "next year ", "in two weeks "] 
    let randomDate = Math.floor(Math.random() * whenToGo.length);
    return whenToGo[randomDate]}
    
    //combineMessages() will return all of the individual message parts into one complete sentence.
    
const combineMessage = () =>{return who() + what() + when()};
    
combineMessage();