// Code your solutions in this file

const names=["Charlie", "Samip", "Ali"];
const event=["suprise"]
function writeCards(names,event){
    const message =[]
    for(const name of names){
        message.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return message

}
 
function countDown(number){
    while(number>=0){
        console.log(number);
        number--;
    }
}
