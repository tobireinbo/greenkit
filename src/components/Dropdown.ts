import { html, TemplateResult } from "lit";
import { property, customElement } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";
import { DisplayValue } from "../common/types";

@customElement("gk-dropdown")
export class Dropdown extends GreenkitComponent {
  static EVENTS = {
    optionClick: "gk.option.click",
    selectionChange: "gk.selection.change",
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

  private _handleClearClick(e: Event) {
    e.stopPropagation();
    this.selection = undefined;
    this._dispatchOptionSelect(e, undefined);
  }

  private _dispatchOptionSelect(_: Event, option: DisplayValue | undefined) {
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

  private _handleSearchInput(e: any) {
    this.searchTerm = e.target.value;
  }

  render() {
    return html`<div class="rel " @click=${() => (this.open = true)}>
      <input
        class="p-${this.size} onFocus_br-acc-1 t-${this.size} ${this.open
          ? `br-rt-${this.size}`
          : `br-r-${this.size}`}  br-${this.variant} w-full bg-${this.variant}"
        type="text"
        ?disabled=${!this.searchable}
        placeholder="${this.selection?.display || ""}"
        .value="${this.searchTerm}"
        @input=${this._handleSearchInput}
      />
      ${this._renderClearButton()} ${this._renderOptionsList()}
    </div>`;
  }

  private _renderClearButton(): TemplateResult | null {
    if (this.selection) {
      return html`<div
        @click=${this._handleClearClick}
        class="br-r-circ flx-c-c bg-2_hvr abs pointer right-${this.size} "
        style="top: 50%; transform: translateY(-50%)"
      >
        <i class="pixel-icon-forbid t-${this.size}"></i>
      </div>`;
    }
    return null;
  }

  private _renderOptionsList(): TemplateResult | null {
    if (this.open) {
      return html`
        <div
          style="animation: 0.1s ease scale_blend_in_y"
          class="z-2 flx-v w-full bg-${this.variant} brb-${this
            .variant} pt-${this.size} pb-${this.size} brr-${this
            .variant} brl-${this.variant} abs sdw-1 hmax-m ovfly-a br-rb-${this
            .size}"
        >
          ${this.options
            ? this.options.map((option) => this._renderOption(option))
            : null}
        </div>
      `;
    }
    return null;
  }

  private _renderOption(option: DisplayValue): TemplateResult | null {
    const isSelected = this.selection === option;

    /*
    NOTE: display only works with string for now,
          so the search term will always pick the search
          or display field

    search term prio:

    1.    if a search field is given, use it as search term
    2.    otherwise if display field is a string, use it "
    3.    otherwise use value field
    */
    const optionSearchTerm =
      option.search ||
      (typeof option.display === "string" ? option.display : option.value);

    if (
      optionSearchTerm
        .toLowerCase()
        .includes(this.searchTerm?.toLocaleLowerCase() || "") ||
      isSelected
    ) {
      if (isSelected && this.excludeSelected) {
        return null;
      }
      return html`<div
        class="p-${this.size} t-${this.size} ${isSelected
          ? "t-c-acc-1"
          : ""}  pointer ${isSelected
          ? `bg-${this.variant}-focus sdw-1 brt-${this.variant} brb-${this.variant}`
          : `bg-${this.variant}_hvr`}"
        @click=${(e: Event) => {
          e.stopPropagation();
          this._dispatchOptionSelect(e, option);
        }}
      >
        ${option.display}
      </div>`;
    } else {
      return null;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gk-dropdown": Dropdown;
  }
}
