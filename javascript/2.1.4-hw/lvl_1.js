var group = [
    {
        name: "ALexey",
        listMarks: [5, 5, 5, 5, 5, 800]
    },
    {
        name: "Alina",
        listMarks: [5, 5, 5, 5, 5, 600]
    }
];

function formatMsgByStudent(student) {
    return "Самый высокий бал : " + student.avg + " , у студента : " + student.name;
}

var bestStudent = group
    .map(function (student) {
        student.avg = student.listMarks.reduce(function (prev, current) {
                return prev + current;
            }) / student.listMarks.length;

        return student;
    })
    .reduce(function (prev, current) {
        return (prev.avg > current.avg) ? prev : current;
    });

console.log(formatMsgByStudent(bestStudent));


//------


var array = [1, 2, 3];

array
    .map(function (number) {
        return Math.pow(number, 2);
    })
    .reduce(Math.max)
    .toFixed(2);