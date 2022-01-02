import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";

@customElement("gk-t")
export class Text extends GreenkitComponent {
  render() {
    return html`<div class="t-${this.size}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-t": Text;
  }
}
