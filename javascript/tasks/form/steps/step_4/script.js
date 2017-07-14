var containerAvatar = document.querySelector(".container-avatar");
var btnLoad = document.querySelector("input[type=file]");
var btnGen = document.querySelector(".generate button");

var urlAvatar = {
    male: [
        [
        "https://cdn.discourse.org/imgur/uploads/default/11233/9b1c208b01a74e09.png",
        "http://www.smart-tracker.ch/wp-content/uploads/2013/12/myAvatar.png",
        "https://mycred.me/wp-content/plugins/svg-avatars-generator/data/ready-avatars/svgA14507905300839352.png"
    ],
        [
        "https://usercontent2.hubstatic.com/10577727_f520.jpg",
        "http://studentview.com.au/wp-content/uploads/2016/06/myAvatar-6.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xNgzBHY6AsYS7MLjZihLdinbZNKIRJNQ2M6LNmKkQEwL-w9L"
    ],
        [
        "https://pickaface.net/assets/images/slides/slide2.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdVuDplWuPrUusMYyTr0-I2csWqNO05F9t9nn4oPYFVLwNRphKQ",
        "http://i.imgur.com/Yfbd3iA.png"
    ]
    ],
    female: [
        [
        "http://avatargenerator.ru/images/uploads/member-3[1].jpg",
        "https://cdn.discourse.org/imgur/uploads/default/11232/bfba5b38e8adf411.png",
        "http://wito.ma/witoadmin/pages/img/f72cd37a6582e4d88cbff9d4598dd64f.jpg"
    ],
        [
        "https://s-media-cache-ak0.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4.jpg",
        "https://s-media-cache-ak0.pinimg.com/originals/29/f7/23/29f723aedccfc520c34a0b038d7a3109.png",
        "http://www.casoviengleskogonline.com/images/klijenti/female_cartoon_avatar_by_ahninniah-d6fo72f.png"
    ],
        [
        "https://s-media-cache-ak0.pinimg.com/564x/9e/02/dc/9e02dcfae7c45c7d9302a379ea7c16db.jpg",
        "https://s-media-cache-ak0.pinimg.com/236x/2b/00/73/2b0073b79eedbf1c27c97b583dca8a40.jpg",
        "https://s-media-cache-ak0.pinimg.com/736x/a3/ff/c1/a3ffc1c11ec6043b940189d2b874887a.jpg"
    ]
    ]
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function setAvatar(nameUrl){
    document.querySelector(".container-avatar img").style.display = "none";
    containerAvatar.style.background = `url(${nameUrl}) no-repeat 50% 50%`;
    containerAvatar.style.backgroundSize = "contain";
}

var clickBtnGen = [
    function () {
        var form = document.querySelector(".gen-form");

        document.querySelector(".load").style.display = "none";
        btnLoad.style.display = "none";
        form.style.display = "block";
    },
    function generate() {
        var inputs = document.querySelectorAll(".gen-form input");


        if (inputs[0].checked) {
            if (inputs[2].checked) {
                setAvatar(urlAvatar.male[0][getRandom(0, 3)]);
            }
            if (inputs[3].checked) {
                setAvatar(urlAvatar.male[1][getRandom(0, 3)]);
            }
            if (inputs[4].checked) {
                setAvatar(urlAvatar.male[2][getRandom(0, 3)]);
            }
        } else if (inputs[1].checked) {
            if (inputs[2].checked) {
                setAvatar(urlAvatar.female[0][getRandom(0, 3)]);
            }
            if (inputs[3].checked) {
                setAvatar(urlAvatar.female[1][getRandom(0, 3)]);
            }
            if (inputs[4].checked) {
                setAvatar(urlAvatar.female[2][getRandom(0, 3)]);
            }
        }
    }
];

btnLoad.addEventListener("change", function () {
  if(this.files && this.files[0]){
    var reader = new FileReader();

    reader.onload = function (e) {
      document.querySelector(".container-avatar img").setAttribute("src", e.target.result);
    };

    reader.readAsDataURL(this.files[0]);
  }
});

btnGen.addEventListener("click", function () {
  if(clickBtnGen[0]) {
    clickBtnGen[0]();
  }
  if (clickBtnGen[1]) {
    clickBtnGen[1]();
  }
});