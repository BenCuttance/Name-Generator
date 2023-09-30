
const generateBtn = document.getElementById("generateBtn")
const newNameP = document.getElementById("newNameP")

firstNames = [
    "Ben",
    "Jason",
    "Jess",
    "Rory",
    "Angus",
    "Jayden",
    "Bailey",

]

prefix = ["the, "]

lastNames = [
    "Godly",
    "Small",
    "Huge",
    "Cowardly",
    "Strong",
    "Weak",
]



generateBtn.addEventListener("click", generateName = () =>{
    // console.log("You clicked the button!")
    const randomFirstName = [Math.floor(Math.random() * firstNames.length)];
    const randomLastName = [Math.floor(Math.random() * lastNames.length)];
    // console.log(randomFirstName, firstNames[randomFirstName], " the", randomLastName, lastNames[randomLastName])

    const newFirstName = (randomFirstName, firstNames[randomFirstName])
    const newLastName = (randomLastName, lastNames[randomLastName])

    const fullName = JSON.stringify(newFirstName + " " + 'the' + " " + newLastName)

    console.log(fullName)

    const updatedName = (fullName.replace(/['"]+/g, ''));

    // console.log(newFirstName, 'the', newLastName)

    const node = document.createElement("li");
    const nameLi = document.createTextNode(updatedName) 

    node.appendChild(nameLi);
    document.getElementById("nameList").appendChild(node)


    


})