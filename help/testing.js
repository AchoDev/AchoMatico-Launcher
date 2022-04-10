var num = 10;
var nam = "HELLO";
var user1 = {
    name: "acho",
    id: 10
};
var User = /** @class */ (function () {
    function User(name, id) {
        this.name = name;
        this.id = id;
    }
    return User;
}());
var user2 = new User("hey", 10);
var bool = true;
var state = "sitting";
function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj == "string") {
        return [obj];
    }
    else {
        return obj;
    }
}
var type = Backpack.getType();
bp.addObject(10);
// const error = Backpack.addObject(10)
// TYPESCRIPT 
//# sourceMappingURL=testing.js.map