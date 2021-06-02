namespace SpriteKind {
    export const speech = SpriteKind.create()
    export const test = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = true
    facingLeft = false
    facingRight = false
    facingDown = false
})
function damageTaken () {
    healthBar.value += -1
    Character.setPosition(Character.x, Character.x - 8)
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile22`, function (sprite, location) {
    testAttack.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    Character.destroy()
    demon.destroy()
    levelOne()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = false
    facingLeft = true
    facingRight = false
    facingDown = false
})
function levelOne () {
    tiles.setTilemap(tilemap`level2`)
    Character = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . . e e d e . . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . d 7 8 7 7 d . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . 7 . . 7 . . . . . . 
        . . . . . . 7 . . 7 . . . . . . 
        . . . . . f f . . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Character.setStayInScreen(true)
    Character.setPosition(96, 86)
    for (let index = 0; index < 1; index++) {
        scene.centerCameraAt(96, 92)
    }
}
function startIsOver () {
    started = 1
}
function rangeAttack () {
    timer.throttle("action", 500, function () {
        if (facingUp == true) {
            testAttack = sprites.create(img`
                . . . . . . . . 
                . . . . . . . . 
                . . . . 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . f . 2 4 . f . 
                . f f f f f f . 
                . . . f f . . . 
                . . . f f . . . 
                . . . f f . . . 
                . . . . . . . . 
                `, SpriteKind.Projectile)
            testAttack.setStayInScreen(false)
            testAttack.setFlag(SpriteFlag.AutoDestroy, true)
            testAttack.setPosition(Character.x - 8, Character.y - 8)
            animation.runImageAnimation(
            testAttack,
            assets.animation`fireball`,
            75,
            false
            )
            pause(700)
            testAttack.destroy()
        }
        if (facingDown == true) {
            testAttack = sprites.create(img`
                . . . 2 2 2 . . 
                . . 2 4 4 4 2 . 
                . . 2 4 5 4 2 . 
                . . 2 4 5 4 2 . 
                . . . 2 4 2 . . 
                . . . 2 4 2 . . 
                . . . . 2 4 2 . 
                . . . . . 2 2 . 
                `, SpriteKind.Projectile)
            testAttack.setStayInScreen(false)
            testAttack.setFlag(SpriteFlag.AutoDestroy, true)
            testAttack.setPosition(Character.x, Character.y)
            animation.runImageAnimation(
            testAttack,
            assets.animation`fireball`,
            50,
            false
            )
        }
        if (facingRight == true) {
            testAttack = sprites.create(img`
                . . . 2 2 2 . . 
                . . 2 4 4 4 2 . 
                . . 2 4 5 4 2 . 
                . . 2 4 5 4 2 . 
                . . . 2 4 2 . . 
                . . . 2 4 2 . . 
                . . . . 2 4 2 . 
                . . . . . 2 2 . 
                `, SpriteKind.Projectile)
            testAttack.setStayInScreen(false)
            testAttack.setFlag(SpriteFlag.AutoDestroy, true)
            testAttack.setPosition(Character.x, Character.y)
            animation.runImageAnimation(
            testAttack,
            assets.animation`fireball`,
            50,
            false
            )
        }
        if (facingLeft == true) {
            testAttack = sprites.create(img`
                . . . 2 2 2 . . 
                . . 2 4 4 4 2 . 
                . . 2 4 5 4 2 . 
                . . 2 4 5 4 2 . 
                . . . 2 4 2 . . 
                . . . 2 4 2 . . 
                . . . . 2 4 2 . 
                . . . . . 2 2 . 
                `, SpriteKind.Projectile)
            testAttack.setStayInScreen(false)
            testAttack.setFlag(SpriteFlag.AutoDestroy, true)
            testAttack.setPosition(Character.x, Character.y)
            animation.runImageAnimation(
            testAttack,
            assets.animation`fireball`,
            50,
            false
            )
        }
        pause(100)
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    levelTwo()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = false
    facingLeft = false
    facingRight = true
    facingDown = false
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = false
    facingLeft = false
    facingRight = false
    facingDown = true
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    testAttack.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile15`, function (sprite, location) {
    testAttack.destroy()
})
function levelTwo () {
    Character.setPosition(150, 86)
    demon = sprites.create(img`
        f . . . . . . . . . . f . . . . 
        f f . . . . . . . . f f . . . . 
        f f f . . . . . . f f f . . . . 
        . f f f . . . . f f f . . . . . 
        . . f f f 2 2 f f f . . . . . . 
        . . 2 f f 2 2 f f 2 . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 . . . . . 
        . 2 2 2 f 2 2 f 2 2 2 . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 . . . . . 
        . 2 2 2 f f f f 2 2 2 . . . . . 
        . . 2 f 2 2 2 2 f 2 . . . . . . 
        f . . . . f f . . . . f . . . . 
        . f f f f f f f f f f . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f . . f . . . . . . . . 
        . . . . f . . f . . . . . . . . 
        `, SpriteKind.Enemy)
    for (let index = 0; index < 1; index++) {
        scene.centerCameraAt(96, 92)
    }
    tiles.setTilemap(tilemap`level3`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    damageTaken()
})
let demon: Sprite = null
let testAttack: Sprite = null
let Character: Sprite = null
let healthBar: StatusBarSprite = null
let facingDown = false
let facingRight = false
let facingLeft = false
let facingUp = false
let started = 0
tiles.setTilemap(tilemap`level1`)
started = 0
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let textSprite: Sprite = textsprite.create("Press B to start")
textSprite.setPosition(75, 90)
forever(function () {
    if (controller.B.isPressed() && started == 0) {
        levelOne()
        startIsOver()
        textSprite.destroy()
        healthBar = statusbars.create(15, 3, StatusBarKind.Health)
        healthBar.attachToSprite(Character)
    } else if (controller.B.isPressed() && started == 1) {
        rangeAttack()
    }
    controller.moveSprite(Character, 100, 100)
    if (facingUp == true) {
        animation.runImageAnimation(
        Character,
        assets.animation`Character_Idle`,
        500,
        true
        )
    }
    if (facingDown == true) {
        animation.runImageAnimation(
        Character,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e d e . . . . . . 
            . . . . . . f d d f . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . d 7 8 7 7 d . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . 7 . . 7 . . . . . . 
            . . . . . . 7 . . 7 . . . . . . 
            . . . . . f f . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e d e . . . . . . 
            . . . . . . f d d f . . . . . . 
            . . . . . 8 d d d d 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . d 8 8 8 8 d . . . . . 
            . . . . . . 7 8 7 7 . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . 7 . . 7 . . . . . . 
            . . . . . f f . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
    if (facingLeft == true) {
        animation.runImageAnimation(
        Character,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . f d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . f d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
    if (facingRight == true) {
        animation.runImageAnimation(
        Character,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . d d d f . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . d d d f . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
})
