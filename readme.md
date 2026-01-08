# Paradox Prism

**Paradox Prism** is a full-stack web application designed to facilitate anonymous reporting, secure content review, and a public artwork gallery. It leverages partial steganography for secure data encoding and decoding.

---

## 🚀 Features

- **Public Gallery**: Browse and interact with digital artworks.
- **Anonymous Reporting**: Submit reports securely without revealing identity.
- **Steganography Decoding**: Unlock hidden messages or data within images using the "Decode" feature.
- **Reviewer Console**: Dedicated interface for reviewers to manage and assess submissions.
- **Report Confirmation**: Track and verify the status of submitted reports.

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) (with [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [React Query](https://tanstack.com/query/latest)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) (with [Mongoose](https://mongoosejs.com/))
- **Validation**: [Zod](https://zod.dev/)
- **Authentication**: JWT (JSON Web Tokens)
- **Image Storage**: [Cloudinary](https://cloudinary.com/)

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository_url>
cd Paradox-Prism
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` root with the following variables:
```env
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/
SUPER_ADMIN_PASSWORD=<your_secure_password>

# Cloudinary Config
CLOUDINARY_CLOUD_NAME=<your_cloud_name>
CLOUDINARY_API_KEY=<your_api_key>
CLOUDINARY_API_SECRET=<your_api_secret>
```

Start the backend server:
```bash
npm run start:dev
```

### 3. Frontend Setup
Navigate to the frontend directory and install dependencies:
```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` root:
```env
VITE_API_URL=http://localhost:5000/api/v1
```

Start the frontend development server:
```bash
npm run dev
```

---

## 📂 Project Structure

### Backend (`/backend`)
- **`src/app/modules`**: Contains feature-based modules (e.g., `user`, `report`, `artwork`).
- **`src/app/middlewares`**: Custom middlewares for auth, validation, etc.
- **`src/server.ts`**: Entry point for the backend application.

### Frontend (`/frontend`)
- **`src/pages`**: Main application pages (`Home`, `Gallery`, `Decode`, etc.).
- **`src/components`**: Reusable UI components.
- **`src/lib`**: Utility functions and configurations.
- **`src/store`**: Global state management stores.

---

## 🔮 Future Work

- [ ] **Unit & Integration Testing**: Implement comprehensive testing suites (Jest, Vitest).
- [ ] **CI/CD Pipelines**: Automate testing and deployment workflows.
- [ ] **Docker Support**: Containerize the application for consistent deployment environments.
- [ ] **Performance Optimization**: Implement caching strategies (Redis) for faster response times.
- [ ] **Advanced User Analytics**: Dashboard for detailed usage insights.

---

## 📄 License
This project is licensed under the ISC License.
