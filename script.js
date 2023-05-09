// Intro to JS Datatypes

//console.log('hello world')

//integers - whole numbers 0 1 2 3 4...
//floats - decimals 1.23  3.14 4.35 (set the number of deciamal places)


//math operators + - / *
//exponents **
//modulus - gives us the REMAINDER of a division equation
//   %      (think of table seating or TURN BASED GAMES)
//console.log(482.33145 / 2.31851)

// math.pow (X,y) <-- arguments / x^y
//math.sqrt (x) <-- argument / sqrt of x
//math.random provides a random decimal
//round DOWN to nearest integer = math.floor(x.yz)
//round UP to nearest integer = math.ceil (x.yz)
//round to nearest integer = math.round(x.yz)


//Strings -> Words, Sentences, Characters
//we can use ' ' <- single  "" <- double  `` <- back tick
//console.log('hello'.toLowerCase())

//Defining Variables
//Let and Const

let firstName = "Ron"
let lastName = "Rose"
let fullName = `${firstName} ${lastName}` // <-- literals
let age = 32
let favoriteBook = 'Tears of a Tiger'
let enjoysCoding = true
let enjoysDay1Installfest = false



//console.log(`${fullName} is ${age} years old. In January he will be ${age +=1} years old`)

// Math.pow(3, "f") <-- will return "NaN" not a number
//console.log(typeof enjoysCoding)

// Bolean Data Type (uses logical operators)
// && "and"   || "or"   ! "not"
// true && true = (both must be true)
// true || false = (at least one must be true)
// !true (cannot be true)

//these are undefines until we give them some kind of value
let userName
let passWord
//__________

userName = "ronboskii"
password = "Password1!"
//___________


let pokemon1 = "Squirtle"
let pokemon2 = "Pidgey"
let pokemon6 = null

//console.log(pokemon6)

pokemon6 = "geodude"
//console.log(pokemon6)


//we are using Node to run our .js files in our Terminal
// we are seeing data in our terminal through our Console.log() method we are using


//************************** 
//****** A R R A Y S *******
//************************** 


let friends = ['moe', 'larry', 'curly']
let fruits = ["apples", "bananas", "oranges", "dragon fruit", "habanero perpper", "pear", "guava", "mango"]

//.pop() removes the final item of array
//fruits.pop()

//.push() will add items to the end of array
//fruits.push('kiwi', 'pineapple', 'blackerry')

//.shift() removes the first item of an array
//fruits.shift()

//.unshift() will add items to the front of the array
//fruits.unshift('date', 'fig')

//.splice() can Add, Delete, and Rename items
//it can take 3 arguments: where to start, how far to go, and what to do

//fruits.splice(2, 3) < - will start at [2] and delete 3 after

//fruits.reverse() will reverse the list order
//console.log(fruits)




//************************************
//****** CONTROL FLOW & LOOPS ********
//************************************ 

// > < >= <=


// let ageInYears = 12

// else is attached & doesn't require a new set of ()
// binary (truethy falsey)

// if (ageInYears >= 18) {
//    console.log('you can vote')
// }else {
//    console.log('you can not vote')
// } 

// if () {}
// else {}


//we need to use == or === when checking conditions
//if we only use = we are Reassigning the value... it will ALWAYS come back true

// == just measures our content value
// '1989' == 1989
// === measures value AND data type
//'1984' === 1984 DOES NOT ===


// true == 'true'
// true !== 'true'

// const dayOfWeek = 'Saturday'

// if (dayOfWeek === 'Tuesday') {
//    console.log('it is tuesday')
// }
// else if (dayOfWeek === 'Saturday') {
//    console.log('it is saturday!')
// }
// else {
//    console.log('enter a different day')
// }


// if () {}
// else if () {}
// else {}


// const yourMoney = 99
// const catPrice = 100

// if (yourMoney === catPrice) {
//    console.log('You have just enough to buy a cat!')
// } else if (yourMoney > catPrice) {
//    console.log('You can buy a cat and will have dollars left over.')
// } else {
//    console.log('You cannot buy a cat.  You need more dollars :(')
// }

// if () {}
// else if () {}
// else if () {}
// ....and so on and so on with specified conditions
// else {}  <-- remainder of possiblities


// const dayOfWeek = 'Monday'

// if (dayOfWeek == 'Monday' || dayOfWeek == 'Wednesday') {
//    console.log (`It's ${dayOfWeek}, better get to class!`)
// } else if (dayOfWeek == 'Tuesday' || dayOfWeek == "Thursday" || dayOfWeek == "Friday") {
//    console.log(`Today is ${dayOfWeek}, no class tonight!`)
// } else if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
//    console.log('Its the weekend!!')
// } else {
//    console.log('Please enter another day!')
// }



//Ternary statements allow us to write If Else conditions in 1 single line  (ifTrue/ ifFalse)
//BUT they do not allow as much power as Else If's do

let ageInYears = 2

// ageInYears >= 18 ? console.log('you can vote') : console.log('you cant vot')



//Switch Statements

const food = 'fish'

// switch (food) {
//     case 'chicken':
//        console.log('Ill have the chicken')
//        break
//    case 'steak':
//        console.log('Ill have the steak, rare')
//        break
//    case 'fish':
//        console.log(`I'll have the fish`)
//        break
//    default:
//        console.log('please enter an entree')
// }


// ***** R U L E  O F  3 *********
// if () {}
// switch () {}
// for () {}


//********* L O O P S *********

//inside of our () we are putting in 3 sets of instructions
//where we begin, where we end, how much we are incrementing each time

//FOR LOOP

// for (let i = 0; i <10; i ++) {
//    console.log(i)
// }

// for (let i = 110; i >100; i-=3) {
//    console.log(i)
// }


//WHILE LOOP

// let i = 0;
// while (i<10) {
//        console.log(i);
//    i++
// }



const foods = ['tacos', 'ramen', 'doubles', 'ceviche', 'shakshua', 'fish and chips', 'birria', 'falafel']

for (let i = 0; i < food.length; i++) {
    console.log(`lets have ${foods[i]} for dinner tonight`)
}



const wizards = [
    {name: "Harry Potter", house: "Gryffindor"}, 
    {name: "Lord Voldomort", house: "Slytherin"}, 
    {name: "Cedric Diggory", house: "Hufflepuff"},
    {name: "Luna Lovegood", house: "Ravenclaw"},  
    {name: "Albus Dumbledor", house: "Gryffindor"}, 
    {name: "Merlin", house: "Slytherin"}, 
    {name: "Pomona Sprout", house: "Hufflepuff"}, 
    {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
    {name: "Ron Weasley", house: "Gryffindor"}, 
    {name: "Severus Snape", house: "Slytherin"}, 
    {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
    {name: "Padma Patil", house: "Ravenclaw"}, 
    {name: "Hermoine Granger", house: "Gryffindor"} 
   ]

//all wizards
for (let i=0; i < wizards.length; i++) {
    console.log(wizards[i].name)
}

// all wizards in "Slytherin"
   for (let i = 0; i < wizards.length; i++) {
    if (wizards[i].house === 'Slytherin') {
        console.log(wizards[i].name)
    }
}