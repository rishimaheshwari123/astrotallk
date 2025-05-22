"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginAPI } from "../services/operations/auth"
import { useNavigate, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = formData
    dispatch(loginAPI(email, password, navigate))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">{t("login.title")}</h2>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">{t("login.email")}</label>
          <input
            type="email"
            name="email"
            placeholder={t("login.email")}
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">{t("login.password")}</label>
          <input
            type="password"
            name="password"
            placeholder={t("login.password")}
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition duration-300"
        >
          {t("login.loginButton")}
        </button>

        <p className="text-center text-sm text-gray-600">
          {t("login.noAccount")}{" "}
          <Link to="/register" className="text-purple-600 hover:underline">
            {t("login.register")}
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
