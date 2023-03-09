"use client";

import React, { useState } from "react";

import { ALL_THEMES, getPostersByTheme, themes } from "../data";

/** Displays posters in a grid that's appropriate for the device with */
const PosterGallery = ({ posters }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 row-gap-4 md:mx-10 mb-20">
      {posters.map((poster) => (
        <Poster poster={poster} key={poster.id} />
      ))}
    </div>
  );
};

/** A poster card with a poster thumbnail, presenter name and poster title. */
const Poster = ({ poster }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <PosterThumbnail poster={poster} />
    </div>
  );
};

/** An image that links to the PDF of a poster. Placeholder img & PDF if poster PDF is missing. */
const PosterThumbnail = ({ poster }) => {
  const imgHref = `/images/${poster.id}.png`;

  return (
    <a href={imgHref} className="text-center text-psOrange hover:text-psBlack">
      <img src={imgHref} className="rounded p-5 mx-auto grow" />
    </a>
  );
};

/** List of all available themes as a <a> link styled as a button */
const Themes = ({ selectedTheme, themes, onThemeSelected }) => {
  const selectedStyle =
    "border border-psBlack rounded bg-psBlack text-white py-2 px-4 m-1";
  const normalStyle =
    "border border-white rounded hover:border-gray-200 text-psOrange hover:bg-psOrange hover:text-white py-2 px-4 m-1";

  return themes.map((theme) => {
    const style = theme === selectedTheme ? selectedStyle : normalStyle;

    return (
      <a className={style} key={theme} onClick={() => onThemeSelected(theme)}>
        {theme}
      </a>
    );
  });
};

const ThemePicker = ({ selectedTheme, onThemeSelected }) => {
  return (
    <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mx-10 text-center">
      <Themes
        themes={themes}
        selectedTheme={selectedTheme}
        onThemeSelected={onThemeSelected}
      />
    </nav>
  );
};

function Page() {
  const [selectedTheme, setSelectedTheme] = useState(ALL_THEMES);

  return (
    <>
      <header className="mt-5">
        <h1 className="text-4xl font-bold text-center">Bjarney</h1>
      </header>

      <div className="w-10/12 md:w-8/12 lg:w-6/12 m-20 mt-10 mx-auto">
        <p className="text-center mb-10">Portfolio</p>
      </div>

      <main>
        <ThemePicker
          selectedTheme={selectedTheme}
          onThemeSelected={setSelectedTheme}
        />
        <PosterGallery posters={getPostersByTheme(selectedTheme)} />
      </main>
    </>
  );
}

export default Page;
