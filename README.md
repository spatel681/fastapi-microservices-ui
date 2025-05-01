
# 🧑‍💻 FastAPI Microservices UI – React Frontend

This is a fully decoupled React-based UI that interacts with Python FastAPI microservices for user management, product catalog, and order placement.

The interface is responsive, dynamic, and automatically refreshes dropdowns when new users or products are created.

---

## ⚙️ Tech Stack

- React (with Create React App)
- Axios (for HTTP communication)
- FastAPI (backend microservices)
- Docker (backend orchestration)

---

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── UserForm.js
│   │   ├── ProductForm.js
│   │   └── OrderForm.js
│   ├── api.js
│   ├── App.js
│   └── index.js
├── package.json
└── .gitignore
```

---

## 🚀 Features

- ✅ Create and list users
- ✅ Create and list products
- ✅ Place orders using real-time dropdowns (auto-refreshes)
- ✅ React state sync across components via props
- ✅ CORS handled in FastAPI backend

---

## 🔌 API Configuration

### `src/api.js`

```js
import axios from "axios";

export const userApi = axios.create({
  baseURL: "http://localhost:8001",
  headers: { "Content-Type": "application/json" }
});

export const productApi = axios.create({
  baseURL: "http://localhost:8002",
  headers: { "Content-Type": "application/json" }
});

export const orderApi = axios.create({
  baseURL: "http://localhost:8003",
  headers: { "Content-Type": "application/json" }
});
```

---

## 🧠 Auto-Refresh on Form Submit

- `App.js` holds a `refreshKey` state
- Passed as props to `OrderForm`
- Triggered by `onUserCreated` and `onProductCreated` in child forms
- `OrderForm` re-fetches dropdown options automatically

---

## ▶️ Run the App

### 1. Install dependencies

```bash
npm install
```

### 2. Start React app

```bash
npm start
```

### 3. Make sure backend is running

```bash
docker-compose up --build
```

---

## 🔒 CORS Support

Ensure each FastAPI microservice includes:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
```

---

## ✅ Status

- 🔄 Auto-refreshing user and product dropdowns
- 🛠 Component props for shared state
- 📦 Ready for GitHub portfolio or live deployment

---

## 📄 License

MIT — free to use, modify, and build upon.
