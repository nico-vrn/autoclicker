// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");
"use strict";

const { screen, mouse, centerOf, straightTo } = require("@nut-tree/nut-js");

describe("Basic mouse test", () => {
    it("should move the mouse in square shape", async () => {
        jest.setTimeout(10000);
        screen.config.resourceDirectory = "../../e2e/assets";

        await mouse.move(straightTo(centerOf(screen.find("mouse.png"))));
    });
});
