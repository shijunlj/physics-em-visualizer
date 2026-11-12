const canvas = document.querySelector('.background-particles');
const context = canvas.getContext('2d');
if (context) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const spacing = 24;
  const glowSize = 32;
  const colors = ['#b3a3ff', '#87f0e0'];
  const glows = colors.map(color => {
    const sprite = document.createElement('canvas');
    sprite.width = sprite.height = glowSize * 2;
    const brush = sprite.getContext('2d');
    brush.scale(2, 2);
    const center = glowSize / 2;
    const gradient = brush.createRadialGradient(center, center, 0, center, center, center);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.25, color + '73');
    gradient.addColorStop(1, color + '00');
    brush.fillStyle = gradient;
    brush.fillRect(0, 0, glowSize, glowSize);
    return sprite;
  });
  let width, height, frame;
  let previousTime;
  let pointerX = 0;
  let pointerY = 0;
  let pointerActive = false;
  let magnetStrength = 0;

  function draw() {
    context.clearRect(0, 0, width, height);
    if (!width || !height) return;
    const responseRadius = 200;
    const radiusSquared = responseRadius ** 2;
    for (let baseY = spacing / 2; baseY < height; baseY += spacing) {
      for (let baseX = spacing / 2; baseX < width; baseX += spacing) {
        const dx = baseX - pointerX;
        const dy = baseY - pointerY;
        const distanceSquared = dx * dx + dy * dy;
        const influence = distanceSquared < radiusSquared
          ? magnetStrength * (1 - Math.sqrt(distanceSquared) / responseRadius) ** 2
          : 0;
        const pull = 0.24 * influence;
        const x = baseX - dx * pull;
        const y = baseY - dy * pull;
        // 水平偶极子的场线方向决定附近光点的朝向。
        const angle = influence > 0 ? Math.atan2(3 * dx * dy, 2 * dx * dx - dy * dy) : 0;
        const paletteIndex = baseX < width * 0.48 ? 0 : 1;
        const glowWidth = 9 + 23 * influence;
        context.globalAlpha = 0.22 + 0.66 * influence;
        context.drawImage(glows[paletteIndex], x - glowWidth / 2, y - glowWidth / 2, glowWidth, glowWidth);
        context.globalAlpha = 0.46 + 0.54 * influence;
        context.fillStyle = colors[paletteIndex];
        context.beginPath();
        context.ellipse(x, y, 1.25 + 9 * influence, 1.25, angle, 0, 2 * Math.PI);
        context.fill();
      }
    }
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    draw();
  }

  function animate(time) {
    const delta = previousTime === undefined ? 0 : Math.min(time - previousTime, 50) / 1000;
    previousTime = time;
    const targetStrength = pointerActive ? 1 : 0;
    const ease = 1 - Math.exp(-12 * delta);
    magnetStrength += (targetStrength - magnetStrength) * ease;
    if (Math.abs(targetStrength - magnetStrength) < 0.005) magnetStrength = targetStrength;
    draw();
    if (magnetStrength !== targetStrength) {
      frame = requestAnimationFrame(animate);
    } else {
      frame = undefined;
      previousTime = undefined;
    }
  }

  function scheduleDraw() {
    if (!reducedMotion.matches && frame === undefined) {
      frame = requestAnimationFrame(animate);
    }
  }

  window.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || reducedMotion.matches) return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    pointerActive = true;
    scheduleDraw();
  });
  function releasePointer() {
    if (!pointerActive) return;
    pointerActive = false;
    scheduleDraw();
  }
  document.documentElement.addEventListener('pointerleave', releasePointer);
  window.addEventListener('blur', releasePointer);
  window.addEventListener('resize', resize);
  reducedMotion.addEventListener('change', () => {
    if (!reducedMotion.matches) return;
    cancelAnimationFrame(frame);
    frame = undefined;
    previousTime = undefined;
    pointerActive = false;
    magnetStrength = 0;
    draw();
  });
  resize();
}
