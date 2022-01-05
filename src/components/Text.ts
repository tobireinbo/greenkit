import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";

@customElement("gk-text")
export class Text extends GreenkitComponent {
  render() {
    return html`<div class="t-${this.size} t-c-in-${this.variant}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-text": Text;
  }
}
