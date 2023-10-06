
const generateBtn = document.getElementById("generateBtn")
const newNameP = document.getElementById("newNameP")

firstNames = [
    "Kaelorin",
    "Jason",
    "Merric",
    "Eldric",
    "Seraphina",
    "Isolde",
    "Elowen",

]

prefix = ["the, "]

lastNames = [
    { suffix: "Godly", description: "In the eyes of mortals, their godly presence radiated with boundless wisdom, unwavering compassion, and an aura of awe-inspiring power that could reshape the very fabric of existence itself." },
    { suffix: "Small", description: "Dubbed small to emphasize their lack of ambition, timid demeanor, and a tendency to shrink from challenges" },
    { suffix: "Huge", description: "Their towering stature earned them the nickname Huge, a testament to thier impressive physical presence, strong build, and commanding presence in any room." },
    { suffix: "Cowardly", description: "is Cowardly" },
    { suffix: "Strong", description: "Is strong" },
    { suffix: "Weak", description: "is Weak" },
]

occupation = [
    { title: "", description: "" },
    { title: "", description: "" },
    { title: "", description: "" },
    { title: "", description: "" },
]

background = [
    { race: "", origin: "" }
]




generateBtn.addEventListener("click", generateName = () => {


    const randomLastName = (lastNames) => {
        const keys = Object.keys(lastNames);
        if (keys.length > 0) {
            const index = Math.floor(keys.length * Math.random());
            const key = keys[index];
            const value = lastNames[key];

            return { index, key, value }
        }
    }

    const surname = randomLastName(lastNames);

    const newLastName = (surname.value.suffix)

    const descriptionText = (surname.value.description)

    document.getElementById('showCase').style.display = 'block'
    document.getElementById('description').innerHTML = descriptionText

    const validateForm = () => {
        var userInput = document.forms['myForm']['customName'].value;
        if (userInput == "" || userInput == null ){
            console.log('Input value == null ')
             console.log("hi")
        // console.log("You clicked the button!")
        const randomFirstName = [Math.floor(Math.random() * firstNames.length)];

        const newFirstName = (randomFirstName, firstNames[randomFirstName])
        // const newLastName = (surname.value.suffix)
        // console.log(surname.value.description)

        const fullName = JSON.stringify(newFirstName + " " + 'the' + " " + newLastName)

        // console.log(fullName)
       
        const updatedName = (fullName.replace(/['"]+/g, ''));

        document.getElementById('showCase').style.display = 'block'

        document.getElementById('newName').innerHTML = updatedName
        

        // ================ Append new title to page ===================// 
        //    const node = document.createElement("li");                //
        //    const nameLi = document.createTextNode(updatedName)       //  
        //                                                              //
        //   node.appendChild(nameLi);                                  //
        //    document.getElementById("nameList").appendChild(node)     //
        //==============================================================//
            
        } else {const customInput = document.getElementById('customInput').value;

        

        console.log(customInput)

        console.log(newLastName)
       
        const fullName = JSON.stringify(customInput + " " + 'the' + " " + newLastName)

        console.log(fullName)

        document.getElementById('newName').innerHTML = fullName}
    }


    validateForm()
})