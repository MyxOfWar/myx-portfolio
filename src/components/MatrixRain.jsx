import { useEffect, useRef } from 'react';

const MATRIX_CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
const HACK_CHARS = '01{}[]()<>/\\|=+-_*&^%$#@!~;:.,?HACKINGACCESS GRANTED';

function MatrixRain({ effect, onComplete }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    const ctx = canvas.getContext('2d');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const chars = effect === 'hack' ? HACK_CHARS : MATRIX_CHARS;
    const color = effect === 'hack' ? '#C468FF' : '#58DBE4';
    const bgAlpha = effect === 'hack' ? 'rgba(12, 0, 32, 0.05)' : 'rgba(12, 0, 32, 0.05)';

    let animId;
    let frameCount = 0;

    function draw() {
      ctx.fillStyle = bgAlpha;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      frameCount++;
      if (frameCount < 360) {
        animId = requestAnimationFrame(draw);
      } else {
        // Fade out
        fadeOut();
      }
    }

    function fadeOut() {
      let opacity = 1;
      function fade() {
        opacity -= 0.05;
        canvas.style.opacity = opacity;
        if (opacity > 0) {
          requestAnimationFrame(fade);
        } else {
          onComplete();
        }
      }
      fade();
    }

    // Show "HACK" messages for hack effect
    if (effect === 'hack') {
      const messages = [
        'ACCESSING MAINFRAME...',
        'BYPASSING FIREWALL...',
        'DECRYPTING FILES...',
        'ACCESS GRANTED',
      ];
      let msgIndex = 0;
      const msgInterval = setInterval(() => {
        if (msgIndex < messages.length) {
          ctx.fillStyle = '#FF57F7';
          ctx.font = 'bold 20px monospace';
          const x = Math.random() * (canvas.width - 300);
          const y = Math.random() * canvas.height;
          ctx.fillText(messages[msgIndex], x, y);
          msgIndex++;
        } else {
          clearInterval(msgInterval);
        }
      }, 1200);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [effect, onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-canvas"
    />
  );
}

export default MatrixRain;
