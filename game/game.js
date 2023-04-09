const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let balls = [];
let isGameOver = false;
let redBallsRemaining = 0;

// clase Ball para crear bolas de cualquier color
class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.vx = 0;
    this.vy = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
// clase BlueBall para crear bolas azules que se mueven hacia arriba
class BlueBall extends Ball {
  constructor(x, y, radius) {
    super(x, y, radius, "blue");
    this.vy = -3; // velocidad vertical hacia arriba
  }
}

// crear un array de bolas azules
let blueBalls = [];
for (let i = 0; i < 10; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let radius = 20;
  let blueBall = new BlueBall(x, y, radius);
  blueBalls.push(blueBall);
}



for (let i = 0; i < 5; i++) {
  let ball = {
    x: Math.random() * (width - 50) + 25,
    y: Math.random() * (height - 50) + 25,
    radius: 25,
    dx: 5,
    dy: 5,
    color: i % 2 === 0 ? 'red' : 'blue',
    isTouched: false,
    isVisible: true
  };

  balls.push(ball);

  if (ball.color === 'red') {
    redBallsRemaining++;
  }
}

for (let i = 0; i < 17; i++) {
  let ball = {
    x: Math.random() * (width - 50) + 25,
    y: Math.random() * (height - 50) + 25,
    radius: 25,
    dx: 5,
    dy: 5,
    color: 'blue',
    isTouched: false,
    isVisible: true
  };

  balls.push(ball);
}



canvas.addEventListener('mousedown', (event) => {
  if (isGameOver) {
    return;
  }

  balls.forEach((ball) => {
    if (Math.sqrt((event.clientX - ball.x) ** 2 + (event.clientY - ball.y) ** 2) <= ball.radius) {
      ball.isTouched = true;
      ball.dx *= 2;
      ball.dy *= 2;

      if (ball.color === 'red') {
        ball.isVisible = false;
        redBallsRemaining--;

        if (redBallsRemaining === 0) {
          isGameOver = true;
        }
      } else if (ball.color === 'blue') {
        isGameOver = true;
      }
    }
  });
});

canvas.addEventListener('mouseup', () => {
  balls.forEach((ball) => {
    if (ball.isTouched) {
      ball.isTouched = false;
      ball.dx /= 2;
      ball.dy /= 2;
    }
  });
});

function animate() {
 
 
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);

  balls.forEach((ball) => {
    if (ball.isVisible) {
      context.beginPath();
      context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      context.fillStyle = ball.color;
      context.fill();
      context.stroke();

      if (ball.x + ball.radius > width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
      }

      if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
      }

      ball.x += ball.dx;
      ball.y += ball.dy;

    }
  });

  if (isGameOver) {
    if (redBallsRemaining === 0) {
      context.font = '50px Arial';
      context.fillStyle = 'green';
      context.textAlign = 'center';
      context.fillText('YOU WIN!', width / 2, height / 2);
    } else {
      context.font = '50px Arial';
      context.fillStyle = 'red';
      context.textAlign = 'center';
      context.fillText('GAMEOVER', width / 2, height / 2);
    }
    }
    }
    
    animate();
