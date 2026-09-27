// ============================================================
//  Premer Gaan · songs
//
//  This file is the single source of truth for the playlist.
//  audio: each song points to a uniquely-named file in /songs
//    (unique names also bust any cached copies on hosting/CDN).
//  cover: fetched automatically from the iTunes Store by
//    artist + title. To pin a specific image, set `cover`.
//
//  NOTE: an empty artist ("") simply means the cover lookup will
//  search by title only. Any track with no match on iTunes falls
//  back to the golden vinyl placeholder automatically.
// ============================================================

var SONGS = [
  { title: "Notun Premer Gaan", artist: "Debraj Bhattacharya & Surangana Bandyopadhyay", file: "songs/notun-premer-gaan.mp3" },
  { title: "Amar Vin Deshi Tara", artist: "Chandrabindoo", file: "songs/amar-vin-deshi-tara.mp3" },
  { title: "Baynankhoka", artist: "", file: "songs/baynankhoka.mp3" },
  { title: "Bhalobasa Basi", artist: "Saikat Bandyopadhyay", file: "songs/bhalobasa-basi.mp3" },
  { title: "Ei Raat Tomar Amar", artist: "Hemanta Mukherjee", file: "songs/ei-raat-tomar-amar.mp3" },
  { title: "Ek Minute Er Chumu", artist: "Debraj Bhattacharya", file: "songs/ek-minute-er-chumu.mp3" },
  { title: "Ghum Ghum Ei Chokhe", artist: "", file: "songs/ghum-ghum-ei-chokhe.mp3" },
  { title: "It's Only Pyaar", artist: "Samidh Mukherjee, Rishi, Kunal Ganjawala & Monali Thakur", file: "songs/its-only-pyaar.mp3" },
  { title: "Jao Pakhi Antaheen", artist: "", file: "songs/jao-pakhi-antaheen.mp3" },
  { title: "Jeno Kichu Mone Koron", artist: "", file: "songs/jeno-kichu-mone-koron.mp3" },
  { title: "Jodi Boli", artist: "Pratik Kundu & Sudeshna Das", file: "songs/jodi-boli.mp3" },
  { title: "Ke Tui Ey Bol", artist: "", file: "songs/ke-tui-ey-bol.mp3" },
  { title: "Keno Je Toke", artist: "Raj Barman", file: "songs/keno-je-toke.mp3" },
  { title: "Kothin", artist: "Ash King & Sayani Ghosh", file: "songs/kothin.mp3" },
  { title: "Mon Kharape", artist: "", file: "songs/mon-kharape.mp3" },
  { title: "Mon", artist: "", file: "songs/mon.mp3" },
  { title: "Mone", artist: "Chandrabindoo", file: "songs/mone.mp3" },
  { title: "Muchar Romal", artist: "Antara Chowdhury, Srikanto Acharya, Aninda Chatterjee & Chandril Bhattacharya", file: "songs/muchar-romal.mp3" },
  { title: "Nesha Nesha", artist: "Sunidhi Chauhan & Anindya Chatterjee", file: "songs/nesha-nesha.mp3" },
  { title: "O My Love", artist: "Kunal Ganjawala", file: "songs/o-my-love.mp3" },
  { title: "Pather Prante Oi", artist: "Ranjan Prasad", file: "songs/pather-prante-oi.mp3" },
  { title: "Pran Dite Chai", artist: "Sabrina Bashir", file: "songs/pran-dite-chai.mp3" },
  { title: "Saajna Pass Ay Tu Jara", artist: "Shaan & Mahalakshmi Iyer", file: "songs/saajna-pass-ay-tu-jara.mp3" },
  { title: "Se Je Boshe Ache", artist: "Arnob", file: "songs/se-je-boshe-ache.mp3" },
  { title: "Shedin Dekha Hoyechilo", artist: "Kunal Ganjawala", file: "songs/shedin-dekha-hoyechilo.mp3" },
  { title: "Tomake Chai", artist: "Arijit Singh", file: "songs/tomake-chai.mp3" },
  { title: "Tomar Kaner Dul", artist: "", file: "songs/tomar-kaner-dul.mp3" },
  { title: "Tomar Pichu Charbo Na", artist: "Nahid Hasan", file: "songs/tomar-pichu-charbo-na.mp3" },
];
