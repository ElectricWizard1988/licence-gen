function getUserInput() {
    let firstName = document.getElementById('FirstName').value;
    let lastName = document.getElementById('LastName').value;
    let dateOfBirth = document.getElementById('DatePicker').value;
    let gender = document.getElementById('Gender').value;

    let first = lastName.slice(0, 5);
    if (first.length < 5) {
        first = first.padEnd(5, '9');
    }
    let second = dateOfBirth.substr(2, 1);
    let third = dateOfBirth.substr(5, 2);
    if (gender === 'f') {
        third = parseInt(third, 10) + 50;
    }
    let fourth = dateOfBirth.substr(8, 2);
    let fith = dateOfBirth.substr(3, 1);
    let sixth = firstName.substr(0, 2);
    let seventh = '9';
    let eighthChar1 = lastName.substr(1, 1);
    let eighthChar2 = lastName.substr(0, 1);

    let generatedLicenceNumber = (first.toUpperCase() + second + third + fourth + fith + sixth.toUpperCase() +
        seventh + eighthChar1.toUpperCase() + eighthChar2.toUpperCase());

    if (firstName.length === 0 || lastName.length === 0 || dateOfBirth === "" || gender === "") {
        alert("Please make sure that you have entered a First Name, Last Name and DOB.");
        generatedLicenceNumber = "";
    } else {
        document.getElementById('OutputField').value = generatedLicenceNumber;
    }
}

function generateRandomDetails() {

    let firstNamesGendersArray = [
        {name: 'Alexander', gender: 'm'},
        {name: 'Andrew', gender: 'm'},
        {name: 'Angela', gender: 'f'},
        {name: 'Benjamin', gender: 'm'},
        {name: 'Beth', gender: 'f'},
        {name: 'Carl', gender: 'm'},
        {name: 'Clarissa', gender: 'f'},
        {name: 'Callum', gender: 'm'},
        {name: 'Demitri', gender: 'm'},
        {name: 'Dianne', gender: 'f'},
        {name: 'Evan', gender: 'm'},
        {name: 'Eugenie', gender: 'f'},
        {name: 'Frankie', gender: 'm'},
        {name: 'Florence', gender: 'f'},
        {name: 'Gary', gender: 'm'},
        {name: 'Gloria', gender: 'f'},
        {name: 'Henry', gender: 'm'},
        {name: 'Henrietta', gender: 'f'},
        {name: 'Ian', gender: 'm'},
        {name: 'Isabelle', gender: 'f'},
        {name: 'Jamie', gender: 'm'},
        {name: 'Jasmine', gender: 'f'},
        {name: 'Karl', gender: 'm'},
        {name: 'Karen', gender: 'f'},
        {name: 'Luke', gender: 'm'},
        {name: 'Lisa', gender: 'f'},
        {name: 'Marcus', gender: 'm'},
        {name: 'Maria', gender: 'f'},
        {name: 'Nigel', gender: 'm'},
        {name: 'Norma', gender: 'f'},
        {name: 'Oliver', gender: 'm'},
        {name: 'Olivia', gender: 'f'},
        {name: 'Peter', gender: 'm'},
        {name: 'Pauline', gender: 'f'},
        {name: 'Quentin', gender: 'm'},
        {name: 'Queenie', gender: 'f'},
        {name: 'Roger', gender: 'm'},
        {name: 'Rebecca', gender: 'f'},
        {name: 'Rowan', gender: 'm'},
        {name: 'Stephen', gender: 'm'},
        {name: 'Samantha', gender: 'f'},
        {name: 'Thomas', gender: 'm'},
        {name: 'Toni', gender: 'f'},
        {name: 'Uriah', gender: 'm'},
        {name: 'Ursula', gender: 'f'},
        {name: 'Victor', gender: 'm'},
        {name: 'Victoria', gender: 'f'},
        {name: 'William', gender: 'm'},
        {name: 'Wendy', gender: 'f'},
        {name: 'Xander', gender: 'm'},
        {name: 'Xena', gender: 'f'},
        {name: 'Yannick', gender: 'm'},
        {name: 'Yvonne', gender: 'f'},
        {name: 'Zachary', gender: 'm'},
        {name: 'Zoe', gender: 'f'},
    ];
    let firstNameRand = firstNamesGendersArray[Math.floor(Math.random() * firstNamesGendersArray.length)];
    document.getElementById('FirstName').value = firstNameRand.name;
    document.getElementById('Gender').value = firstNameRand.gender;

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