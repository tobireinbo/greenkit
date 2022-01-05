import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";

@customElement("gk-button-dropdown")
export class DropdownButton extends GreenkitComponent {
  @property({ type: Boolean })
  open = false;
  @property({ type: Boolean })
  floatToLeft?: boolean = false;

  connectedCallback() {
    super.connectedCallback();
    //register Outside Click handler
    window.addEventListener("click", this._handleOutsideClick);
  }
  disconnectedCallback() {
    //remove Outside Click handler
    window.removeEventListener("click", this._handleOutsideClick);
    super.disconnectedCallback();
  }

  //arrow function in order to reference to correct this
  private _handleOutsideClick = (e: Event) => {
    if (!e.composedPath().includes(this)) {
      this.open = false;
    }
  };

  render() {
    return html`<div class="rel">
      <slot name="button" @click=${() => (this.open = true)}>test</slot>
      ${this._renderOptions()}
    </div>`;
  }

  private _renderOptions(): TemplateResult | null {
    if (this.open) {
      return html` <div
        style="animation: 0.1s ease scale_blend_in_y"
        class="z-2 flx-v bg-${this.variant} br-${this.variant} pt-${this
          .size} pb-${this.size} abs ${this.floatToLeft
          ? "right-0"
          : "left-0"} sdw-1 hmax-m ovfly-a br-r-${this.size}"
      >
        <slot name="options"></slot>
      </div>`;
    } else {
      return null;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-button-dropdown": DropdownButton;
  }
}
