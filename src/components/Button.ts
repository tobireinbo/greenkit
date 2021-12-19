import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "./GreenkitComponent";

@customElement("gk-btn")
export class Button extends GreenkitComponent {
  @property({ type: Boolean })
  render() {
    return html`<button
      class="bg-acc-1 p-${this.size} ${this.floating ? "sdw-1" : ""} br-r-${this
        .size} t-${this.size} click pointer"
    >
      <slot></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-btn": Button;
  }
}
