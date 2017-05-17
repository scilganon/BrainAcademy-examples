var subject_queue = [
    "Math",
    "Biology",
    "Chemistry"
];

var min_mark = 4.5;

function askStudentName(){
    do{
        var name = prompt("student's name");
    }while(!(!!name)); //!!!name => !name

    return name;
}

function askStudentMark(tmp){


    return prompt(tmp);
}

function askDataForStudent(){

    var name = askStudentName();

    var total_mark = 0;
    var marks = [];
    for (var j = 0; j < subject_queue.length; j++) {
        var subject_name = subject_queue[j];
        var tip_1 = "subject mark: " + subject_name;
        var mark = askStudentMark(tip_1);

        marks.push(mark);
        total_mark += +mark;
    }

    var avg_mark = total_mark / subject_queue.length;

    return {
        name: name,
        list: marks,
        avg: avg_mark
    };
}

function printDataForStudent(student){
    document.writeln(`<h2>${student.name}</h2>`);
    document.writeln("<ul>");
    student.list.forEach(function(mark, i){
        var subject_name = subject_queue[i];
        document.writeln(`<li>${subject_name} - ${mark}</li>`);
    });
    document.writeln(`<li style="color: ${student.avg >= min_mark ? 'green' : 'red'}">${student.avg.toFixed(2)}</li>`);
    document.writeln("</ul>");
}

function fillJournalWithAvg() {
    var people_c = +prompt("count of students");

    for (var i = 0; i < people_c; i++) {
        var student = askDataForStudent();
        printDataForStudent(student);
    }
}

fillJournalWithAvg();
