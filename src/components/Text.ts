import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";

@customElement("gk-text")
export class Text extends GreenkitComponent {
  render() {
    return html`<div class="t-${this.size}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-text": Text;
  }
}
