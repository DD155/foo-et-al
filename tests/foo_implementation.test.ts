const Foo = require("../src/FooEtAl")
const fooEtAl = new Foo.FooEtAl()

describe("Tests the calculate method of FooEtAl to return the correct volume with", () => {
    test('radius of 6', () => {
        //const foo = new Foo.FooEtAl()
        const volume = Number(fooEtAl.calculate(6).toFixed(6))
        expect(volume).toBe(904.778684)
    })

    test("radius of -2", () => {
        const volume = fooEtAl.calculate(-2)
        expect(volume).toBe(NaN)
    })
})

