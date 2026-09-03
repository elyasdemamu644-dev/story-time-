const starMessages = ['You are more special than you realize.','I hope you never forget how much you matter.','Some memories stay because they mean something.','Some people make ordinary days feel different.',"You gave some moments a meaning I didn't expect.",'I am grateful for every little moment.','Somewhere between all these stars, there is a story about you.','And this story was made with love.'];
const messageStars = document.getElementById('message-stars');
const starMessage = document.getElementById('star-message');
if (messageStars) {
  starMessages.forEach((message, index) => {
    const star = document.createElement('button');
    star.className = 'message-star'; star.type = 'button'; star.textContent = '⭐';
    star.setAttribute('aria-label', `Reveal star message ${index + 1}`);
    star.style.left = `${8 + ((index * 37) % 82)}%`; star.style.top = `${12 + ((index * 53) % 72)}%`;
    star.addEventListener('click', () => { starMessage.textContent = message; });
    messageStars.appendChild(star);
  });
}
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal-on-scroll').forEach(section => revealObserver.observe(section));
