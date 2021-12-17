import { LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { DisplayValue, Size, Variant } from "../common/types";
import globalCss from "../globalCss.js";

@customElement("gk-dropdown")
export class Dropdown extends LitElement {
  static EVENTS = {
    optionClick: "optionClick",
    selectionChange: "selectionChange",
  };
  static styles = [globalCss];

  @property()
  size?: Size = "m";
  @property()
  variant?: Variant = "1";

  @property()
  options?: DisplayValue[] = [];
  @property({ type: Boolean })
  searchable?: boolean = false;
  @property({ type: Boolean })
  closeOnSelect?: boolean = true;

  @property({ type: Boolean })
  open = false;
  @property({ type: String })
  searchTerm?: string = "";
  @property()
  selection?: DisplayValue;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("click", this._handleOutsideClick);
  }
  disconnectedCallback() {
    window.removeEventListener("click", this._handleOutsideClick);
    super.disconnectedCallback();
  }

  //arrow function in order to reference to correct this
  private _handleOutsideClick = (e: Event) => {
    if (!e.composedPath().includes(this)) {
      this.open = false;
    }
  };

  private _dispatchOptionSelect(_: Event, option: DisplayValue) {
    this.selection = option;
    this.searchTerm = "";
    if (this.closeOnSelect) {
      this.open = false;
    }
    const options = {
      detail: { option },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent(Dropdown.EVENTS.optionClick, options));
  }

  handleSearchInput(e: any) {
    this.searchTerm = e.target.value;
  }

  handleSearchChange(e: any) {
    this.searchTerm = e.target.value;
  }

  render() {
    return html`<div
      class="br-${this.variant} rel bg-${this.variant}"
      @click=${() => (this.open = true)}
    >
      <input
        class="p-${this.size} t-${this.size} w-full"
        type="text"
        ?disabled=${!this.searchable}
        placeholder="${this.selection?.display || ""}"
        .value="${this.searchTerm}"
        @input=${this.handleSearchInput}
      />

      ${this.open
        ? html`
            <div
              class="flx-v br-${this
                .variant} abs sdw-1 hmax-m ovfly-a br-rb-${this.size}"
            >
              ${this.options
                ? this.options
                    .filter((option) =>
                      option.value
                        .toLowerCase()
                        .includes(this.searchTerm?.toLowerCase() || "")
                    )
                    .map((option) => {
                      const isSelected = this.selection === option;
                      return html`<div
                        class="p-${this.size} t-${this
                          .size} pointer ${isSelected
                          ? `bg-${this.variant}-focus`
                          : `bg-${this.variant}_hvr`}"
                        @click=${(e: Event) =>
                          this._dispatchOptionSelect(e, option)}
                      >
                        ${option.display}
                      </div>`;
                    })
                : null}
            </div>
          `
        : null}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-dropdown": Dropdown;
  }
}
