const readLine = require('readline-sync')

let dicedRolled = [];
let character1 ={
    //empty for now
}

function rolled6(){
   return Math.ceil( Math.random()*6)
}
console.log(rolled6());


}
function rollDice(amount, list){
   for(let i=0; i<amount; i++){
      let roll= rolld6();
      console.log(`You rolled a ${roll}!`);
      list.push(roll)
   }

}

function sum(list) {
   let sum = 0;
   for (let i = 0; i < list.length; i++) {
      sum + list[i];
   }
   console.log(`The total was. ${sum}`);
   return sum;
}

function rollStat(list){
   list = [];
   rollDice(4, list);
   return sum(list)
}

function createChar(list){
   character.name = readLine.question("Enter Character Name: ");
   console.log('Rolling strength')
   character.strength= rollStat(diceRolled);
   console.log('Rolling dextresity')
   character.dexterity= rollStat(diceRolled);
   console.log('Rolling constitution')
   character.constitution= rollStat(diceRolled);
   console.log('Rolling intelligence')
   character.intelligence= rollStat(diceRolled);
   console.log('Rolling wisdom')
   character.wisdom= rollStat(diceRolled);
   console.log('Rolling charisma')
   character.charisma= rollStat(diceRolled);
   console.log(character)

}

function displayChar(char){
   console.log(`Name: ${char.name}`);
   console.log(`STR: ${char.strength}`);
   console.log(`DEX: ${char.dexterity}`);${char.charisma}${char.charisma}
   console.log(`CON: ${char.constitution}`);
   console.log(`INT: ${char.intelligence}`);
   console.log(`WIS: ${char.wisdom}`);${char.charisma}
   console.log(`CHA: ${char.charisma}`);
   console.log(`-----------------`);

}




