// 1
let user1 = {
    name: "Dimych",
    age: 12,
    address: {
        city: {
            title: "Minsk"
        }
    }
}

let user2 = {
    "name": "Dimych",
    "age": 12,
    "address": {
        "city": {
            "title": "Minsk"
        }
    }
}

let title1 = user1.address.city.title;
let title2 = user2["address"]["city"]["title"];

console.log(title1) // "Minsk"
console.log(title2) // "Minsk"

// 2
let city = {};
city.title = "Minsk";
console.log(city); //{ title: 'Minsk' }

