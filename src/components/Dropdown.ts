import { html, TemplateResult } from "lit";
import { property, customElement } from "lit/decorators.js";
import { DisplayValue } from "../common/types";
import { GreenkitComponent } from "./GreenkitComponent";

@customElement("gk-dropdown")
export class Dropdown extends GreenkitComponent {
  static EVENTS = {
    optionClick: "optionClick",
    selectionChange: "selectionChange",
  };

  @property()
  options?: DisplayValue[] = [];
  @property({ type: Boolean })
  searchable?: boolean = false;
  @property({ type: Boolean })
  closeOnSelect?: boolean = true;
  @property({ type: Boolean })
  excludeSelected?: boolean = false;

  @property({ type: Boolean })
  open = false;
  @property({ type: String })
  searchTerm?: string = "";
  @property()
  selection?: DisplayValue;

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

  protected handleSearchInput(e: any) {
    this.searchTerm = e.target.value;
  }

  protected handleSearchChange(e: any) {
    this.searchTerm = e.target.value;
  }

  render() {
    return html`<div class="rel z-2">
      <input
        class="p-${this.size} t-${this.size} ${this.open
          ? `br-rt-${this.size}`
          : `br-r-${this.size}`}  br-${this.variant} w-full bg-${this.variant}"
        type="text"
        ?disabled=${!this.searchable}
        placeholder="${this.selection?.display || ""}"
        .value="${this.searchTerm}"
        @input=${this.handleSearchInput}
        @click=${() => (this.open = true)}
      />
      ${this.renderOptionsList()}
    </div>`;
  }

  protected renderOptionsList(): TemplateResult | null {
    if (this.open) {
      return html`
        <div
          style="animation: 0.1s ease scale_blend_in_y"
          class="flx-v w-full bg-${this.variant} brb-${this.variant} pt-${this
            .size} pb-${this.size} brr-${this.variant} brl-${this
            .variant} abs sdw-1 hmax-m ovfly-a br-rb-${this.size}"
        >
          ${this.options
            ? this.options
                .filter((option) =>
                  option.display
                    .toLowerCase()
                    .includes(this.searchTerm?.toLowerCase() || "")
                )
                .map((option) => this.renderOption(option))
            : null}
        </div>
      `;
    } else {
      return null;
    }
  }

  protected renderOption(option: DisplayValue): TemplateResult | null {
    const isSelected = this.selection === option;

    if (isSelected && this.excludeSelected) {
      return null;
    }
    return html`<div
      class="p-${this.size} t-${this.size} ${isSelected
        ? "t-c-acc-1"
        : ""}  pointer ${isSelected
        ? `bg-${this.variant}-focus`
        : `bg-${this.variant}_hvr`}"
      @click=${(e: Event) => this._dispatchOptionSelect(e, option)}
    >
      ${option.display}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-dropdown": Dropdown;
  }
}