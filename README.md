# Fullstack App (React + Node + SQLite + Knex)

This project is a fullstack setup with:

* **Frontend**: React + Vite + Material-UI
* **Backend**: Node.js + Express + Knex + SQLite3

Both frontend and backend run together using `concurrently`.

---

## Project Structure

```
|- client   # React frontend
|- server   # Express + Knex backend
|- package.json   # root setup with concurrently
```

---

## Setup Instructions

### 1. Install dependencies

```bash
npm run install:all
```

This installs dependencies in both `client` and `server`.

---

### 2. Run migrations

```bash
npm run migrate
```

This runs all Knex migrations inside the `server`.

---

### 3. Start project (dev mode)

```bash
npm start
```

This will:

* Run backend migrations
* Start backend (`nodemon`)
* Start frontend (`vite`)

Both will run **concurrently**.

---

## 🛠 Backend (server)

* Express app runs by default on [http://localhost:8080/](http://localhost:8080) (change in `server/index.js` if needed).
* Knex migrations are managed with:

```bash
npm run migrate --prefix server
```

---

## Frontend (client)

* React app runs on [http://localhost:5173/](http://localhost:5173).
* Uses Material-UI for styling.
* Configure API URL in `client/src/services/api.js` if backend port differs.

---

## Scripts Recap

* `npm run install:all` → install all dependencies
* `npm run migrate` → run backend migrations
* `npm run dev` → run backend + frontend together

---

## Notes

* Make sure you have `knexfile.js` in the `server/` directory with SQLite3 setup.
* By default, migrations create `dev.sqlite3` file inside `server/`.