const Manager = require("../lib/manager");

describe("manager", () => {
    describe("test all properties of manager", () => {
        const manager = new Manager ("Tom", 678, "tom@aol.com", 5551112222)
        test("test name, id, email, office number", () => {
            expect(manager.officeNumber).toEqual(5551112222);
        })
    })
    describe("test methods of manager", () => {
        const manager = new Manager ("Tom", 678, "tom@aol.com", 5551112222)
        test ("test getRole", () =>{
            expect(manager.getRole()).toEqual("Manager")
            expect(manager.getOfficeNumbe()).toEqual(5551112222)
        })
    })
})