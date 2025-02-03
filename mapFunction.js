// Array of student objects
const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 72 },
    { name: "Charlie", marks: 90 }
];

// Use map to create a new array with student grades
const studentGrades = students.map(student => {
    return {
        name: student.name,
        marks: student.marks,
        grade: student.marks >= 80 ? "A" : "B"
    };
});

// Print the new array
console.log(studentGrades);
