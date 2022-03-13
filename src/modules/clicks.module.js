import { Module } from "../core/module";

export class ClicksModule extends Module {
  #counter;
  #isListener;

  constructor() {
    super("click", "Counter click (for 3 sec)");
    this.#counter = 0;
    this.#isListener = false;
  }
  #render(count) {
    const clickCounterMessageModel = document.createElement("div");
    clickCounterMessageModel.className = "click-counter-message-model";

    const clickCounterTextContent = document.createElement("p");
    clickCounterTextContent.className = "click-message-content";
    clickCounterTextContent.textContent = "Вами было сделано кликов";

    const createClickCounter = document.createElement("p");
    createClickCounter.className = "click-counter-message-content";
    createClickCounter.textContent = count;

    const clickCounterCloseButton = document.createElement("button");
    clickCounterCloseButton.className = "click-counter-close-button";
    clickCounterCloseButton.textContent = "Закрыть";
    clickCounterCloseButton.addEventListener("click", () => {
      clickCounterMessageModel.setAttribute("hidden", null);
    });

    clickCounterMessageModel.append(
      clickCounterTextContent,
      createClickCounter,
      clickCounterCloseButton
    );

    document.body.append(clickCounterMessageModel);
  }

  #countClick() {
    if (!this.#isListener) {
      this.#isListener = true;
      document.body.addEventListener("click", () => {
        this.#counter++;
      });
      document.body.addEventListener("dblclick", () => {
        this.#counter--;
      });
    } else this.#counter = 0;
  }

  trigger() {
    this.#countClick();
    setTimeout(() => {
      this.#render(this.#counter);
    }, 3000);
  }
}
