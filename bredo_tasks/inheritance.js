function extend(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}

function Animal(){
}

Animal.prototype.legs = 4;

function Wolf(){

}

extend(Wolf, Animal);
Wolf.prototype.color = 'grey';

function Sibiryak(){

}

extend(Sibiryak, Wolf);
Sibiryak.prototype.location = 'Siberia';

var my = new Sibiryak();
console.log(my.legs);