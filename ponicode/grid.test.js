const rewire = require("rewire")
const grid = rewire("../grid")
const changeColor = grid.__get__("changeColor")
// @ponicode
describe("changeColor", () => {
    test("0", () => {
        document.body.insertAdjacentHTML("afterbegin", `<div id="wrapper0"><div>
        	<div class="square"></div>
        </div>
        </div>`)
        let result = changeColor()
        expect(result).toMatchSnapshot()
        expect(document.getElementById("wrapper0")).to.matchSnapshot()
        document.body.removeChild(document.getElementById("wrapper0"))
    })
})
