export const ZODIAC_SIGNS = [
  {
    name: "aries",
    displayName: "Aries",
    element: "fire",
    symbol: "♈",
    dateRange: "Mar 21 - Apr 19",
    traits: [
      "Courageous",
      "Determined",
      "Confident",
      "Enthusiastic",
      "Impulsive",
    ],
  },
  {
    name: "taurus",
    displayName: "Taurus",
    element: "earth",
    symbol: "♉",
    dateRange: "Apr 20 - May 20",
    traits: ["Reliable", "Patient", "Practical", "Devoted", "Stubborn"],
  },
  {
    name: "gemini",
    displayName: "Gemini",
    element: "air",
    symbol: "♊",
    dateRange: "May 21 - Jun 20",
    traits: ["Adaptable", "Curious", "Affectionate", "Social", "Inconsistent"],
  },
  {
    name: "cancer",
    displayName: "Cancer",
    element: "water",
    symbol: "♋",
    dateRange: "Jun 21 - Jul 22",
    traits: ["Tenacious", "Loyal", "Emotional", "Sympathetic", "Moody"],
  },
  {
    name: "leo",
    displayName: "Leo",
    element: "fire",
    symbol: "♌",
    dateRange: "Jul 23 - Aug 22",
    traits: ["Creative", "Passionate", "Generous", "Warm-hearted", "Arrogant"],
  },
  {
    name: "virgo",
    displayName: "Virgo",
    element: "earth",
    symbol: "♍",
    dateRange: "Aug 23 - Sep 22",
    traits: ["Analytical", "Kind", "Hardworking", "Practical", "Critical"],
  },
  {
    name: "libra",
    displayName: "Libra",
    element: "air",
    symbol: "♎",
    dateRange: "Sep 23 - Oct 22",
    traits: ["Diplomatic", "Fair", "Social", "Idealistic", "Indecisive"],
  },
  {
    name: "scorpio",
    displayName: "Scorpio",
    element: "water",
    symbol: "♏",
    dateRange: "Oct 23 - Nov 21",
    traits: ["Resourceful", "Brave", "Passionate", "Secretive", "Jealous"],
  },
  {
    name: "sagittarius",
    displayName: "Sagittarius",
    element: "fire",
    symbol: "♐",
    dateRange: "Nov 22 - Dec 21",
    traits: [
      "Generous",
      "Idealistic",
      "Enthusiastic",
      "Philosophical",
      "Restless",
    ],
  },
  {
    name: "capricorn",
    displayName: "Capricorn",
    element: "earth",
    symbol: "♑",
    dateRange: "Dec 22 - Jan 19",
    traits: [
      "Responsible",
      "Disciplined",
      "Self-control",
      "Practical",
      "Unforgiving",
    ],
  },
  {
    name: "aquarius",
    displayName: "Aquarius",
    element: "air",
    symbol: "♒",
    dateRange: "Jan 20 - Feb 18",
    traits: ["Independent", "Original", "Humanitarian", "Progressive", "Aloof"],
  },
  {
    name: "pisces",
    displayName: "Pisces",
    element: "water",
    symbol: "♓",
    dateRange: "Feb 19 - Mar 20",
    traits: ["Compassionate", "Intuitive", "Artistic", "Gentle", "Escapist"],
  },
];

export const getElementColor = (element) => {
  switch (element) {
    case "fire":
      return "bg-gradient-to-br from-red-500 to-orange-400";
    case "earth":
      return "bg-gradient-to-br from-green-600 to-emerald-400";
    case "air":
      return "bg-gradient-to-br from-blue-400 to-cyan-300";
    case "water":
      return "bg-gradient-to-br from-blue-600 to-indigo-400";
    default:
      return "bg-gradient-to-br from-purple-600 to-indigo-400";
  }
};

export const getElementBorderColor = (element) => {
  switch (element) {
    case "fire":
      return "border-orange-400";
    case "earth":
      return "border-green-500";
    case "air":
      return "border-blue-400";
    case "water":
      return "border-blue-600";
    default:
      return "border-purple-500";
  }
};
