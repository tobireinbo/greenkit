import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { GreenkitComponent } from "./GreenkitComponent";

@customElement("gk-card")
export class Card extends GreenkitComponent {
  render() {
    return html`<div
      class="p-${this.size} t-${this.size} br-1 flx-v gapy-${this
        .size} bg-${this.variant} br-${this.variant} br-r-${this.size} ${this
        .className}"
    >
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-card": Card;
  }
}
