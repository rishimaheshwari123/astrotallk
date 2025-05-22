import { toast } from "react-toastify"

// Using aztro API for horoscope data with a CORS proxy
const API_BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://aztro.sameerkumar.website"

// Mock data for fallback when API fails
const MOCK_HOROSCOPE_DATA = {
  aries: {
    daily: {
      date_range: "Mar 21 - Apr 19",
      current_date: new Date().toLocaleDateString(),
      description:
        "Today brings a surge of energy and motivation. Channel it into productive activities to make the most of this dynamic day.",
      compatibility: "Leo",
      mood: "Energetic",
      color: "Red",
      lucky_number: "7",
      lucky_time: "8:00am"
    },
    weekly: {
      date_range: "Mar 21 - Apr 19",
      current_date: new Date().toLocaleDateString(),
      description:
        "This week highlights your leadership abilities. Take initiative on projects and don't be afraid to voice your ideas. Your confidence will inspire others.",
      compatibility: "Sagittarius",
      mood: "Determined",
      color: "Orange",
      lucky_number: "9",
      lucky_time: "3:30pm"
    },
    monthly: {
      date_range: "Mar 21 - Apr 19",
      current_date: new Date().toLocaleDateString(),
      description:
        "This month brings opportunities for growth in your career. Stay focused on your goals and be willing to step outside your comfort zone.",
      compatibility: "Aquarius",
      mood: "Ambitious",
      color: "Yellow",
      lucky_number: "5",
      lucky_time: "11:00am"
    },
    yearly: {
      date_range: "Mar 21 - Apr 19",
      current_date: new Date().toLocaleDateString("en-US", { year: "numeric" }),
      description:
        "This year brings significant growth opportunities for Aries. Focus on your long-term goals and personal development. Your courage and determination will lead to success in various aspects of life.",
      compatibility: "Libra",
      mood: "Transformative",
      color: "Gold",
      lucky_number: "1",
      lucky_time: "12:00pm"
    },
    love: {
      date_range: "Mar 21 - Apr 19",
      current_date: new Date().toLocaleDateString(),
      description:
        "Love forecast: Your passionate nature is highlighted now. Express your feelings openly to strengthen bonds. For singles, be bold in your approach to new connections.",
      compatibility: "Leo",
      mood: "Passionate",
      color: "Pink",
      lucky_number: "2",
      lucky_time: "7:00pm"
    }
  },
  // Add basic mock data for at least one more sign
  taurus: {
    daily: {
      date_range: "Apr 20 - May 20",
      current_date: new Date().toLocaleDateString(),
      description:
        "Today calls for patience and persistence. Focus on practical matters and avoid rushing important decisions.",
      compatibility: "Virgo",
      mood: "Steady",
      color: "Green",
      lucky_number: "6",
      lucky_time: "9:15am"
    },
    weekly: {
      date_range: "Apr 20 - May 20",
      current_date: new Date().toLocaleDateString(),
      description:
        "This week emphasizes financial matters. Look for ways to strengthen your security and consider long-term investments.",
      compatibility: "Capricorn",
      mood: "Grounded",
      color: "Blue",
      lucky_number: "4",
      lucky_time: "2:00pm"
    },
    monthly: {
      date_range: "Apr 20 - May 20",
      current_date: new Date().toLocaleDateString(),
      description:
        "This month highlights your personal relationships. Nurture connections with loved ones and be open to resolving any lingering conflicts.",
      compatibility: "Cancer",
      mood: "Harmonious",
      color: "Purple",
      lucky_number: "8",
      lucky_time: "5:30pm"
    },
    yearly: {
      date_range: "Apr 20 - May 20",
      current_date: new Date().toLocaleDateString("en-US", { year: "numeric" }),
      description:
        "This year emphasizes stability and growth for Taurus. Your practical approach to challenges will serve you well. Focus on building solid foundations in all areas of life.",
      compatibility: "Scorpio",
      mood: "Progressive",
      color: "Emerald",
      lucky_number: "5",
      lucky_time: "10:00am"
    },
    love: {
      date_range: "Apr 20 - May 20",
      current_date: new Date().toLocaleDateString(),
      description:
        "Love forecast: Your sensual nature is enhanced during this period. For couples, focus on physical and emotional connection. Singles may find attraction with someone who appreciates your loyalty.",
      compatibility: "Cancer",
      mood: "Sensual",
      color: "Rose",
      lucky_number: "6",
      lucky_time: "8:30pm"
    }
  }
}

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
    daily: `Today brings new insights for ${sign}. Trust your intuition and remain flexible to adapt to changing circumstances.`,
    weekly: `This week offers ${sign} opportunities for growth and progress. Focus your energy on what matters most to you.`,
    monthly: `This month highlights personal development for ${sign}. Take time to reflect on your goals and adjust your path accordingly.`,
    yearly: `This year brings significant growth opportunities for ${sign}. Focus on your long-term goals and personal development.`,
    love: `Love forecast: Your romantic life is influenced by planetary movements that encourage deeper connections. Open your heart to new possibilities.`
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
