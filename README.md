# CurrencyCoverter
A MERN stack project to convert currencies based on real time exchange rates 

A web application that allows users to easily convert between different currencies using real-time exchange rates fetched from an external API. This project includes both a **frontend** built with React and a **backend** developed with Express.

---

## Features

- **Real-time Currency Conversion**: Fetch and display live exchange rates using the Exchange Rates API.
- **User-Friendly Interface**: Interactive and responsive UI built with React.
- **Secure**: API key stored securely in a `.env` file.
- **Rate Limiting**: Prevents abuse by limiting API requests on the backend.

---

## Tech Stack

### Frontend
- **React**: Core library for building the user interface.
- **Vite**: Development server and build tool for fast development.
- **Axios**: HTTP client for API calls.

### Backend
- **Express**: Web framework for handling requests.
- **Axios**: For making API requests to the exchange rates service.
- **dotenv**: For managing environment variables.
- **cors**: Cross-origin resource sharing.
- **express-rate-limit**: To limit excessive API requests.

---

## Prerequisites

Ensure you have the following installed:
- **Node.js**: v14+ 
- **npm**: v6+

---

## Installation

### Clone the repository
```bash
git clone <repository-url>
cd currency-converter
```

Thank you for providing the API documentation link. Here's a revised README section for the Currency Converter website, incorporating information from the provided documentation:

---

## API Integration Details

### API Used: [Exchange Rate API](https://www.exchangerate-api.com/docs/overview)

The **Exchange Rate API** is used to fetch real-time currency exchange rates for accurate conversions.

#### API Key

- Your API key must be added securely in the `.env` file under `EXCHANGE_RATE_API_KEY`.
  ```plaintext
  EXCHANGE_RATE_API_KEY=************
  ```

#### API Features

- Provides up-to-date exchange rates between multiple currencies.
- Supports various currencies and allows easy integration into web applications.

---

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory and add your Exchange Rates API key:
   ```plaintext
   EXCHANGE_RATE_API_KEY=************
   ```
4. Start the backend server:
   ```bash
   node app.js
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open the frontend in your browser (default: `http://localhost:5173`).
2. Enter the amount and select the currencies you want to convert.
3. View the converted amount based on real-time exchange rates.

---

## API Details

This app uses the **Exchange Rates API** to fetch real-time data. Make sure to:
- Register at the Exchange Rates API provider to get an API key.
- Add the API key to the `.env` file under `EXCHANGE_RATE_API_KEY`.

---

## Scripts

### Backend
- **Start the server**: 
  ```bash
  node app.js
  ```

### Frontend
- **Start development server**:
  ```bash
  npm run dev
  ```
- **Build for production**:
  ```bash
  npm run build
  ```
- **Preview production build**:
  ```bash
  npm run preview
  ```

---

## Folder Structure

### Backend
```
backend/
│
├── app.js               # Entry point for the backend server
├── package.json         # Backend dependencies and scripts
├── .env                 # Environment variables (API key)
└── node_modules/        # Backend dependencies
```

### Frontend
```
frontend/
│
├── src/
│   ├── App.jsx          # Main React component
│   ├── index.jsx        # React DOM rendering
│   └── components/      # Reusable React components
│
├── package.json         # Frontend dependencies and scripts
├── vite.config.js       # Vite configuration
└── node_modules/        # Frontend dependencies
```

---
