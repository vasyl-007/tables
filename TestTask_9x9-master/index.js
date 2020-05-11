"use strict";

const bigCube = {
  xMin: 1,
  xMax: 3,
  yMin: 1,
  yMax: 3,
};
const initialSmallCube = {
  x: 1,
  y: 1,
  // positionArrow: 'вверх спецсимвол'
};
const allArrows = [
  { id: 1, direction: "&#8593;", description: "вверх" },
  { id: 2, direction: "&#8595;", description: "вниз" },
  { id: 3, direction: "&#8594;", description: "направо" },
  { id: 4, direction: "&#8592;", description: "налево" },
];

console.log("allArrows", allArrows);
console.log("currentId", allArrows[0].id);

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

const getRandomArrows = (bigCube, initialSmallCube) => {
  let arrows = [];
  const min_arrowList = 1;
  function invokeArrow() {
    let result =
      Math.floor(Math.random() * (ARROWS_LIST - min_arrowList)) + min_arrowList;
    return result;

    // (case 1)
    if (
      initialSmallCube.x === bigCube.xMin &&
      initialSmallCube.y === bigCube.yMin
    ) {
      let curArrow;

      do {
        curArrow = invokeArrow();
      } while (curArrow === allArrows[3].id || curArrow === allArrows[1].id);
      // цикл буде выполняться до тех пор, пока значения будут 4 либо 2

      return arrows.push(curArrow);
    }
  }
  // if (initialSmallCube.x === bigCube.xMax) {
  //   // x увеличивать нельзя
  // }
  // if (initialSmallCube.y === bigCube.yMin) {
  //   // y уменьшать нельзя
  // }
  // if (initialSmallCube.y === bigCube.yMax) {
  //   // y увеличивать нельзя
  // }

  // (1) Xmin Ymin 	влево и вниз нельзя 	(4,2)
  // (2) Xmin Ynorm	влево нельзя		(4)
  // (3) Xmin Ymax	влево вверх нельзя 	(4,1)

  // (4) Xnorm Ymin	вниз нельзя		(2)
  // (5) Xnorm Ynorm ++++			нет исключений
  // (6) Xnorm Ymax	вверх нельзя		(1)

  // (7) Xmax Ymin	вправо и вниз нельзя	(3,2)
  // (8) Xmax Ynorm	вправо нельзя		(3)
  // (9) Xmax Ymax	вправо и вверх нельзя	(3,1)

  arrows.push(
    Math.floor(Math.random() * (ARROWS_LIST - min_arrowList)) + min_arrowList
  );
  // for (let i = 0; i < 10; i++) {
  //   const min_arrowList = 1;
  //   arrows.push(
  //     Math.floor(Math.random() * (ARROWS_LIST - min_arrowList)) + min_arrowList
  //   );
  // }
  console.log("arrows ---->", arrows);

  arrows.map((arrow) => {
    let action;
    switch (arrow) {
      case 1:
        console.log("Вверх");
        action = allArrows[0].direction;
        // action = "&#8593;";
        break;
      case 2:
        console.log("Вниз");
        action = allArrows[1].direction;
        // action = "&#8595;";
        break;
      case 3:
        console.log("Направо");
        action = allArrows[2].direction;
        // action = "&#8594;";
        break;
      case 4:
        console.log("Налево");
        action = allArrows[3].direction;
        // action = "&#8592;";
        break;
      default:
        console.log("Invalid subscription type");
    }

    const markupArrowList = `<li class="arrowItem">
    <span>${action}</span>
    </li>`;

    arrowList.insertAdjacentHTML("afterbegin", markupArrowList);
  });
};

getRandomArrows();
