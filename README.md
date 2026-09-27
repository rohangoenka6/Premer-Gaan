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
| `songs.js`       | The playlist — artist + title + file + cover for every song   |
| `songs/`         | The audio, committed to git so the site can actually play it   |
| `covers/`        | Album artwork, one JPG per track, named after the song slug     |
| `tools/`         | `sync-playlist.mjs` — rebuilds songs.js from what's in songs/  |
| `.github/`       | Workflow that runs the same sync automatically on push         |
| `background.mp4` | The animated backdrop (looping, muted, autoplaying)            |
| `background.jpg` | Still frame of the backdrop, used for the blurred fill layer   |
| `add-song.ps1`   | Helper that adds a song, updates the playlist, commits, pushes |
| `README.md`      | This guide                                                     |

## The playlist

| #  | Title                    | Artist                                                    | Cover                |
| -- | ------------------------ | --------------------------------------------------------- | -------------------- |
| 1  | Notun Premer Gaan        | Debraj Bhattacharya & Surangana Bandyopadhyay               | notun-premer-gaan.jpg |
| 2  | Amar Vin Deshi Tara      | Chandrabindoo                                             | amar-vin-deshi-tara.jpg |
| 3  | Baynankhoka              | Chandrabindoo                                             | baynankhoka.jpg |
| 4  | Bhalobasa Basi           | Saikat Bandyopadhyay                                      | bhalobasa-basi.jpg |
| 5  | Ei Raat Tomar Amar       | Hemanta Mukherjee                                         | ei-raat-tomar-amar.jpg |
| 6  | Ek Minute Er Chumu       | Debraj Bhattacharya                                        | ek-minute-er-chumu.jpg |
| 7  | Ghum Ghum Ei Chokhe      | Abir Biswas & Jeet Gannguli                               | ghum-ghum-ei-chokhe.jpg |
| 8  | It's Only Pyaar          | Samidh Mukherjee, Rishi, Kunal Ganjawala & Monali Thakur  | it-s-only-pyaar.jpg |
| 9  | Jao Pakhi Antaheen       | Shreya Ghoshal, Pranab Biswas, Aninda Chatterjee & Chandril Bhattacharya | jao-pakhi-antaheen.jpg |
| 10 | Jeno Kichu Mone Koron    | Akhil Bandhu Ghosh                                        | jeno-kichu-mone-koron.jpg |
| 11 | Jodi Boli                | Pratik Kundu & Sudeshna Das                               | jodi-boli.jpg |
| 12 | Ke Tui Ey Bol            | Arijit Singh                                               | ke-tui-ey-bol.jpg |
| 13 | Keno Je Toke             | Raj Barman                                                | keno-je-toke.jpg |
| 14 | Kothin                   | Ash King & Sayani Ghosh                                   | kothin.jpg |
| 15 | Mon Kharape              | Sonu Nigam, Antara Mitra, Indraadip Dasgupta & Barish      | mon-kharape.jpg |
| 16 | Mon                      | Jeet Gannguli                                             | mon.jpg |
| 17 | Mone                     | Chandrabindoo                                             | mone.jpg |
| 18 | Muthor Romal             | Antara Chowdhury, Srikanto Acharya, Aninda Chatterjee & Chandril Bhattacharya | muthor-romal.jpg |
| 19 | Nesha Nesha              | Sunidhi Chauhan & Anindya Chatterjee                       | nesha-nesha.jpg |
| 20 | O My Love                | Kunal Ganjawala                                           | o-my-love.jpg |
| 21 | Pather Prante Oi         | Ranjan Prasad                                             | pather-prante-oi.jpg |
| 22 | Pran Dite Chai           | Sabrina Bashir                                             | pran-dite-chai.jpg |
| 23 | Saajna Pass Ay Tu Jara   | Shaan & Mahalakshmi Iyer                                  | saajna-pass-ay-tu-jara.jpg |
| 24 | Se Je Boshe Ache         | Arnob                                                     | se-je-boshe-ache.jpg |
| 25 | Shedin Dekha Hoyechilo   | Kunal Ganjawala                                           | shedin-dekha-hoyechilo.jpg |
| 26 | Tomake Chai              | Arijit Singh                                               | tomake-chai.jpg |
| 27 | Tomar Kaner Dul          | Suman Ghosh & Vinchigiri                                  | tomar-kaner-dul.jpg |
| 28 | Tomar Pichu Charbo Na    | Nahid Hasan                                               | tomar-pichu-charbo-na.jpg |

### About the metadata

Every artist name and cover above was resolved through the **iTunes Search
API** — for each track the script tried a list of candidate `artist + title`
searches, took the first one that returned a real result, downloaded that
track's 600×600 artwork into `covers/`, and pinned both into `songs.js`. So the
artwork is stored locally and always displays, with no network call at runtime.

A few tracks are matched to a **cover version** because the original recording
isn't on the iTunes Store — most likely #7 *Ghum Ghum Ei Chokhe*. A couple of
titles also differ slightly from the filename (iTunes lists #3 as
"Byanakhoka", #9 as "Jao Pakhi", #10 as "Jeno Kichhu Mone Korona", #12 as
"Ke Tui Bol", #18 as "Muthor Romal"). If any cover looks wrong, just replace
the image in `covers/` — same filename, no code change needed.

If you delete a `cover:` field from `songs.js`, the player falls back to
searching iTunes by `artist + title` at runtime and shows the golden vinyl
placeholder when nothing matches.

## The spinning disc

The album cover sits on the player card as a record: it **rotates only while
audio is actually playing** and stops the moment you pause. The artwork and its
groove texture rotate together under a fixed centre spindle, and the whole disc
glows gold while it turns. The state is driven off the real `audio.paused`
property on a 250 ms poll, so it can never get stuck spinning.

## Adding a song

**Just drop the MP3 into `songs/` and run one command.** The playlist rebuilds
itself — title from the filename, artist and cover art looked up on the iTunes
Store, entry appended, existing order preserved:

```powershell
node tools/sync-playlist.mjs
git add -A
git commit -m "Add a song"
git push
```

`add-song.ps1` still works and now calls the same script, so it picks up the
artist and artwork too:

```powershell
.\add-song.ps1 -Title "Notun Premer Gaan" -Artist "Debraj Bhattacharya" -From "C:\path\to\song.mp3" -SkipPush
```

Other flags: `--dry-run` (report what would change, write nothing), `--no-art`
(skip the iTunes lookups), `--keep-missing` (don't drop entries whose file has
gone).

### It also updates itself on GitHub

`.github/workflows/sync-playlist.yml` runs on every push that touches `songs/`.
So you can add a song **from your phone** using the GitHub app — upload the MP3
into `songs/` — and the Action adds the playlist entry, downloads the cover art,
and commits the result back. No PC needed.

If a track can't be matched on iTunes, the entry is still created; just fill in
the `artist` value in `songs.js` by hand later (or replace the image in
`covers/` — same filename, no code change).

## Running it locally

Just open `index.html` in a browser — no server needed. Cover art and weather
need internet; audio streams from `/songs`.

## Notes

- The clock and the live weather widget are set to **Kolkata** (`script.js`,
  `initWeather`). Change the coordinates there to any city.
- The playlist keeps no state: volume, last-played track, and position are reset
  on refresh.
- The MP3s are committed to git (about 145 MB) plus ~3 MB of cover art, on
  purpose — GitHub Pages serves them straight from the repo, and they need to
  be there for the site to work.

Everything is ₹0 — GitHub Pages, SSL, hosting. Forever.
