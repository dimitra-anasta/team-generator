const Engineer = require("../lib/engineer");

describe("engineer", () =>  {
    describe("test all properties of engineers", () => {
        const engineer = new Engineer ("Dimitra", 555, "dimitra.anasta524@gmail.com", "dimitra-anasta")
        test ("test engineer", () => {
            expect(engineer.github).toEqual("dimitra-anasta");
        })
    })
    describe("test methods of engineers", () => {
        const engineer= new Engineer ("Paul,", 123, "fake@gmail.com", "paulgit")
        test ("test getGithub", () => {
            expect(engineer.getGithub()).toEqual("paulgit");
            expect(engineer.getRole()).toEqual("Engineer");
        })
    })
})