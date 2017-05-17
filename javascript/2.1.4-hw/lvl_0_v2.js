var group = {
    student1_bal : Math.floor(Math.random()*100),
    student2_bal : Math.floor(Math.random()*100),
    student3_bal : Math.floor(Math.random()*100),
    student4_bal : Math.floor(Math.random()*100),
    student5_bal : Math.floor(Math.random()*100),
    student6_bal : Math.floor(Math.random()*100)
};

var minBal = 100;
var NameStudent = "";
for (var name in group) {

    var student = group[name];

    if (minBal > student) {
        minBal = student;
        NameStudent = name;
    }
}


console.log(`Самый низкий бал [${minBal}] у ${NameStudent}`);