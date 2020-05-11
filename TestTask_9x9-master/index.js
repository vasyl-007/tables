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
};

const coordXY = [
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 2],
  [2, 3],
  [3, 1],
  [3, 2],
  [3, 3],
];


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

  if (initialSmallCube.x === bigCube.xMin) {
    
    // x уменьшать нельзя

  }
  if (initialSmallCube.x === bigCube.xMax) {
    // x увеличивать нельзя
  }
  if (initialSmallCube.y === bigCube.yMin) {
    // y уменьшать нельзя
  }
  if (initialSmallCube.y === bigCube.yMax) {
    // y увеличивать нельзя
  }
  
  
  const min_arrowList = 1;
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
        // action = "Hello!";
        console.log("123");
        action = "&#8593;";
        break;
      case 2:
        // action = "Hello!";
        console.log("123");
        action = "&#8595;";
        break;
      case 3:
        // action = "Hello!";
        console.log("123");
        action = "&#8594;";
        break;
      case 4:
        // action = "Hello!";
        console.log("123");
        action = "&#8592;";
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
