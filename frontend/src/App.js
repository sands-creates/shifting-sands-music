// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const ARTIST = {
  name: 'Shifting Sands',
  personName: 'Dylan Sands',
  spotifyUrl: 'https://open.spotify.com/artist/5Fk4pSNiHOW4kYydpP3CwG',
  tagline: 'Indie electronic • songwriter • producer',
  location: 'New York',
};

function App() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [viewMode, setViewMode] = useState('all'); // 'all' or 'favorites'
useEffect(() => {
  document.title = 'Shifting Sands – Dylan Sands Music Explorer';
}, []);

  // Load favorites from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem('dylanFavorites');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavoriteIds(parsed);
        }
      } catch (err) {
        console.error('Error parsing favorites from localStorage:', err);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('dylanFavorites', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  // Fetch songs from backend
  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await fetch('http://localhost:5000/api/songs');
        const data = await response.json();
        setSongs(data);
      } catch (err) {
        console.error('Error fetching songs:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchSongs();
  }, []);

  function toggleFavorite(songId) {
    setFavoriteIds((current) =>
      current.includes(songId)
        ? current.filter((id) => id !== songId)
        : [...current, songId]
    );
  }

  function isFavorite(songId) {
    return favoriteIds.includes(songId);
  }

  const favoriteSongs = songs.filter((song) =>
    favoriteIds.includes(song.id)
  );

  const displayedSongs =
    viewMode === 'favorites' ? favoriteSongs : songs;

  return (
    <div className="app-root">
      {/* HEADER / HERO */}
      <header className="artist-header">
        <div className="artist-header-inner">
          <div className="artist-text-block">
            <p className="app-label">Dylan Sands · Portfolio Project</p>
            <h1 className="app-title">Shifting Sands</h1>
            <p className="app-subtitle">
              A small React + Spotify-powered experience featuring four tracks by{' '}
              <span className="highlight">{ARTIST.name}</span>. Each song gets
              its own little story, so you can share not just the music, but
              the heart behind it.
            </p>
            
            <p className="artist-tagline">
  All songs featured in this app were written, sung, performed, and produced by
  Dylan Sands. He created, recorded, and mixed these tracks using FL Studio.
</p>


            <div className="artist-meta-row">
              <span className="meta-pill">
                🎧 Artist: {ARTIST.name} ({ARTIST.personName})
              </span>
              <span className="meta-pill">
                📍 Based in {ARTIST.location}
              </span>
            </div>

            <div className="artist-actions">
              <a
                className="primary-button"
                href={ARTIST.spotifyUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Artist on Spotify
              </a>
              <a
                className="ghost-button"
                href="https://open.spotify.com/"
                target="_blank"
                rel="noreferrer"
              >
                View on Spotify Web Player
              </a>
            </div>
          </div>

          <div className="artist-embed-card">
            <p className="embed-label">Artist Preview</p>
            <iframe
              title="Artist Embed"
              src="https://open.spotify.com/embed/artist/5Fk4pSNiHOW4kYydpP3CwG"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <p className="embed-note">
              This embed is powered by Spotify. Listeners can play directly from
              here without leaving the page.
            </p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="page-main">
        <section className="songs-section">
          <div className="songs-header-row">
            <h2>Song Stories</h2>
            <p className="songs-tagline">
              Four tracks, each with its own moment, mood, and meaning.
            </p>
          </div>

          {loading ? (
            <p>Loading songs...</p>
          ) : (
            <>
              <div className="favorites-toolbar">
                <span className="favorites-count-pill">
                  Favorites: {favoriteSongs.length}
                </span>

                <div className="view-toggle">
                  <button
                    type="button"
                    className={`view-toggle-button ${
                      viewMode === 'all' ? 'view-toggle-button--active' : ''
                    }`}
                    onClick={() => setViewMode('all')}
                  >
                    All songs
                  </button>
                  <button
                    type="button"
                    className={`view-toggle-button ${
                      viewMode === 'favorites'
                        ? 'view-toggle-button--active'
                        : ''
                    }`}
                    onClick={() => setViewMode('favorites')}
                  >
                    Favorites only
                  </button>
                </div>
              </div>

              <div className="songs-grid">
                {viewMode === 'favorites' && favoriteSongs.length === 0 ? (
                  <p className="empty-favorites-message">
                    You haven&apos;t favorited any songs yet. Click
                    <strong> ☆ Favorite this song </strong>
                    on a track to add it here.
                  </p>
                ) : (
                  displayedSongs.map((song, index) => (
                    <article key={song.id} className="song-card">
                      <p className="song-index">Track {index + 1}</p>
                      <h3 className="song-title">{song.title}</h3>

                      {song.theme && (
                        <p className="song-theme">{song.theme}</p>
                      )}

                      {song.story && (
                        <p className="song-story">{song.story}</p>
                      )}

                      <div className="song-player">
                        <iframe
                          title={song.title}
                          src={song.embedUrl}
                          width="100%"
                          height="80"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                        ></iframe>
                      </div>

                      <div className="song-actions">
                        <button
                          type="button"
                          className={`favorite-button ${
                            isFavorite(song.id)
                              ? 'favorite-button--active'
                              : ''
                          }`}
                          onClick={() => toggleFavorite(song.id)}
                        >
                          {isFavorite(song.id)
                            ? '★ Favorited'
                            : '☆ Favorite this song'}
                        </button>

                        <a
                          className="secondary-button"
                          href={song.spotifyUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open on Spotify
                        </a>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </>
          )}
        </section>
      </main>

      <footer className="page-footer">
        <p>
          Built in React as a portfolio project for
          <span className="highlight"> Shifting Sands</span>.
        </p>
      </footer>
    </div>
  );
}

export default App;
