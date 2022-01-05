import { LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import { Size, Variant } from "../common/types";
import icons from "../styles/icons.css";
import globals from "../styles/global.css";

export class GreenkitComponent extends LitElement {
  static styles = [unsafeCSS(globals), unsafeCSS(icons)];
  constructor() {
    super();

    console.log();
  }

  @property()
  size: Size = "m";
  @property()
  variant: Variant = "1";
  @property({ type: Boolean })
  floating?: boolean = false;
}
