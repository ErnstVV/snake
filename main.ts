input.onButtonPressed(Button.A, function () {
    direction += 90
    if (direction == 360) {
        direction = 0
    }
})
input.onButtonPressed(Button.B, function () {
    direction += -90
    if (direction == 0) {
        direction = 360
    }
})
let direction = 0
let x = 2
let y = 2
let snake = game.createSprite(x, y)
direction = 90
game.setLife(5)
game.setScore(0)
let fruitX = randint(0, 4)
let fruitY = randint(0, 4)
let fruit = game.createSprite(fruitX, fruitY)
let delay = 1000
basic.forever(function () {
    if (direction == 90) {
        x += 1
    } else if (direction == 270) {
        x += -1
    } else if (direction == 180) {
        y += 1
    } else {
        y += -1
    }
    if (x > 4 || y > 4 || (x < 0 || y < 0)) {
        game.removeLife(1)
        x = 2
        y = 2
        delay += 1000
    }
    snake.set(LedSpriteProperty.X, x)
    snake.set(LedSpriteProperty.Y, y)
    if (snake.isTouching(fruit)) {
        game.addScore(1)
        fruitY = randint(0, 4)
        fruitX = randint(0, 4)
        fruit.set(LedSpriteProperty.X, fruitX)
        fruit.set(LedSpriteProperty.X, fruitY)
        delay += -50
    }
    basic.pause(delay)
})
