var list = [
    {
        name: "bob",
        age: 25,
        sex: "male"
    },
    {
        name: "asda",
        age: 22,
        sex: "female"
    },
    {
        name: "asdasd",
        age: 25,
        sex: "female"
    }
];

var age_list = {
        age_22: [list[1]],
        age_25: [list[0], list[2]]
    },
    sex_list = {
        male: [list[0]],
        female: [list[1], list[2]]
    };

//age_list.age_25

var map = new GoogleAPIMap();
map.setCenter("", "")
map.addMarker("","");