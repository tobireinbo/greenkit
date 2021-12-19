import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";

@customElement("gk-section")
export class Section extends GreenkitComponent {
  @property()
  direction?: "x" | "y" = "y";

  render() {
    return html`<div
      class="${this.direction === "x" ? "flx" : "flx-v"} gap${this
        .direction}-${this.size}"
    >
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-section": Section;
  }
}
