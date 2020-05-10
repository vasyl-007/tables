"use strict";
// import shortId from "shortid";
const RANDOM_POSITION = 9;

const ARROWS_LIST = 5;
const arrowList = document.getElementById("arrows");

function getRandomPosition(RANDOM_POSITION) {
  let initialPosition = Math.floor(Math.random(RANDOM_POSITION) * 10);
  if (initialPosition === 0) {
    return (initialPosition = 1);
  }
  console.log("initialPosition", initialPosition);
  const activeItem = document.getElementById(`${initialPosition.toString()}`);
  activeItem.insertAdjacentHTML("afterbegin", `${initialPosition.toString()}`);
}

getRandomPosition();
const getRandomArrows = () => {
  let arrows = [];
  for (let i = 0; i < 10; i++) {
    const min_arrowList = 1;
    arrows.push(
      Math.floor(Math.random() * (ARROWS_LIST - min_arrowList)) + min_arrowList
    );
  }
  console.log("arrows ---->", arrows);

  arrows.map((arrow) => {
    const markupArrowList = `<li class="arrowItem">
    <span>${arrow}</span>
    </li>`;

    arrowList.insertAdjacentHTML("afterbegin", markupArrowList);
  });

  // console.log("arrowList", arrowList);

  // arr.map((film) => {
  //   const markup = `
  // <li data-id="${film.id}" class="films_list-item">
  //   <img
  //     src="https://image.tmdb.org/t/p/w500${film.backdrop_path}"
  //     alt="${film.title} image"
  //     class="films_list-item-image"
  //   >
  //   <h3 class="films_list-item-title">${film.title} (<span>${film.release_date}</span>)</h3>
  // </li>
  // `;
  //   refs.filmsContainer.insertAdjacentHTML("beforeend", markup);
  // });
};

getRandomArrows();
