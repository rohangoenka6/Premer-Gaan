# 🎧 Premer Gaan

A beautiful retro cassette player that plays **28 Bengali love songs** —
completely **ad-free**. No YouTube, no ads, ever.

Songs come from the audio files in the `/songs` folder, and cover art is fetched
automatically from the iTunes Store. The background is an animated
Kolkata-storm scene (originally a GIF, converted to `background.mp4` so it
loads fast and stays under a megabyte).

## What's in this folder

| File             | What it is                                                     |
| ---------------- | -------------------------------------------------------------- |
| `index.html`     | The page itself (don't need to touch this)                     |
| `styles.css`     | The look & feel (don't need to touch this)                     |
| `script.js`      | The player brain (don't need to touch this)                    |
| `songs.js`       | The playlist — artist + title for every song (edit to change)  |
| `songs/`         | The audio, committed to git so the site can actually play it   |
| `background.mp4` | The animated backdrop (looping, muted, autoplaying)            |
| `background.jpg` | Still frame of the backdrop, used for the blurred fill layer   |
| `add-song.ps1`   | Helper that adds a song, updates the playlist, commits, pushes |
| `README.md`      | This guide                                                     |

## The playlist

| #  | Title                    | Artist                                                    |
| -- | ------------------------ | --------------------------------------------------------- |
| 1  | Notun Premer Gaan        | Debraj Bhattacharya & Surangana Bandyopadhyay               |
| 2  | Amar Vin Deshi Tara      | Chandrabindoo                                             |
| 3  | Baynankhoka              | —                                                          |
| 4  | Bhalobasa Basi           | Saikat Bandyopadhyay                                      |
| 5  | Ei Raat Tomar Amar       | Hemanta Mukherjee                                         |
| 6  | Ek Minute Er Chumu       | Debraj Bhattacharya                                        |
| 7  | Ghum Ghum Ei Chokhe      | —                                                          |
| 8  | It's Only Pyaar          | Samidh Mukherjee, Rishi, Kunal Ganjawala & Monali Thakur  |
| 9  | Jao Pakhi Antaheen       | —                                                          |
| 10 | Jeno Kichu Mone Koron    | —                                                          |
| 11 | Jodi Boli                | Pratik Kundu & Sudeshna Das                               |
| 12 | Ke Tui Ey Bol            | —                                                          |
| 13 | Keno Je Toke             | Raj Barman                                                |
| 14 | Kothin                   | Ash King & Sayani Ghosh                                   |
| 15 | Mon Kharape              | —                                                          |
| 16 | Mon                      | —                                                          |
| 17 | Mone                     | Chandrabindoo                                             |
| 18 | Muchar Romal             | Antara Chowdhury, Srikanto Acharya, Aninda Chatterjee & Chandril Bhattacharya |
| 19 | Nesha Nesha              | Sunidhi Chauhan & Anindya Chatterjee                       |
| 20 | O My Love                | Kunal Ganjawala                                           |
| 21 | Pather Prante Oi         | Ranjan Prasad                                             |
| 22 | Pran Dite Chai           | Sabrina Bashir                                             |
| 23 | Saajna Pass Ay Tu Jara   | Shaan & Mahalakshmi Iyer                                  |
| 24 | Se Je Boshe Ache         | Arnob                                                     |
| 25 | Shedin Dekha Hoyechilo   | Kunal Ganjawala                                           |
| 26 | Tomake Chai              | Arijit Singh                                               |
| 27 | Tomar Kaner Dul          | —                                                          |
| 28 | Tomar Pichu Charbo Na    | Nahid Hasan                                               |

A `—` means the artist couldn't be confirmed on the iTunes Store, so the cover
is looked up by title only. If the artwork looks wrong (or shows the golden
vinyl placeholder), fix the `artist` value in `songs.js` — or pin the artwork
directly:

```js
{ title: "Baynankhoka", artist: "", cover: "covers/baynankhoka.jpg" }
```

## Adding a song

The easy way:

```powershell
.\add-song.ps1 -Title "Notun Premer Gaan" -Artist "Debraj Bhattacharya" -From "C:\path\to\song.mp3" -SkipPush
```

It copies the MP3 into `songs/` under a unique slug filename (unique names also
bust CDN/browser caches), appends the entry to `songs.js`, and commits.

The manual way: drop an audio file into `songs/` and add a line to `songs.js`.

## Running it locally

Just open `index.html` in a browser — no server needed. Cover art and weather
need internet; audio streams from `/songs`.

## Notes

- The clock and the live weather widget are set to **Kolkata** (`script.js`,
  `initWeather`). Change the coordinates there to any city.
- The playlist keeps no state: volume, last-played track, and position are reset
  on refresh.
- The MP3s are committed to git (about 145 MB) on purpose — GitHub Pages serves
  them straight from the repo, and they need to be there for the site to work.

Everything is ₹0 — GitHub Pages, SSL, hosting. Forever.
