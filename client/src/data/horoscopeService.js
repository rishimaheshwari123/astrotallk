import { useTranslation } from "react-i18next";
import { toast } from "react-toastify"
  const { i18n } = useTranslation();

  const isHindi = i18n.language === "hi";

// Using aztro API for horoscope data with a CORS proxy
const API_BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://aztro.sameerkumar.website"

// Mock data for fallback when API fails
const MOCK_HOROSCOPE_DATA = {
  aries: {
    daily: {
      date_range: "Mar 21 - Apr 19",
      current_date: new Date().toLocaleDateString(),
      description: isHindi
        ? "आज आपके भीतर ऊर्जा और प्रेरणा की लहर है। इस गतिशील दिन का लाभ उठाने के लिए इसे उत्पादक गतिविधियों में लगाएं।"
        : "Today brings a surge of energy and motivation. Channel it into productive activities to make the most of this dynamic day.",
      compatibility: isHindi ? "सिंह" : "Leo",
      mood: isHindi ? "ऊर्जावान" : "Energetic",
      color: isHindi ? "लाल" : "Red",
      lucky_number: "7",
      lucky_time: "8:00am"
    },
    weekly: {
      date_range: "Mar 21 - Apr 19",
      current_date: new Date().toLocaleDateString(),
      description: isHindi
        ? "इस सप्ताह आपकी नेतृत्व क्षमता उभरकर सामने आएगी। परियोजनाओं में पहल करें और अपने विचार स्पष्ट रूप से व्यक्त करने से न डरें।"
        : "This week highlights your leadership abilities. Take initiative on projects and don't be afraid to voice your ideas.",
      compatibility: isHindi ? "धनु" : "Sagittarius",
      mood: isHindi ? "दृढ़निश्चयी" : "Determined",
      color: isHindi ? "नारंगी" : "Orange",
      lucky_number: "9",
      lucky_time: "3:30pm"
    },
    monthly: {
      date_range: "Mar 21 - Apr 19",
      current_date: new Date().toLocaleDateString(),
      description: isHindi
        ? "यह महीना आपके करियर में वृद्धि के अवसर लाता है। अपने लक्ष्यों पर ध्यान केंद्रित करें और अपने कम्फर्ट ज़ोन से बाहर निकलने को तैयार रहें।"
        : "This month brings opportunities for growth in your career. Stay focused on your goals and be willing to step outside your comfort zone.",
      compatibility: isHindi ? "कुंभ" : "Aquarius",
      mood: isHindi ? "महत्त्वाकांक्षी" : "Ambitious",
      color: isHindi ? "पीला" : "Yellow",
      lucky_number: "5",
      lucky_time: "11:00am"
    },
    yearly: {
      date_range: "Mar 21 - Apr 19",
      current_date: new Date().toLocaleDateString("en-US", { year: "numeric" }),
      description: isHindi
        ? "यह वर्ष मेष राशि के लिए महत्वपूर्ण विकास के अवसर लाता है। अपने दीर्घकालिक लक्ष्यों और व्यक्तिगत विकास पर ध्यान दें। आपका साहस और दृढ़ संकल्प जीवन के विभिन्न क्षेत्रों में सफलता दिलाएगा।"
        : "This year brings significant growth opportunities for Aries. Focus on your long-term goals and personal development. Your courage and determination will lead to success in various aspects of life.",
      compatibility: isHindi ? "तुला" : "Libra",
      mood: isHindi ? "परिवर्तनकारी" : "Transformative",
      color: isHindi ? "सोना" : "Gold",
      lucky_number: "1",
      lucky_time: "12:00pm"
    },
    love: {
      date_range: "Mar 21 - Apr 19",
      current_date: new Date().toLocaleDateString(),
      description: isHindi
        ? "प्रेम पूर्वानुमान: इस समय आपकी जुनूनी प्रकृति प्रबल है। अपने भावनाओं को खुलकर व्यक्त करें। अकेले लोग आत्मविश्वास से नए संबंध बना सकते हैं।"
        : "Love forecast: Your passionate nature is highlighted now. Express your feelings openly to strengthen bonds. For singles, be bold in your approach to new connections.",
      compatibility: isHindi ? "सिंह" : "Leo",
      mood: isHindi ? "जुनूनी" : "Passionate",
      color: isHindi ? "गुलाबी" : "Pink",
      lucky_number: "2",
      lucky_time: "7:00pm"
    }
  },

  taurus: {
    daily: {
      date_range: "Apr 20 - May 20",
      current_date: new Date().toLocaleDateString(),
      description: isHindi
        ? "आज धैर्य और स्थिरता की आवश्यकता है। व्यावहारिक मामलों पर ध्यान दें और महत्वपूर्ण निर्णय लेने में जल्दबाज़ी से बचें।"
        : "Today calls for patience and persistence. Focus on practical matters and avoid rushing important decisions.",
      compatibility: isHindi ? "कन्या" : "Virgo",
      mood: isHindi ? "स्थिर" : "Steady",
      color: isHindi ? "हरा" : "Green",
      lucky_number: "6",
      lucky_time: "9:15am"
    },
    weekly: {
      date_range: "Apr 20 - May 20",
      current_date: new Date().toLocaleDateString(),
      description: isHindi
        ? "इस सप्ताह वित्तीय मामलों पर ध्यान केंद्रित करें। अपनी सुरक्षा को मजबूत करने के तरीके खोजें और दीर्घकालिक निवेश पर विचार करें।"
        : "This week emphasizes financial matters. Look for ways to strengthen your security and consider long-term investments.",
      compatibility: isHindi ? "मकर" : "Capricorn",
      mood: isHindi ? "जमीनी" : "Grounded",
      color: isHindi ? "नीला" : "Blue",
      lucky_number: "4",
      lucky_time: "2:00pm"
    },
    monthly: {
      date_range: "Apr 20 - May 20",
      current_date: new Date().toLocaleDateString(),
      description: isHindi
        ? "यह महीना आपके व्यक्तिगत संबंधों को उजागर करता है। अपने प्रियजनों से संबंधों को पोषित करें और किसी भी अनसुलझे मतभेदों को सुलझाने के लिए तैयार रहें।"
        : "This month highlights your personal relationships. Nurture connections with loved ones and be open to resolving any lingering conflicts.",
      compatibility: isHindi ? "कर्क" : "Cancer",
      mood: isHindi ? "सामंजस्यपूर्ण" : "Harmonious",
      color: isHindi ? "बैंगनी" : "Purple",
      lucky_number: "8",
      lucky_time: "5:30pm"
    },
    yearly: {
      date_range: "Apr 20 - May 20",
      current_date: new Date().toLocaleDateString("en-US", { year: "numeric" }),
      description: isHindi
        ? "यह वर्ष वृषभ के लिए स्थिरता और विकास का संकेत देता है। चुनौतियों का सामना करने के लिए आपका व्यावहारिक दृष्टिकोण मददगार साबित होगा। जीवन के हर क्षेत्र में ठोस नींव बनाने पर ध्यान दें।"
        : "This year emphasizes stability and growth for Taurus. Your practical approach to challenges will serve you well. Focus on building solid foundations in all areas of life.",
      compatibility: isHindi ? "वृश्चिक" : "Scorpio",
      mood: isHindi ? "प्रगतिशील" : "Progressive",
      color: isHindi ? "पन्ना" : "Emerald",
      lucky_number: "5",
      lucky_time: "10:00am"
    },
    love: {
      date_range: "Apr 20 - May 20",
      current_date: new Date().toLocaleDateString(),
      description: isHindi
        ? "प्रेम पूर्वानुमान: इस समय आपकी कामुक प्रकृति अधिक सक्रिय है। जोड़े अपने शारीरिक और भावनात्मक जुड़ाव पर ध्यान दें। अकेले लोग ऐसे व्यक्ति से आकर्षित हो सकते हैं जो आपकी निष्ठा को सराहता हो।"
        : "Love forecast: Your sensual nature is enhanced during this period. For couples, focus on physical and emotional connection. Singles may find attraction with someone who appreciates your loyalty.",
      compatibility: isHindi ? "कर्क" : "Cancer",
      mood: isHindi ? "कामुक" : "Sensual",
      color: isHindi ? "गुलाब" : "Rose",
      lucky_number: "6",
      lucky_time: "8:30pm"
    }
  }
};


