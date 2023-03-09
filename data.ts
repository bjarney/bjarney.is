/** The value of the key used to indicate we want to show all themes */
export const ALL_THEMES = "💯 All Themes";

export const themes = [
  // A hack to include the "All Themes" as a filter button
  ALL_THEMES,

  // Poster themes
  "📷 Photography",
  "👛 Illustration",
  "🤘 Tattoos",
  "💦 Watercolor",
  "💎 Sketchbook",
] as const;

type Theme = (typeof themes)[number];

interface Poster {
  id: number;

  // The title of the poster. Ideally it should not end with a period.
  name: string;

  // A poster can belong to a theme and a Poster Q&A session
  themes: Theme[];
}

/** The posters that are displayed on the website */
export const posters: Poster[] = [
  {
    id: 1,
    name: "Poster name 1",
    themes: ["💎 Sketchbook"],
  },
  {
    id: 2,
    name: "Poster name 2",
    themes: ["👛 Illustration"],
  },
  {
    id: 3,
    name: "Poster name 3",
    themes: ["👛 Illustration"],
  },
  {
    id: 4,
    name: "Poster name 4",
    themes: ["👛 Illustration"],
  },
  {
    id: 5,
    name: "Poster name 5",
    themes: ["👛 Illustration"],
  },
  {
    id: 6,
    name: "Poster name 6",
    themes: ["🤘 Tattoos"],
  },
  {
    id: 7,
    name: "Poster name 7",
    themes: ["📷 Photography"],
  },
  {
    id: 8,
    name: "Poster name 8",
    themes: ["👛 Illustration"],
  },
  {
    id: 9,
    name: "Poster name 9",
    themes: ["💦 Watercolor"],
  },
  {
    id: 10,
    name: "Poster name 10",
    themes: ["🤘 Tattoos"],
  },
  {
    id: 11,
    name: "Poster name 11",
    themes: ["🤘 Tattoos"],
  },
  {
    id: 12,
    name: "Poster name 12",
    themes: ["🤘 Tattoos"],
  },
  {
    id: 13,
    name: "Poster name 12",
    themes: ["🤘 Tattoos"],
  },
  {
    id: 14,
    name: "Poster name 12",
    themes: ["🤘 Tattoos"],
  },
  {
    id: 15,
    name: "Poster name 12",
    themes: ["🤘 Tattoos"],
  },
  {
    id: 16,
    name: "Poster name 12",
    themes: ["🤘 Tattoos"],
  },
  {
    id: 17,
    name: "Poster name 12",
    themes: ["🤘 Tattoos"],
  },
];

/**
 * Returns the poster array filtered by theme. Returns all posters if all
 * themes is selected.
 */
export const getPostersByTheme = (theme) => {
  if (theme === ALL_THEMES) {
    return posters;
  } else {
    return posters.filter((poster) => poster.themes.includes(theme));
  }
};
