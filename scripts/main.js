function getUserInput() {
    let firstName = document.getElementById('FirstName').value.toUpperCase();
    let lastName = document.getElementById('LastName').value.toUpperCase();
    let dateOfBirth = document.getElementById('DatePicker').value;

    let first = lastName.slice(0, 3) == 'MAC' ? 'MC'.concat(lastName.slice(3,6)) : lastName.slice(0, 5);
    if (first.length < 5) {
        first = first.padEnd(5, '9');
    }
    let second = dateOfBirth.substr(2, 1);
    let third = dateOfBirth.substr(5, 2);
    let fourth = dateOfBirth.substr(8, 2);
    let fith = dateOfBirth.substr(3, 1);
    let sixth = firstName.substr(0, 2);
    let seventh = '9';
    let eighthChar1 = lastName.substr(1, 1);
    let eighthChar2 = lastName.substr(0, 1);

    let generatedLicenceNumber = (first.toUpperCase() + second + third + fourth + fith + sixth.toUpperCase() +
        seventh + eighthChar1.toUpperCase() + eighthChar2.toUpperCase());

    if (firstName.length === 0 || lastName.length === 0 || dateOfBirth === "") {
        alert("Please make sure that you have entered a First Name, Last Name and DOB.");
        generatedLicenceNumber = "";
    } else {
        document.getElementById('OutputField').value = generatedLicenceNumber;
    }
}

function generateRandomDetails() {

    let firstNamesArray = ["Alexander", "Andrew", "Angela", "Benjamin", "Beth", "Carl", "Clarissa", "Callum", "Demitri", "Dianne", "Evan", "Eugine", "Frankie",
        "Florence", "Gary", "Gloria", "Henry", "Henrietta", "Ian", "Isabelle", "Jamie", "Jasmine", "Karl", "Karen", "Luke", "Lisa", "Marcus",
        "Maria", "Nigel", "Norma", "Oliver", "Olivia", "Peter", "Pauline", "Quentin", "Queenie", "Roger", "Rebecca", "Rowan", "Stephen", "Samantha", "Thomas",
        "Toni", "Uriah", "Ursula", "Victor", "Victoria", "William", "Wendy", "Xander", "Xena", "Yannick", "Yvonne", "Zachary", "Zoe",
    ];
    let firstNameRand = firstNamesArray[Math.floor(Math.random() * firstNamesArray.length)];
    document.getElementById('FirstName').value = firstNameRand;

    let lastNamesArray = ["Hill", "Smith", "Jones", "Ballantyne", "Taylor", "Rogers", "Rowley", "Chetwynd", "Steer", "Walker", "Embury", "Dorian", "Tate",
        "Richter", "Arnalds", "Garland", "Owen", "Croft", "Auditore", "Bell", "Bonair", "Messenger", "Nobakov", "Orwell", "LaVey", "Manson",
        "Fish", "Kurten", "Jackson", "Ford", "King", "Potter", "Palin",
    ];
    let lastNameRand = lastNamesArray[Math.floor(Math.random() * lastNamesArray.length)];
    document.getElementById("LastName").value = lastNameRand;

    let yearRand = Math.floor(Math.random() * (2003 - 1945 + 1)) + 1945;
    let yearStr = yearRand.toString();

    let monthRand = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    let monthStr = monthRand.toString();
    monthStr = monthStr.padStart(2, '0');

    let dayRand = Math.floor(Math.random() * (28 - 1 + 1)) + 1;
    let dayStr = dayRand.toString();
    dayStr = dayStr.padStart(2, '0');

    dateOfBirthRand = (yearStr + "-" + monthStr + "-" + dayStr);

    document.getElementById('DatePicker').value = dateOfBirthRand;
}