// Central list of skill categories.

export const SKILLS = [
  { id: "1",  icon: "🧱", en: "Mason",          ur: "میسن / مزدور",        pa: "میسن"       },
  { id: "2",  icon: "🔌", en: "Electrician",    ur: "الیکٹریشن",            pa: "بجلی والا"  },
  { id: "3",  icon: "🚰", en: "Plumber",        ur: "پلمبر",                pa: "نلکا ساز"   },
  { id: "4",  icon: "🎨", en: "Painter",        ur: "پینٹر",                pa: "رنگ ساز"    },
  { id: "5",  icon: "🪵", en: "Carpenter",      ur: "کارپینٹر / بڑھئی",    pa: "تارکھان"    },
  { id: "6",  icon: "📦", en: "Loader",         ur: "سامان اٹھانے والا",    pa: "بوجھ چک"   },
  { id: "7",  icon: "🌾", en: "Farm Worker",    ur: "کسان / کھیتی مزدور",  pa: "کھیتی کار"  },
  { id: "8",  icon: "🚗", en: "Driver",         ur: "ڈرائیور",              pa: "ڈرائیور"    },
  { id: "9",  icon: "🔥", en: "Welder",         ur: "ویلڈر",                pa: "ویلڈر"      },
  { id: "10", icon: "🧹", en: "Cleaner",        ur: "صفائی والا",           pa: "صفائی والا" },
  { id: "11", icon: "🧰", en: "General Labour", ur: "عام مزدور",            pa: "عام مزدور"  },
  { id: "12", icon: "🏗️", en: "Tile Worker",   ur: "ٹائل لگانے والا",     pa: "ٹائل ورکر"  },
];

export function skillLabel(skill, lang = "ur") {
  if (!skill) return "";
  return skill[lang] || skill.en;
}