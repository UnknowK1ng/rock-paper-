let Hand = 0
input.onButtonPressed(Button.A, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    Hand = randint(1, 3)
    if (Hand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Hand = randint(1, 3)
    if (Hand == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
