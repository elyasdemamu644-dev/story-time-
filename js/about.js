function addText(container, text) { const paragraph = document.createElement('p'); paragraph.textContent = text; container.appendChild(paragraph); }
function renderAbout() {
  const introduction = document.getElementById('about-introduction'); aboutContent.introduction.forEach(text => addText(introduction, text));
  const letter = document.getElementById('about-letter'); aboutContent.letter.forEach(text => addText(letter, text));
  document.getElementById('about-why').textContent = aboutContent.why;
  document.getElementById('about-chapters').textContent = aboutContent.chapters;
  document.getElementById('about-stars').textContent = aboutContent.stars;
  const meaning = document.getElementById('about-meaning'); aboutContent.meaning.forEach((text, index) => { const word = document.createElement('span'); word.textContent = text; word.style.setProperty('--meaning-index', index); meaning.appendChild(word); });
  const timeline = document.getElementById('about-timeline'); aboutContent.timeline.forEach(item => { const entry = document.createElement('article'); entry.className = 'timeline-item'; entry.innerHTML = `<h3>${item.label}</h3><p></p>`; entry.querySelector('p').textContent = item.text; timeline.appendChild(entry); });
  document.getElementById('about-wonder').textContent = aboutContent.ifYouWonder;
  document.getElementById('about-final').textContent = aboutContent.finalMessage;
  if (aboutContent.memories.length) { const section = document.getElementById('memory-section'); section.hidden = false; const memoryList = document.getElementById('about-memories'); aboutContent.memories.forEach((memory, index) => { const card = document.createElement('article'); card.className = 'memory-card'; card.innerHTML = `<small>Memory ${String(index + 1).padStart(2, '0')}</small><p></p>`; card.querySelector('p').textContent = memory; memoryList.appendChild(card); }); }
  const revealButton = document.getElementById('reveal-message'); const hiddenMessage = document.getElementById('hidden-message'); revealButton.addEventListener('click', () => { const revealed = !hiddenMessage.hidden; hiddenMessage.hidden = revealed; revealButton.setAttribute('aria-expanded', String(!revealed)); revealButton.textContent = revealed ? 'Reveal' : 'Hide message'; if (!revealed) hiddenMessage.textContent = aboutContent.hiddenMessage; });
}
renderAbout();
