input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 100)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -100)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 300)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
