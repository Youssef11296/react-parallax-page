export const bgAnimation = e => {
  // bg animation
  document.querySelectorAll ('.bg').forEach (item => {
    const speed = item.getAttribute ('data-speed');

    const x = (window.innerWidth - e.pageX * speed) / 180;
    const y = (window.innerWidth - e.pageY * speed) / 180;

    item.style.backgroundPosition = `${x}px ${y}px`;
  });
};

document.addEventListener ('mousemove', bgAnimation);

// cursor animation
export const cursorAnimation = () => {
  document.addEventListener ('mousemove', e => {
    const cursor = document.getElementById ('cursor');
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  });
};
