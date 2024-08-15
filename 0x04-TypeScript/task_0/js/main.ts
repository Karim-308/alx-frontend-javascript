
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
	}


const student2: Student = {
        firstName: "Karim2",
	lastName: "Ibrahim2",
	age: 30,
	location: "Cairo"
}


const studentsList = [student1, student2];

studentsList.forEach(s => {
    console.log(s.firstName + " " + s.location);
});
