import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";

@customElement("gk-card")
export class Card extends GreenkitComponent {
  @property({ type: Boolean })
  borderless?: boolean = false;

  render() {
    return html`<div
      class="p-${this.size} t-${this.size} ${!this.borderless
        ? `br-${this.variant}`
        : ""}  flx-v gapy-${this.size} bg-${this.variant} br-r-${this
        .size} ${this.className}"
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
