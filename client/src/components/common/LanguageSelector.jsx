"use client"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Globe, Languages, ChevronDown } from "lucide-react"

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState("en")

  const languages = [
    {
      code: "en",
      label: "English",
      icon: "🇬🇧",
    },
    {
      code: "hi",
      label: "हिन्दी",
      icon: "🇮🇳",
    },
  ]

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en"
    setSelectedLang(savedLang)
    i18n.changeLanguage(savedLang)
  }, [i18n])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setSelectedLang(lng)
    localStorage.setItem("language", lng)
    setDropdownOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md shadow hover:bg-gray-200 transition-all duration-200"
      >
        <Languages className="w-5 h-5" />
        <span className="hidden sm:inline">{languages.find(l => l.code === selectedLang)?.label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {dropdownOpen && (
        <div className="absolute z-10 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${
                  selectedLang === lang.code ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                <span className="mr-2">{lang.icon}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
