interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Karim",
    lastName: "Ibrahim",
    age: 30,
    location: "Cairo"
};

const student2: Student = {
    firstName: "Karim2",
    lastName: "Ibrahim2",
    age: 30,
    location: "Cairo"
};

const studentsList = [student1, student2];

studentsList.forEach(s => {
    console.log(s.firstName + " " + s.location);
});

const table = document.createElement("table");
studentsList.forEach(s => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    nameCell.textContent = s.firstName;
    locationCell.textContent = s.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.appendChild(table);
