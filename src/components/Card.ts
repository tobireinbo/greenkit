import { LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { Size, Variant } from "../common/types";
import globalCss from "../globalCss.js";

@customElement("gk-card")
export class Card extends LitElement {
  static styles = [globalCss];

  @property()
  size?: Size = "m";
  @property()
  variant?: Variant = "1";

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