// Function to generate mock data for any sign not explicitly defined
const generateMockData = (sign, type) => {
  const dateRanges = {
    aries: "Mar 21 - Apr 19",
    taurus: "Apr 20 - May 20",
    gemini: "May 21 - Jun 20",
    cancer: "Jun 21 - Jul 22",
    leo: "Jul 23 - Aug 22",
    virgo: "Aug 23 - Sep 22",
    libra: "Sep 23 - Oct 22",
    scorpio: "Oct 23 - Nov 21",
    sagittarius: "Nov 22 - Dec 21",
    capricorn: "Dec 22 - Jan 19",
    aquarius: "Jan 20 - Feb 18",
    pisces: "Feb 19 - Mar 20"
  }

const descriptions = {
  daily: isHindi
    ? `आज का दिन ${sign} राशि वालों के लिए नई समझ और बदलाव लेकर आ सकता है। परिस्थितियों के अनुसार ढलने के लिए लचीलापन बनाए रखें।`
    : `Today brings new insights for ${sign}. Trust your intuition and remain flexible to adapt to changing circumstances.`,
  weekly: isHindi
    ? `इस सप्ताह ${sign} राशि को उन्नति के अवसर मिल सकते हैं। अपने प्रयासों को सही दिशा में केंद्रित करें।`
    : `This week offers ${sign} opportunities for growth and progress. Focus your energy on what matters most to you.`,
  monthly: isHindi
    ? `इस महीने ${sign} राशि वालों के लिए आत्मविकास महत्वपूर्ण रहेगा। अपने लक्ष्यों पर पुनः विचार करें और योजनाओं में सुधार करें।`
    : `This month highlights personal development for ${sign}. Take time to reflect on your goals and adjust your path accordingly.`,
  yearly: isHindi
    ? `यह वर्ष ${sign} राशि के लिए विशेष उपलब्धियों और विकास का समय हो सकता है। लंबी अवधि के लक्ष्यों पर ध्यान दें।`
    : `This year brings significant growth opportunities for ${sign}. Focus on your long-term goals and personal development.`,
  love: isHindi
    ? `प्रेम पूर्वानुमान: यह समय भावनात्मक जुड़ाव को प्रोत्साहित करता है। अपने दिल की बात कहने से पीछे न हटें।`
    : `Love forecast: Your romantic life is influenced by planetary movements that encourage deeper connections. Open your heart to new possibilities.`
}


  return {
    date_range: dateRanges[sign] || "Unknown",
    current_date:
      type === "yearly"
        ? new Date().toLocaleDateString("en-US", { year: "numeric" })
        : new Date().toLocaleDateString(),
    description: descriptions[type],
    compatibility: ["Leo", "Gemini", "Libra", "Aquarius", "Cancer"][
      Math.floor(Math.random() * 5)
    ],
    mood: ["Reflective", "Energetic", "Calm", "Inspired", "Focused"][
      Math.floor(Math.random() * 5)
    ],
    color: ["Blue", "Purple", "Green", "Red", "Yellow"][
      Math.floor(Math.random() * 5)
    ],
    lucky_number: String(Math.floor(Math.random() * 10) + 1),
    lucky_time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(
      Math.random() * 6
    )}0${Math.random() > 0.5 ? "am" : "pm"}`
  }
}

export const fetchHoroscope = async (sign, type) => {
  try {
    // Try to fetch from API first
    const day = type === "yearly" ? "week" : type === "love" ? "today" : type

    try {
      const response = await fetch(`${API_BASE_URL}?sign=${sign}&day=${day}`, {
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      })

      if (response.ok) {
        const data = await response.json()

        // Modify the response for yearly and love horoscopes
        if (type === "yearly") {
          return {
            ...data,
            description: `Your yearly outlook: ${data.description} This year brings significant growth opportunities for ${sign}. Focus on your long-term goals and personal development.`,
            current_date: new Date().toLocaleDateString("en-US", {
              year: "numeric"
            })
          }
        }

        if (type === "love") {
          return {
            ...data,
            description: `Love forecast: ${data.description} Your romantic life is influenced by planetary movements that encourage deeper connections. Open your heart to new possibilities.`
          }
        }

        return data
      }
    } catch (apiError) {
      console.log("API error, falling back to mock data:", apiError)
      // Continue to fallback if API fails
    }

    // Fallback to mock data
    console.log(`Using mock data for ${sign} ${type} horoscope`)

    // Check if we have predefined mock data for this sign and type
    if (MOCK_HOROSCOPE_DATA[sign]?.[type]) {
      return MOCK_HOROSCOPE_DATA[sign][type]
    } else {
      // Generate mock data for this sign and type
      return generateMockData(sign, type)
    }
  } catch (error) {
    console.error("Error fetching horoscope:", error)
    toast.error("Failed to get your horoscope. Please try again later.")
    return null
  }
}
