import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";

@customElement("gk-frame")
export class Frame extends GreenkitComponent {
  @property({ type: String })
  title: string = "";

  render() {
    return html`
      <div class="br-${this.variant} br-r-${this.size} bg-${this.variant}">
        <div class="p-${this.size} flx-btwn flx-ac brb-${this.variant}">
          <gk-t size="${this.size}"> ${this.title} </gk-t>
          <slot name="actions"></slot>
        </div>
        <div class="p-${this.size}">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-frame": Frame;
  }
}
