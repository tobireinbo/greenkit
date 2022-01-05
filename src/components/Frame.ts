import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";

@customElement("gk-frame")
export class Frame extends GreenkitComponent {
  @property({ type: String })
  label: string = "";

  render() {
    return html`
      <div class="br-${this.variant} br-r-${this.size} bg-${this.variant}">
        <div
          class="p-${this.size} gap-${this
            .size} flx-btwn ovflx-a flx-ac brb-${this.variant}"
        >
          <gk-text size="${this.size}"> ${this.label} </gk-text>
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
