# Story Time Priya

A dependency-free, front-end story-reading platform built with HTML, CSS, and vanilla JavaScript.

## Publish a chapter

Edit only `data/chapters.js`. Copy the marked `NEW CHAPTER TEMPLATE`, give the chapter a unique numeric `id`, add its metadata and paragraph strings, then set `status` to `published`. Use `upcoming` to show a teaser without revealing content, or `draft` to keep it private.

The homepage, chapter library, search, reader navigation, progress and statistics all derive from this data automatically. Chapters are read at `reader.html?chapter=1` and similar URLs.

## Run locally

Because the project uses plain static files, it can be hosted by any static host or opened directly in a browser. For the most reliable local behavior, use VS Code's Live Server or any simple static file server. No installation or build step is required.

Reader preferences, bookmarks and progress are stored only in the current browser's local storage; they are not synchronized between devices.
