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