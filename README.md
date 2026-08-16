# 🌍 WorldWise

WorldWise is a travel companion web application built with **React** that allows users to explore cities around the world, track places they have visited, and keep a personal record of their travel experiences.

The project focuses on building a modern React application with reusable components, client-side routing, state management, interactive maps, and API communication.

## 🚀 Live Demo

**[View WorldWise Live](https://world-wise-prahans1.vercel.app/)**

## 📂 GitHub Repository

**[View the source code](https://github.com/prahans/worldWise)**

---

## ✨ Features

- 🗺️ Interactive world map
- 📍 Add cities and places you've visited
- 🏙️ View details about saved cities
- 📝 Add notes and travel information
- 📅 Store visit dates
- 🔄 Fetch city data from a REST API
- 🧭 Client-side navigation between different sections
- ⚡ Fast and responsive React interface
- 💾 Persistent city data using JSON Server
- 📱 Responsive layout for different screen sizes

---

## 🛠️ Tech Stack

### Frontend

- **React**
- **React Router**
- **Vite**
- **CSS Modules**
- **JavaScript (ES6+)**

### Backend / API

- **JSON Server**
- REST API
- JSON-based data storage

### Deployment

- **Vercel** — React frontend
- **Render** — JSON Server API

---

## 🧠 What I Learned

While building WorldWise, I practiced several important concepts used in modern React development:

- Building reusable React components
- Managing application state with React
- Using `useEffect` for side effects and API requests
- Working with React Router
- Creating controlled forms
- Fetching and handling API data
- Handling loading and error states
- Working with interactive maps
- Using Context API for shared application state
- Structuring a React application into maintainable components
- Using environment variables with Vite
- Deploying a frontend and backend separately
- Connecting a Vercel frontend to a Render-hosted API

---

## 📁 Project Structure

```text
worldWise/
├── data/
│   └── cities.json
│
├── public/
│
├── src/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/prahans/worldWise.git
```

### 2. Navigate into the project

```bash
cd worldWise
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the React development server

```bash
npm run dev
```

### 5. Start JSON Server

In another terminal:

```bash
npm run server
```

The React application will run on the Vite development server, while JSON Server provides the city API.

---

## 🔌 API

During development, the application communicates with JSON Server:

```text
http://localhost:9000
```

For example:

```text
GET /cities
```

The production API is hosted separately on Render.

```text
https://worldwise-ju37.onrender.com
```

The frontend uses a Vite environment variable for the API URL:

```env
VITE_API_URL=http://localhost:9000
```

For production:

```env
VITE_API_URL=https://worldwise-ju37.onrender.com
```

---

## 🌐 Deployment

The project uses separate deployments for the frontend and API.

### Frontend

The React application is deployed using **Vercel**.

```text
React/Vite
     ↓
  Vercel
```

### API

The JSON Server backend is deployed using **Render**.

```text
JSON Server
     ↓
   Render
```

The overall architecture looks like:

```text
                    ┌──────────────────────┐
                    │       Vercel         │
                    │   React Frontend     │
                    └──────────┬───────────┘
                               │
                               │ API Requests
                               ▼
                    ┌──────────────────────┐
                    │       Render         │
                    │     JSON Server      │
                    └──────────┬───────────┘
                               │
                               ▼
                         cities.json
```

---

## 📜 Available Scripts

### Start development server

```bash
npm run dev
```

### Start JSON Server

```bash
npm run server
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

### Start production API server

```bash
npm run server:prod
```

---

## 🔮 Future Improvements

Some improvements that could be added in the future:

- 🔐 User authentication
- 👤 Individual user profiles
- ☁️ Real database instead of JSON Server
- 📸 Upload travel photos
- ⭐ Favorite destinations
- 🔎 Search and filter cities
- 📊 Travel statistics and analytics
- 🌦️ Weather information for saved cities
- 🗺️ More advanced map interactions

---

## 👨‍💻 Author

**Prahans**

- GitHub: [@prahans](https://github.com/prahans)

---

## ⭐ Acknowledgment

This project was built as a practical React application to strengthen frontend development skills and gain hands-on experience with application state, routing, APIs, maps, and deployment.
