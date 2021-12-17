import { LitElement } from "lit";
import { customElement } from "lit/decorators";

@customElement("gk-table")
export class Table extends LitElement {}

/*
    rows are given as an Object with properties of DisplayValue Type. The Columns are given as a list of another DisplayValue List

    columns = [{display: "", value: ""}] the value deterimines the key of rows
    rows = {
        name: {display: "Tobias Reinbold", value: "d29u903-d32kdpo32-dwpdj2p"}
    }
*/

declare global {
  interface HTMLElementTagNameMap {
    "gk-table": Table;
  }
}
