let ball = document.querySelector('.ball');
let x = 0;
let y = 0;

document.querySelector('.t-btn').addEventListener('click', e => {
    y += 10;
    ball.style.bottom = `${y}px`
});

document.querySelector('.l-btn').addEventListener('click', e => {
    x -= 10;
    ball.style.left = `${x}px`
});

document.querySelector('.r-btn').addEventListener('click', e => {
    x += 10;
    ball.style.left = `${x}px`
});

document.querySelector('.b-btn').addEventListener('click', e => {
    y -= 10;
    ball.style.bottom = `${y}px`
});

// ------------------------Event for Arrow keys---------------------->
document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
        y += 10;
        ball.style.bottom=`${y}px`;
        // element.style.margin = `0 0 ${x}px 0`
    } else if (event.code === "ArrowDown") {
        // code to handle arrow down key
        y -= 10;
        ball.style.bottom = `${y}px`
    } else if (event.code === "ArrowLeft") {
        // code to handle arrow left key
        x -= 10;
        ball.style.left = `${x}px`
    } else if (event.code === "ArrowRight") {
        // code to handle arrow right key
        x+= 10;
        ball.style.left = `${x}px`
    }
});