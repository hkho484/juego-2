radio.onReceivedValue(function (name, value) {
    if (name == "posx") {
        otro.change(LedSpriteProperty.X, value)
    } else if (name == "posy") {
        otro.change(LedSpriteProperty.Y, value)
    }
})
let otro: game.LedSprite = null
basic.clearScreen()
radio.setGroup(1)
let yo = game.createSprite(2, 2)
otro = game.createSprite(4, 4)
let tiempo = 500
basic.forever(function () {
	
})
