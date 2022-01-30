import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";

@customElement("gk-modal")
export class Modal extends GreenkitComponent {
  private _firstClick: boolean = false;

  @property({ type: Boolean })
  closeOnOutsideClick = false;

  connectedCallback(): void {
    super.connectedCallback();
    document.body.style.overflow = "hidden";
    this.closeOnOutsideClick &&
      window.addEventListener("click", this._handleOutsideClick);
  }

  disconnectedCallback(): void {
    document.body.style.overflow = "unset";
    this.closeOnOutsideClick &&
      window.removeEventListener("click", this._handleOutsideClick);
    super.disconnectedCallback();
  }

  //arrow function in order to reference to correct this
  private _handleOutsideClick = (e: Event) => {
    if (!e.composedPath().includes(this.children[0].children[0])) {
      if (this._firstClick) {
        this.parentElement?.removeChild(this);
      } else {
        this._firstClick = true;
      }
    }
  };

  render() {
    return html`
      <div
        style="background-color: rgba(0,0,0,0.65)"
        class="fxd p-xl z-ceil inset-0 flx-jc ovfly-a"
      >
        <div class="h-full wmax-full">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-modal": Modal;
  }
}
