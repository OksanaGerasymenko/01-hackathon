import { Module } from "../core/module";
import { random } from "../../src/utils";

export class ShapeModule extends Module {
  constructor() {
    super("shape", "Создать фигуру");
  }
  #makeCircle() {
    const shapeHTML = document.createElement("div");

    shapeHTML.classList.add("shape");
    shapeHTML.style.position = 'relative'
    shapeHTML.style.width = `${random(20, 100)}px`;
    shapeHTML.style.height = shapeHTML.style.width;
    shapeHTML.style.borderRadius = `50%`;
    shapeHTML.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0,255)}, ${random(0, 255)})`;
    shapeHTML.style.top = `${random(0, 80)}%`;
    shapeHTML.style.left = `${random(0, 80)}%`;
    
    setTimeout(() => {
      shapeHTML.animate([
        { transform: 'rotateY(180deg)'}
       ], {
         duration: 1000
       })
    }, 300);

    document.body.append(shapeHTML);

    setTimeout(() => {
      shapeHTML.remove();
    }, 2000);
    return shapeHTML;
  }

  #makeSquare() {
    const shapeHTML = document.createElement("div");

    shapeHTML.classList.add("shape");
    shapeHTML.style.position = 'relative'
    shapeHTML.style.width = `${random(20, 100)}px`;
    shapeHTML.style.height = shapeHTML.style.width;
    shapeHTML.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0,255)}, ${random(0, 255)})`;
    shapeHTML.style.top = `${random(0, 80)}%`;
    shapeHTML.style.left = `${random(0, 80)}%`;
    
    setTimeout(() => {
      shapeHTML.animate([
        { transform: 'rotate(180deg)'}
       ], {
         duration: 1000
       })
    }, 300);

    document.body.append(shapeHTML);

    setTimeout(() => {
      shapeHTML.remove();
    }, 2000);
    return shapeHTML;
  }

  #makeEllipseHorizont() {
    const shapeHTML = document.createElement("div");
    const randomNumber = random(20,100);

    shapeHTML.classList.add("shape");
    shapeHTML.style.position = 'relative'
    shapeHTML.style.width = `${randomNumber}px`;
    shapeHTML.style.height = `${randomNumber/2}px`;
    shapeHTML.style.borderRadius = `${randomNumber}px/${randomNumber/2}px`;
    shapeHTML.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0,255)}, ${random(0, 255)})`;
    shapeHTML.style.top = `${random(0, 80)}%`;
    shapeHTML.style.left = `${random(0, 80)}%`;

    setTimeout(() => {
      shapeHTML.animate([
        { transform: 'rotateY(180deg)'}
       ], {
         duration: 1000
       })
    }, 300);

    document.body.append(shapeHTML);

    setTimeout(() => {
      shapeHTML.remove();
    }, 2000);
    return shapeHTML;
  }

  #makeEllipseVertical() {
    const shapeHTML = document.createElement("div");
    const randomNumber = random(20,100);

    shapeHTML.classList.add("shape");
    shapeHTML.style.position = 'relative'
    shapeHTML.style.width = `${randomNumber/2}px`;
    shapeHTML.style.height = `${randomNumber}px`;
    shapeHTML.style.borderRadius = `${randomNumber/2}px/${randomNumber}px`;
    shapeHTML.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0,255)}, ${random(0, 255)})`;
    shapeHTML.style.top = `${random(0, 80)}%`;
    shapeHTML.style.left = `${random(0, 80)}%`;
    document.body.append(shapeHTML);

    setTimeout(() => {
      shapeHTML.animate([
        { transform: 'rotateX(180deg)'}
       ], {
         duration: 1000
       })
    }, 300);

    setTimeout(() => {
      shapeHTML.remove();
    }, 2000);
    return shapeHTML;
  }
  #makeTriangleTop() {
    const shapeHTML = document.createElement("div");
    const randomNumber = random(20,100);

    shapeHTML.classList.add("shape");
    shapeHTML.style.position = 'relative'
    shapeHTML.style.width = `0px`;
    shapeHTML.style.height = `0px`;
    shapeHTML.style.borderLeft = `${randomNumber}px solid transparent`;
    shapeHTML.style.borderRight = `${randomNumber}px solid transparent`;
    shapeHTML.style.borderBottom = `${randomNumber*2}px solid rgb(${random(0, 255)}, ${random(0,255)}, ${random(0, 255)})`;
    shapeHTML.style.top = `${random(0, 80)}%`;
    shapeHTML.style.left = `${random(0, 80)}%`;
    document.body.append(shapeHTML);

    setTimeout(() => {
      shapeHTML.animate([
        { transform: 'rotateY(180deg)'},
          
       ], {
         duration: 1000
       })
    }, 300);

    setTimeout(() => {
      shapeHTML.remove();
    }, 3000);
    return shapeHTML;
  }

  trigger() {
    const shapeHTML = document.createElement("div");
    const check = document.querySelector(".shape");
    const randomCount = random(1, 5);

    if (check) {
      check.remove();
    }

    switch (randomCount) {
      case 1:
        this.#makeCircle();
        break;

      case 2:
        this.#makeSquare();
        break;

      case 3:
        this.#makeEllipseHorizont();
        break;

      case 4:
        this.#makeEllipseVertical();
        break;

      case 5:
        this.#makeTriangleTop();
        break;

      default: 
    }
  }
}
