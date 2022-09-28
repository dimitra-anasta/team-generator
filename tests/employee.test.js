const Employee = require("../lib/employee");

describe("employee", () => {
    describe("test all properties of employees", () => {
       const employee = new Employee ("Dimitra", 555, "dimitra.anasta524@gmail.com")
        test ("test name, id, email", () => {
            expect(employee.name).toEqual("Dimitra");
            expect(employee.id).toEqual(555);
            expect(employee.email).toEqual("dimitra.anasta524@gmail.com")
        })
    })
    describe("test all methods of employees", () => {
        const employee = new Employee ("Paul", 123, "fake@gmail.com")
        test ("test getName, getId, getEmail, getRole", () => {
            expect(employee.getName()).toEqual("Paul");
            expect(employee.getId()).toEqual(123);
            expect(employee.getEmail()).toEqual("fake@gmail.com");
            expect(employee.getRole()).toEqual("Employee");
        })
    })
})
