import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "./GreenkitComponent";

@customElement("gk-sec")
export class Section extends GreenkitComponent {
  @property()
  direction?: "x" | "y" = "y";

  render() {
    return html`<div class="${this.direction === "x" ? "flx" : "flx-v"} gap-m">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-sec": Section;
  }
}
