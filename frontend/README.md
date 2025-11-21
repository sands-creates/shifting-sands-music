# Shifting Sands – Dylan Sands Music Explorer

A full-stack portfolio project that showcases the music of **Dylan Sands** using a custom React frontend and a Node/Express backend that connects to the Spotify Web API.

All music in this app was **written, sung, performed, and produced by Dylan Sands**. Every track was composed and mixed in **FL Studio**.

---

## 🎧 What this project does

This app lets you:

- Browse a curated set of Dylan's songs from Spotify
- See track details (title, album art, release info, etc.)
- Read short descriptions that give context or “the story” behind each track
- Open songs directly on Spotify
- Favorite tracks locally (stored in the browser)

It’s designed as a **real-world portfolio piece** to show:

- Frontend skills with **React**
- Backend skills with **Node + Express**
- Calling external APIs (**Spotify Web API**)
- Managing async state, loading, and error conditions
- Presenting technical work in a polished, artist-focused UI

---

## 🧱 Tech Stack

**Frontend**
- React
- Custom CSS
- LocalStorage persistence

**Backend**
- Node.js
- Express.js
- Spotify Web API
- Environment variables for secure keys

---

## 🧑‍🎤 About the music

All songs featured in this project were created by **Dylan Sands**.

He is the:
- **Singer**
- **Composer**
- **Musician**
- **Producer**

Every track was fully created, recorded, and mixed in **FL Studio**.

---

## 🚀 Running the project locally

### 1. Clone the repo

```bash
git clone https://github.com/sands-creates/shifting-sands-music.git
cd shifting-sands-music
```
---

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```ini
SPOTIFY_CLIENT_ID=your_id_here
SPOTIFY_CLIENT_SECRET=your_secret_here
SPOTIFY_REDIRECT_URI=http://localhost:5000/callback
```

Start the backend server:

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### 3. Frontend setup

```bash
cd ../frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

The frontend expects the backend to be running first.

---

## 🧠 What I learned

- Building a full-stack React + Node application  
- Connecting a backend API to an external service (Spotify)  
- Managing async state, loading states, and error handling  
- Using LocalStorage to save favorites  
- Organizing a professional full-stack project  
- Git & GitHub workflow  
- Writing a clean, professional README  

---

## ✨ Credits

**Music:** Written, sung, performed, and produced by **Dylan Sands** in **FL Studio**.  
**Development:** Full-stack application built as a portfolio project.
