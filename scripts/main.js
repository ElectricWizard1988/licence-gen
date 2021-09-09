function getUserInput() {
    let firstName = document.getElementById('FirstName').value.toUpperCase();
    let lastName = document.getElementById('LastName').value.toUpperCase();
    let dateOfBirth = document.getElementById('DatePicker').value;
    let gender = document.getElementById('Gender').value;

    //1–5: The first five characters of the surname (padded with 9s if fewer than 5 characters). For surnames beginning with "MAC", they are treated as "MC" for all.
    let surnameFirstFive = lastName.slice(0, 3) == 'MAC' ? 'MC'.concat(lastName.slice(3,6)) : lastName.slice(0, 5);
    if (surnameFirstFive.length < 5) {
        surnameFirstFive = surnameFirstFive.padEnd(5, '9');
    }
    
    //6: The decade digit from the year of birth (e.g. for 1987 it would be 8)
    let birthDecade = dateOfBirth.substr(2, 1);
    
    //7–8: The month of birth in two digit format (7th character is incremented by 5 if the driver is female i.e. 51–62 instead of 01–12)
    let birthMonth = dateOfBirth.substr(5, 2);
    if (gender === 'f') {
        birthMonth = parseInt(birthMonth, 10) + 50;
    }
    
    //9–10: The date within the month of birth in two digit format (i.e. 01-31)
    let birthDay = dateOfBirth.substr(8, 2);
    
    //11: The year digit from the year of birth (e.g. for 1987 it would be 7)
    let birthYearDigit = dateOfBirth.substr(3, 1);
    
    //12–13: The first two initials of the first names, padded with a 9 if no middle name
    let givenNames = firstName.split(" ");
    let firstGivenNameInitial = givenNames[0].substr(0, 1);
    let secondGivenNameInitial = givenNames.length >= 2 ? givenNames[1].substr(0, 1) : '9';
    
    //14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common
    let arbitrary = '9';
    
    //15–16: Two computer check digits.
    let checkDigits = 'XX'; //TODO generate check digits

    //17–18: Two digits representing the licence issue, which increases by 1 for each licence issued.
    let issue = '01';
    
    let generatedLicenceNumber = (surnameFirstFive.toUpperCase() + birthDecade + birthMonth + birthDay + birthYearDigit + 
                                  firstGivenNameInitial.toUpperCase() + secondGivenNameInitial.toUpperCase() +
                                  arbitrary + checkDigits + ' ' + issue);

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
