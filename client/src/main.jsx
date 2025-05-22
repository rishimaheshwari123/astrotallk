import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store.js"
import { ToastContainer } from "react-toastify"
import "./i18n/i18n" // Import i18n configuration

// Initialize language from localStorage or default to English
const savedLanguage = localStorage.getItem("language") || "en"
import i18n from "./i18n/i18n"
i18n.changeLanguage(savedLanguage)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="mt-32">
          <App />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
