//create an object of key-value pairs
let contacts ={
    bff: 1234567,
    mom: 5678900,
    bro: 9876543,
}

//log all
console.log(contacts);

//access a specific entry by its keys
console.log(contacts.bff);

//cant access if key doesnt exist
console.log(contacts.myself);

//add new entry
contacts.sis = 3456677;
console.log(contacts);

//update entry
contacts.bff =1111111;
console.log(contacts);

//delete an entry
delete contacts.mom;
console.log(contacts);

//Is there a key called __ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

let a = {
    value: 20
};
let b = a;
let c = {
    value:20
};

console.log( a == b);
console.log( a == c);
console.log( b == c);

console.log(a.value == c.value);

let dog = {
    dogName: 'Zelda',
    breed:  'Terrier',
    age: '9',
    size: 'medium',
    barks: true
}
console.log(dog)

let phone = {
    brand: 'apple',
    model: '12',
    serviceCompany: 'AT&T',
    color: 'mint',
    works: 'true',
}
console.log(phone);

let patricia = {
    race: 'Mexican',
    coloreEyes: 'honey',
    age: '25',
    height: '5',
    hairType: 'straight',
}
console.log(patricia);

let keyboard = {
    keyColor: 'rainbow',
    brand: 'msi Gaming',
    size: 'big',
    color: 'black',
    type: 'wired',

}
console.log(keyboard);

let airpods = {
    color: 'white',
    size: 'small',
    brand: 'apple',
    type: 'wireless',
    works: 'true',
}
console.log(airpods);
