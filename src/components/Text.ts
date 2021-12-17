import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Size } from "../common/types";
import globalCss from "../globalCss";

@customElement("gk-t")
export class Text extends LitElement {
  static styles = [globalCss];

  @property()
  size?: Size = "m";

  render() {
    return html`<div class="t-${this.size}"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-t": Text;
  }
}
