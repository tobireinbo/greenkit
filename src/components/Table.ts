import { css, html, TemplateResult, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GreenkitComponent } from "../common/GreenkitComponent";
import { DisplayValue } from "../common/types";
import globalCss from "../styles/global.css";

@customElement("gk-table")
export class Table extends GreenkitComponent {
  static styles = [
    unsafeCSS(globalCss),
    css`
      table {
        border-spacing: 0px;
      }
    `,
  ];

  @property()
  columns: DisplayValue[] = [];
  @property()
  rows: { [rowValue: string]: DisplayValue }[] = [];

  render() {
    return html`<table
      class="w-full ${this.floating ? "sdw-1" : ""} br-${this
        .variant} br-r-${this.size}"
    >
      ${this._renderHeader()} ${this._renderBody()}
    </table> `;
  }

  private _renderHeader(): TemplateResult {
    return html`
      <thead>
        <tr>
          ${this.columns.map(
            (column) =>
              html`<td
                class="brb-${this.variant} bg-${this.variant} p-${this.size}"
              >
                <gk-text size=${this.size} variant=${this.variant}>
                  ${column.display}
                </gk-text>
              </td>`
          )}
        </tr>
      </thead>
    `;
  }

  private _renderBody(): TemplateResult {
    return html`<tbody>
      ${this.rows.map((row, index) => {
        const isEven = index % 2 === 0;
        return html`<tr>
          ${this.columns.map((column) => {
            const currentRowData = row[column.value];

            return html`
              <td
                class="brb-${this.variant} ${!isEven
                  ? `bg-${this.variant}-focus`
                  : `bg-${this.variant}`} p-${this.size}"
              >
                <gk-text size=${this.size} variant=${this.variant}>
                  ${currentRowData ? currentRowData.display : ""}
                </gk-text>
              </td>
            `;
          })}
        </tr>`;
      })}
    </tbody>`;
  }
}

/*
    rows are given as an Object with properties of DisplayValue Type. The Columns are given as a list of another DisplayValue List

    columns = [{display: "Name", value: "name"}] the value deterimines the key of rows
    rows = [{
        name: {display: "Tobias Reinbold", value: "d29u903-d32kdpo32-dwpdj2p"},
    }]
*/

declare global {
  interface HTMLElementTagNameMap {
    "gk-table": Table;
  }
}
