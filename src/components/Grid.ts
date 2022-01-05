import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";
import { Size } from "../common/types";
import globalCss from "../styles/global.css";

@customElement("gk-grid")
export class Grid extends GreenkitComponent {
  static styles = [
    unsafeCSS(globalCss),
    css`
      :host div {
        display: grid;
      }
    `,
  ];

  @property()
  columnSize: Size = "m";

  render() {
    return html`<div
      class="gap-${this.size}"
      style="grid-template-columns: repeat(auto-fit, minmax(var(--gk-s-dimension-${this
        .columnSize}), 1fr));"
    >
      <slot></slot>
    </div>`;
  }
}
