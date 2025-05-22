"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { signUpAPI } from "../services/operations/auth"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, location } = formData
    dispatch(signUpAPI(name, email, password, location, navigate))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">{t("register.title")}</h2>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">{t("register.fullName")}</label>
          <input
            type="text"
            name="name"
            placeholder={t("register.fullName")}
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">{t("register.email")}</label>
          <input
            type="email"
            name="email"
            placeholder={t("register.email")}
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">{t("register.password")}</label>
          <input
            type="password"
            name="password"
            placeholder={t("register.password")}
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">{t("register.location")}</label>
          <input
            type="text"
            name="location"
            placeholder={t("register.location")}
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          {t("register.signUp")}
        </button>

        <p className="text-center text-sm text-gray-600">
          {t("register.haveAccount")}{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            {t("register.login")}
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register
