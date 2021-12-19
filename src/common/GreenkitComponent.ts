import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { Size, Variant } from "../common/types";
import globalCss from "../globalCss";

export class GreenkitComponent extends LitElement {
  static styles = [globalCss];

  @property()
  size: Size = "m";
  @property()
  variant: Variant = "1";
  @property({ type: Boolean })
  floating?: boolean = false;
}
