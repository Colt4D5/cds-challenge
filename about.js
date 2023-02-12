const canvas = document.querySelector('#bg-canvas');
const ctx = canvas.getContext('2d');

resizeCanvas();

let particlesArray = [];

class Particle {
constructor(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.baseX = this.x;
  this.baseY = this.y;
  this.directionX = Math.random() * 3 - 1.5;
  this.directionY = Math.random() * 3 - 1.5;
  this.collision = false;
}
draw() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.closePath();
}
update() {
  this.color = document.querySelector('html').dataset.theme === 'dark' ?
    'rgb(255, 255, 255)':
    'rgb(0, 0, 0)';

  this.x += this.directionX;
  this.y += this.directionY;
  if (this.x + this.radius > canvas.width || 
    this.x - this.radius < 0) {
    this.directionX *= -1;
  }
  if (this.y + this.radius > canvas.height || 
    this.y - this.radius < 0) {
    this.directionY *= -1
  }
  
}
}

function init() {
for (let i = 0; i < 50; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  const radius = 2;
  const color = `rgb(255, 255, 255)`;
  particlesArray.push(new Particle(x, y, radius, color));
}
}
init();

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
    for (let j = i; j < particlesArray.length; j++) {
      let dx = particlesArray[i].x - particlesArray[j].x;
      let dy = particlesArray[i].y - particlesArray[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 250;
      let opacity = 1 - distance/maxDistance;
      if (distance < maxDistance) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = document.querySelector('html').dataset.theme === 'dark' ? `rgba(255,255,255,${opacity})` : `rgba(0,0,0,${opacity})`;
        ctx.beginPath();
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
  }
animate();

  
addEventListener('resize', resizeCanvas);

function resizeCanvas() {
  const mainTag = document.querySelector('main');
  canvas.width = mainTag.getBoundingClientRect().width;
  canvas.height = mainTag.getBoundingClientRect().height;
}