// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

// ---------------------------------------------------------
// NEW: Dylan Song Story backend endpoint
// ---------------------------------------------------------
app.get('/api/songs', (req, res) => {
  const songs = [
    {
      id: 1,
      title: 'Apologies',
      spotifyUrl: 'https://open.spotify.com/track/54DyDggWeiryAjzoz5gssZ',
      embedUrl: 'https://open.spotify.com/embed/track/54DyDggWeiryAjzoz5gssZ',
      story:
        'The song that started it all. A raw look at regret and overthinking, written late at night and refined through countless listens.',
    },
    {
      id: 2,
      title: 'Dancing Forever',
      spotifyUrl: 'https://open.spotify.com/track/2d0dgcrdITNUvgduKqmdzY',
      embedUrl: 'https://open.spotify.com/embed/track/2d0dgcrdITNUvgduKqmdzY',
      story:
        'The main version of Dancing Forever — a hopeful track about holding onto joy even when life feels heavy.',
    },
    {
      id: 3,
      title: 'Dancing Forever (Alt Mix)',
      spotifyUrl: 'https://open.spotify.com/track/5X9KME9uq7sEZfm46m0vXn',
      embedUrl: 'https://open.spotify.com/embed/track/5X9KME9uq7sEZfm46m0vXn',
      story:
        'A moodier, headphone-friendly alternate mix with different textures and atmosphere.',
    },
    {
      id: 4,
      title: 'Dancing Forever (Stripped)',
      spotifyUrl: 'https://open.spotify.com/track/4LGNxvvJLRZpvOyT1bz8pD',
      embedUrl: 'https://open.spotify.com/embed/track/4LGNxvvJLRZpvOyT1bz8pD',
      story:
        'A stripped-down intimate version focusing more on lyrics and emotion than production.',
    },
  ];

  res.json(songs);
});

// ---------------------------------------------------------
// Start server
// ---------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
