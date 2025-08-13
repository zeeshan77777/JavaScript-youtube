const animeHeroes = ["itachi", "Kakashi", "Obito", "Shisui"]
const marvelHeroes = ["thor", "captain-Marvel", "Ant-Man", "Iron-Man"]

// animeHeroes.push(marvelHeroes); //it pushes the data of second array into first array but second array displays as array in an array
// console.log(animeHeroes);

// const allHeroes = animeHeroes.concat(marvelHeroes); //it marges the data of both the arrays into one single array
// console.log(allHeroes);

const allNewHeroes = [...animeHeroes, ...marvelHeroes] //it also merges the data of both the arrays into one array but it is the most precise way of doing it
// console.log(allNewHeroes);

const anArr = [1,2,3,[4,5],6,7,[8,9,[10,11]]]
// console.log(anArr.flat(1)); //it basically converts all inside arrays into one array

console.log(Array.isArray("Zeeshan")); //it asks whether Zeeshan is array or not and it gives the answer in boolen
console.log(Array.from("Zeeshan")); //it converts the string Zeeshan into array
console.log(Array.from({name: "Zee"})); //it display empty array because it cannot change this into array..we have to assign it first


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3)); //it converts all these variables into an array




