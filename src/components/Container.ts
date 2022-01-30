import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";
import { Size } from "../common/types";

@customElement("gk-container")
export class Container extends GreenkitComponent {
  @property({ type: String })
  width: Size = "xl";

  render() {
    return html`<div class="w-full flx-v flx-ac">
      <div
        class="p-${this.size} wmax-${this.width} w-full flx-v gapy-${this
          .size} "
      >
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
