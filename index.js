 
function writeCards(names,event){
    const messages = [];
    for(let i = 0;  i < 3; i++ ){
        const greetingMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(greetingMessage);
    }
return messages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


//function for countdown 

function countDown(){
let i = 10;
while(i >= 0){
    console.log(i);
    i--;
}
}

countDown();


// const siblings = ["shukri","zaki","marlia","moha"];
// // names.push("suheila");
// // names.unshift("hanan")

// for (let i = 0; i < siblings.length; i++){
//     console.log(siblings[i]);
// }

// const schools = ["lenana", "buraq", "jkuat", "moringa"]

// let i = 0;
// while(i < schools.length){
//     console.log(schools[i++]);
//     //i++;
// }

// const teachers = ["keengwe","mwangi","purity","omar"]

// for (const element of teachers){
//     console.log(element);
// };

// for (const char of "abdishukri"){
//     console.log(char)
// };

// const person = {
//     name: "shukri",
//     age: 23,
//     sex: "male",
//     school: "moringa",
//     address:{
//         street: "muhoho",
//         estate: "monali",

//     }

// };

// for (const key in person){
//     console.log(person[key]);
// }