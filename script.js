
const canvas = document.getElementById('orbitCanvas');
const ctx = canvas.getContext('2d');

const sun = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 30,
    color: 'yellow'
};

const earth = {
    x: canvas.width / 2 + 150,
    y: canvas.height / 2,
    radius: 15,
    color: 'blue',
    angle: 0,
    speed: 0.01
};

const moon = {
    x: earth.x + 50,
    y: earth.y,
    radius: 5,
    color: 'gray',
    angle: 0,
    speed: 0.05
};

function drawSun() {
    ctx.beginPath();
    ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
    ctx.fillStyle = sun.color;
    ctx.fill();
}

function drawEarth() {
    ctx.beginPath();
    ctx.arc(earth.x, earth.y, earth.radius, 0, Math.PI * 2);
    ctx.fillStyle = earth.color;
    ctx.fill();
}

function drawMoon() {
    ctx.beginPath();
    ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
    ctx.fillStyle = moon.color;
    ctx.fill();
}

function updatePositions() {
    earth.angle += earth.speed;
    earth.x = sun.x + 150 * Math.cos(earth.angle);
    earth.y = sun.y + 150 * Math.sin(earth.angle);

    moon.angle += moon.speed;
    moon.x = earth.x + 50 * Math.cos(moon.angle);
    moon.y = earth.y + 50 * Math.sin(moon.angle);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animate() {
    clearCanvas();
    drawSun();
    updatePositions();
    drawEarth();
    drawMoon();
    requestAnimationFrame(animate);
}

animate();
