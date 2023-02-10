let Distance = 0
basic.showLeds(`
    # # . # #
    . . # . .
    # . # . #
    # # # # #
    # . . . #
    `)
basic.forever(function () {
    Distance = Tinybit.Ultrasonic_Car()
    if (Distance < 15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
        basic.pause(100)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 100)
        basic.pause(100)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    }
})
