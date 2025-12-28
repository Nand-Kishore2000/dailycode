"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
const ans = isLegal({ firstName: "Nandkishore", lastName: "chhimpa", age: 11, email: "email" });
ans ? console.log("TRUE") : console.log("FALSE");
//# sourceMappingURL=user.js.map