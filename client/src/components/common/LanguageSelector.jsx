"use client"
import { useTranslation } from "react-i18next"

const LanguageSelector = () => {
  const { i18n, t } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    // Save the language preference to localStorage
    localStorage.setItem("language", lng)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 rounded ${
          i18n.language === "en" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {t("languageSelector.english")}
      </button>
      <button
        onClick={() => changeLanguage("hi")}
        className={`px-2 py-1 rounded ${
          i18n.language === "hi" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {t("languageSelector.hindi")}
      </button>
    </div>
  )
}

export default LanguageSelector
