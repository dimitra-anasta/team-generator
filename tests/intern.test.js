const Intern = require("../lib/intern");

describe("intern", () => {
    describe("test all properties of intern", () => {
        const intern = new Intern ("Sam", 444, "sam@gmail.com", "OSU")
        test ("test school", () => {
            expect(intern.school).toEqual("OSU")
        })
    })
    describe("test all methods of interns", () => {
        const intern = new Intern ("Paul", 123, "fake@gmail.com", "OSU")
        test ("test getName, getId, getEmail, getSchool, getRole", () => {
            expect(intern.getSchool()).toEqual("OSU");
            expect(intern.getRole()).toEqual("Intern");
        })
    })
})  