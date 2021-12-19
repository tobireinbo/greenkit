import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";

@customElement("gk-container")
export class Container extends GreenkitComponent {
  render() {
    return html`<div class="w-full flx-v flx-ac">
      <div class="p-${this.size} wmax-xl w-full flx-v gapy-${this.size} ">
        <slot></slot>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-container": Container;
  }
}
