// const grid = document.querySelector('.grid')
// const message = document.querySelector('.message')
// const scoreDisplay = document.querySelector('.score')
// const startBtn = document.querySelector('.start-btn')
// const pauseBtn = document.querySelector('.pause-btn')

// let squares = []
// let currentSnake = [2, 1, 0]
// let direction = 1
// const width = 20
// let appleIndex = 0
// let score = 0.9
// let intervalTime = 500
// let timerId = 0


// // first lets create the grid system whic is necessary for the game to run
// function createGrid() {
//     for (let i = 0; i < width * width; i++) {
//         const square = document.createElement('div')
//         square.classList.add('square')
//         grid.appendChild(square)
//         squares.push(square)
//     }
// }
// createGrid()

// // now lets create aur initial snake and an apple
// currentSnake.forEach(index => squares[index].classList.add('snake'))
// generateApple()


// // a function for generating apples
// function generateApple() {
//     do {
//         appleIndex = Math.floor(Math.random() * squares.length - 1)
//     } while (squares[appleIndex].classList.contains('snake'))
//     squares[appleIndex].classList.add('apple')
// }

// function startGame() {
//     startBtn.textContent = "Restart"
//     currentSnake.forEach(index => squares[index].classList.remove('snake'))
//         //remove the apple
//     squares[appleIndex].classList.remove('apple')
//     clearInterval(timerId)
//     currentSnake = [2, 1, 0]
//     score = 0
//         //re add new score to browser
//     scoreDisplay.textContent = score
//     direction = 1
//     intervalTime = 500
//     generateApple()
//         //readd the class of snake to our new currentSnake
//     currentSnake.forEach(index => squares[index].classList.add('snake'))
//     timerId = setInterval(move, intervalTime)
// }

// // function for moving our snake and complete game logic
// function move() {
//     // logic of game over
//     if (
//         //if sanke has hit the bottom wall
//         (currentSnake[0] + width >= width * width && direction === width) ||
//         //if sanke has hit the right wall
//         (currentSnake[0] % width === width - 1 && direction === 1) ||
//         //if sanke has hit the left wall
//         (currentSnake[0] % width === 0 && direction === -1) ||
//         //if sanke has hit the top wall
//         (currentSnake[0] - width <= 0 && direction === -width) ||
//         // if snake hits itself
//         (squares[currentSnake[0] + direction].classList.contains('snake'))
//     ) {
//         message.textContent = "Game Over"
//         console.log("timer stops")
//         return (clearInterval(timerId))
//     }

//     // logic of moving snake forwards
//     const tail = currentSnake.pop()
//     squares[tail].classList.remove('snake')
//     squares[currentSnake[0]].classList.remove('head')
//     currentSnake.unshift(currentSnake[0] + direction)
//     squares[currentSnake[0]].classList.add('snake')
//     squares[currentSnake[0]].classList.add('head')




//     // logic of eating apples and increasing snake length

//     if (squares[currentSnake[0]].classList.contains('apple')) {
//         //remove the class of apple
//         squares[currentSnake[0]].classList.remove('apple')
//             //grow our snake by adding class of snake to it
//         squares[tail].classList.add('snake')
//             //grow our snake array
//         currentSnake.push(tail)

//         //generate new apple
//         generateApple()
//             //add one to the score
//         score += 1
//             //display our score
//         scoreDisplay.textContent = score
//             //speed up our snake
//         intervalTime = intervalTime - 0.1
//         timerId = setInterval(move, intervalTime)
//         console.log(intervalTime)

//     }
// }

// // function for controling the snake using arrow keys
// function control(e) {
//     if (e.keyCode === 39) {
//         direction = 1
//     } else if (e.keyCode === 37) {
//         direction = -1
//     } else if (e.keyCode === 38) {
//         direction = -width
//     } else if (e.keyCode === 40) {
//         direction = width
//     }
// }

// // let state = true

// // function pauseGame() {
// //     if (state === true) {
// //         console.log('game paused')
// //         pauseBtn.textContent = "Resume"
// //         state = false
// //         return (clearInterval(timerId))
// //     } else {
// //         console.log("game resume")
// //         pauseBtn.textContent = "Pause"
// //         timerId = setInterval(move, intervalTime)
// //         state = true
// //     }r

// // }


// document.addEventListener('keydown', control)
// startBtn.addEventListener('click', startGame)
//     // pauseBtn.addEventListener('click', pauseGame)


const grid = document.querySelector('.grid')
const message = document.querySelector('.message')
const startButton = document.querySelector('.start-btn')
const pauseButton = document.querySelector('.pause-btn')
const scoreDisplay = document.querySelector('.score')
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1
const width = 20
let appleIndex = 0
let score = 0
let intervalTime = 500
let speed = 0.98
let timerId = 0

function createGrid() {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        square.innerHtml = `${i}`
        squares.push(square)
    }
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))
squares[currentSnake[0]].classList.add('head')

function startGame() {
    startButton.textContent = "Restart"
    grid.style.borderColor = "white"
    message.textContent = "I'm Feeling Hungry!"
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    squares[currentSnake[0]].classList.remove('head')
    clearInterval(timerId)
    currentSnake = [2, 1, 0]
    score = 0
    scoreDisplay.textContent = score
    direction = 1
    intervalTime = 500
    generateApple()
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    timerId = setInterval(move, intervalTime)

}

function move() {
    console.log(currentSnake)
    console.log(currentSnake[0] + direction)
        // logic for game over
    if (
        (currentSnake[0] + width >= width * width && direction === width) || //if snake has hit bottom
        (currentSnake[0] % width === width - 1 && direction === 1) || //if snake has hit right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
        (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
        squares[currentSnake[0] + direction].classList.contains('snake')
    ) {
        message.textContent = "Game Over"
        console.log('gameover')
        grid.style.borderColor = "red"
        return clearInterval(timerId)
    }


    //logic for moving snake forward
    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    squares[currentSnake[0]].classList.remove('head')
    currentSnake.unshift(currentSnake[0] + direction)
    squares[currentSnake[0]].classList.add('head')

    //logic for eating apple
    if (squares[currentSnake[0]].classList.contains('apple')) {
        squares[currentSnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        currentSnake.push(tail)
        generateApple()
        score++
        scoreDisplay.textContent = score
            // logic for increaing speed of snake
        clearInterval(timerId)
        intervalTime = intervalTime * speed
        timerId = setInterval(move, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')
}

// function for generating new apple
function generateApple() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}

// function for controling the movement of our snake
function control(e) {
    if (e.key === 'ArrowRight' || e.key === 'd') {
        direction = 1
    } else if (e.key === 'ArrowUp' || e.key === 'w') {
        direction = -width
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        direction = -1
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        direction = +width
    }

}

let state = true

function pauseGame() {
    if (state === true) {
        console.log('game paused')
        pauseButton.textContent = "Resume"
        state = false
        return (clearInterval(timerId))
    } else {
        console.log("game resume")
        pauseButton.textContent = "Pause"
        timerId = setInterval(move, intervalTime)
        state = true
    }
}
document.addEventListener('keyup', control)
startButton.addEventListener('click', startGame)
pauseButton.addEventListener('click', pauseGame)

// touch compatability

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
        if (xDiff > 0) {
            direction = -1
        } else {
            /* right swipe */
            direction = 1
        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
            direction = -width
        } else {
            /* down swipe */
            direction = width
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};