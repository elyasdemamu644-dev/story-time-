function safeProgress() { return readStorage('story_progress', {}); }
function getChapterProgress(id) { return Number(safeProgress()[id]?.percent || 0); }
function saveChapterProgress(id, percent, position) { const progress = safeProgress(); progress[id] = { percent: Math.min(100, Math.round(percent)), position: Math.max(0, position || 0), completed: percent >= 94 }; writeStorage('story_progress', progress); writeStorage('story_last_chapter', id); }
function getLastChapter() { return Number(readStorage('story_last_chapter', 0)); }
function getBookmarks() { const value = readStorage('story_bookmarks', []); return Array.isArray(value) ? value : []; }
function toggleBookmark(id) { const bookmarks = getBookmarks(); const index = bookmarks.indexOf(id); if (index >= 0) bookmarks.splice(index, 1); else bookmarks.push(id); writeStorage('story_bookmarks', bookmarks); return index < 0; }
function formatDate(date) { if (!date) return 'Date to be announced'; return new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric'}).format(new Date(`${date}T12:00:00`)); }
