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
    if (input.acceleration(Dimension.X) >= 500) {
        yo.change(LedSpriteProperty.X, 1)
        radio.sendValue("posx", yo.get(LedSpriteProperty.X))
    } else if (input.acceleration(Dimension.X) < -500) {
        yo.change(LedSpriteProperty.X, -1)
        radio.sendValue("posx", yo.get(LedSpriteProperty.X))
    } else if (input.acceleration(Dimension.Y) < -500) {
        yo.change(LedSpriteProperty.Y, -1)
        radio.sendValue("posy", yo.get(LedSpriteProperty.Y))
    } else if (input.acceleration(Dimension.Y) >= 500) {
        yo.change(LedSpriteProperty.Y, -1)
        radio.sendValue("posy", yo.get(LedSpriteProperty.Y))
    }
})
