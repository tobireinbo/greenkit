import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";
import { decrementSize } from "../common/helper";

@customElement("gk-btn")
export class Button extends GreenkitComponent {
  @property({ type: Boolean })
  invert: boolean = false;

  render() {
    return html`<button class=${this._constructClass()}>
      <slot></slot>
    </button>`;
  }

  private _constructClass(): string {
    const output = `py-${decrementSize(this.size)} br-${this.variant} t-${
      this.size
    } px-${this.size}  br-r-${this.size} click pointer`;
    if (this.invert) {
      return `bg-1_hvr ${output} t-c-${this.variant}  `;
    } else {
      return `bg-${this.variant}_hvr  ${output} `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-btn": Button;
  }
}
