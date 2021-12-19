import { css } from "lit";
export default css`
  /*
----------------------------------------------
KEYFRAMES
----------------------------------------------
*/
  @keyframes scale_blend_in {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes scale_blend_in_y {
    0% {
      opacity: 0;
      transform-origin: top;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform-origin: top;
      transform: scaleY(1);
    }
  }

  /*
----------------------------------------------
NORMALIZE
----------------------------------------------
*/
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    min-height: 100%;
  }

  label {
    display: inline-block;
  }

  input,
  button {
    outline: none;
    border: none;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  a,
  span,
  input,
  label,
  div,
  p {
    font-family: "Noto Regular", Arial, Helvetica, sans-serif;
    font-weight: normal;
    margin: 0;
  }

  /*
----------------------------------------------
CLASSES
----------------------------------------------
*/

  /* Scrollbar */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Cursor */
  .pointer {
    cursor: pointer;
  }

  .click {
    overflow: hidden;
    position: relative;
    -webkit-transition-duration: 0.1s; /* Safari */
    transition-duration: 0.1s;
  }
  .click:after {
    content: "";
    background: rgba(0, 0, 0, 0.3);
    display: block;
    position: absolute;
    padding-top: 100%;
    padding-right: -100%;
    padding-left: 100%;
    border-radius: 50%;
    margin-top: -66%;
    margin-left: -33%;
    opacity: 0;
    transition: all 0.5s;
  }
  .click:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }

  /* Width */
  .w-full {
    width: 100%;
  }
  .w-half {
    width: 50%;
  }

  .wmax-s {
    max-width: var(--gk-s-dimesion-s);
  }
  .wmax-m {
    max-width: var(--gk-s-dimesion-m);
  }
  .wmax-l {
    max-width: var(--gk-s-dimesion-l);
  }
  .wmax-xl {
    max-width: var(--gk-s-dimesion-xl);
  }

  .wmin-s {
    min-width: var(--gk-s-dimesion-s);
  }
  .wmin-m {
    min-width: var(--gk-s-dimesion-m);
  }
  .wmin-l {
    min-width: var(--gk-s-dimesion-l);
  }
  .wmin-xl {
    min-width: var(--gk-s-dimesion-xl);
  }

  .w-s {
    width: var(--gk-s-s);
  }
  .w-m {
    width: var(--gk-s-m);
  }
  .w-l {
    width: var(--gk-s-l);
  }
  .w-xl {
    width: var(--gk-s-xl);
  }

  /* Height */
  .h-full {
    height: 100%;
  }
  .h-half {
    height: 50%;
  }

  .hmax-s {
    max-height: var(--gk-s-dimesion-s);
  }
  .hmax-m {
    max-height: var(--gk-s-dimesion-m);
  }
  .hmax-l {
    max-height: var(--gk-s-dimesion-l);
  }
  .hmax-xl {
    max-height: var(--gk-s-dimesion-xl);
  }

  .hmin-s {
    min-height: var(--gk-s-dimesion-s);
  }
  .hmin-m {
    min-height: var(--gk-s-dimesion-m);
  }
  .hmin-l {
    min-height: var(--gk-s-dimesion-l);
  }
  .hmin-xl {
    min-height: var(--gk-s-dimesion-xl);
  }

  .h-s {
    height: var(--gk-s-s);
  }
  .h-m {
    height: var(--gk-s-m);
  }
  .h-l {
    height: var(--gk-s-l);
  }
  .h-xl {
    height: var(--gk-s-xl);
  }

  /* Position */
  .fxd {
    position: fixed;
  }
  .abs {
    position: absolute;
  }
  .rel {
    position: relative;
  }
  .stky {
    position: sticky;
  }
  .stky-top {
    position: sticky;
    top: 0;
  }

  .top-0 {
    top: 0;
  }
  .right-0 {
    right: 0;
  }
  .left-0 {
    left: 0;
  }
  .bottom-0 {
    bottom: 0;
  }

  /* Display */
  .blk {
    display: block;
  }
  .flx {
    display: flex;
  }
  .flx-c-c {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flx-v {
    display: flex;
    flex-direction: column;
  }
  .flx-arnd {
    display: flex;
    justify-content: space-around;
  }
  .flx-btwn {
    display: flex;
    justify-content: space-between;
  }
  .flx-ac {
    display: flex;
    align-items: center;
  }
  .flx-aend {
    display: flex;
    align-items: flex-end;
  }
  .flx-jc {
    display: flex;
    justify-content: center;
  }
  .flx-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  /* Z-Index */
  .z-0 {
    z-index: 0;
  }
  .z-1 {
    z-index: 1;
  }
  .z-2 {
    z-index: 2;
  }
  .z-3 {
    z-index: 3;
  }
  .z-100 {
    z-index: 100;
  }

  /* Text */
  .t-inherit {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }

  .t-xs {
    font-size: var(--gk-s-text-xs);
    color: var(--gk-c-text-xs);
  }
  .t-xs::placeholder {
    color: var(--gk-c-text-xs);
    opacity: 1;
  }
  .t-xs:-ms-input-placeholder {
    color: var(--gk-c-text-xs);
  }
  .t-xs::-ms-input-placeholder {
    color: var(--gk-c-text-xs);
  }

  .t-s {
    font-size: var(--gk-s-text-s);
    color: var(--gk-c-text-s);
  }
  .t-s::placeholder {
    color: var(--gk-c-text-s);
    opacity: 1;
  }
  .t-s:-ms-input-placeholder {
    color: var(--gk-c-text-s);
  }
  .t-s::-ms-input-placeholder {
    color: var(--gk-c-text-s);
  }

  .t-m {
    font-size: var(--gk-s-text-m);
    color: var(--gk-c-text-m);
  }
  .t-m::placeholder {
    color: var(--gk-c-text-m);
    opacity: 1;
  }
  .t-m:-ms-input-placeholder {
    color: var(--gk-c-text-m);
  }
  .t-m::-ms-input-placeholder {
    color: var(--gk-c-text-m);
  }

  .t-l {
    font-size: var(--gk-s-text-l);
    color: var(--gk-c-text-l);
  }
  .t-l::placeholder {
    color: var(--gk-c-text-l);
    opacity: 1;
  }
  .t-l:-ms-input-placeholder {
    color: var(--gk-c-text-l);
  }
  .t-l::-ms-input-placeholder {
    color: var(--gk-c-text-l);
  }

  .t-xl {
    font-size: var(--gk-s-text-xl);
    color: var(--gk-c-text-xl);
  }
  .t-xl::placeholder {
    color: var(--gk-c-text-xl);
    opacity: 1;
  }
  .t-xl:-ms-input-placeholder {
    color: var(--gk-c-text-xl);
  }
  .t-xl::-ms-input-placeholder {
    color: var(--gk-c-text-xl);
  }

  .t-c-acc-1 {
    color: var(--gk-c-accent-1) !important;
  }
  .t-c-in-acc-1 {
    color: var(--gk-c-text-in-accent-1) !important;
  }
  .t-c-acc-2 {
    color: var(--gk-c-accent-2) !important;
  }
  .t-c-in-acc-2 {
    color: var(--gk-c-text-in-accent-2) !important;
  }

  /* Image */
  .o-cn {
    object-fit: contain;
  }

  .o-cv {
    object-fit: cover;
  }

  /* Border Radius */
  .br-r-pill {
    border-radius: 999999px;
  }
  .br-r-circ {
    border-radius: 50%;
  }

  .br-r-s {
    border-radius: var(--gk-s-radius-s);
  }
  .br-r-m {
    border-radius: var(--gk-s-radius-m);
  }
  .br-r-l {
    border-radius: var(--gk-s-radius-l);
  }
  .br-r-xl {
    border-radius: var(--gk-s-radius-xl);
  }

  .br-rt-s {
    border-radius: var(--gk-s-radius-s) var(--gk-s-radius-s) 0 0;
  }
  .br-rt-m {
    border-radius: var(--gk-s-radius-m) var(--gk-s-radius-m) 0 0;
  }
  .br-rt-l {
    border-radius: var(--gk-s-radius-l) var(--gk-s-radius-l) 0 0;
  }
  .br-rt-xl {
    border-radius: var(--gk-s-radius-xl) var(--gk-s-radius-xl) 0 0;
  }

  .br-rb-s {
    border-radius: 0 0 var(--gk-s-radius-s) var(--gk-s-radius-s);
  }
  .br-rb-m {
    border-radius: 0 0 var(--gk-s-radius-m) var(--gk-s-radius-m);
  }
  .br-rb-l {
    border-radius: 0 0 var(--gk-s-radius-l) var(--gk-s-radius-l);
  }
  .br-rb-xl {
    border-radius: 0 0 var(--gk-s-radius-xl) var(--gk-s-radius-xl);
  }

  .br-rtr-s {
    border-radius: 0 var(--gk-s-radius-s) 0 0;
  }
  .br-rtr-m {
    border-radius: 0 var(--gk-s-radius-m) 0 0;
  }
  .br-rtr-l {
    border-radius: 0 var(--gk-s-radius-l) 0 0;
  }
  .br-rtr-xl {
    border-radius: 0 var(--gk-s-radius-xl) 0 0;
  }

  .br-rtl-s {
    border-radius: var(--gk-s-radius-s) 0 0 0;
  }
  .br-rtl-m {
    border-radius: var(--gk-s-radius-m) 0 0 0;
  }
  .br-rtl-l {
    border-radius: var(--gk-s-radius-l) 0 0 0;
  }
  .br-rtl-xl {
    border-radius: var(--gk-s-radius-xl) 0 0 0;
  }

  .br-rbr-s {
    border-radius: 0 0 var(--gk-s-radius-s) 0;
  }
  .br-rbr-m {
    border-radius: 0 0 var(--gk-s-radius-m) 0;
  }
  .br-rbr-l {
    border-radius: 0 0 var(--gk-s-radius-l) 0;
  }
  .br-rbr-xl {
    border-radius: 0 0 var(--gk-s-radius-xl) 0;
  }

  .br-rbl-s {
    border-radius: 0 0 0 var(--gk-s-radius-s);
  }
  .br-rbl-m {
    border-radius: 0 0 0 var(--gk-s-radius-m);
  }
  .br-rbl-l {
    border-radius: 0 0 0 var(--gk-s-radius-l);
  }
  .br-rbl-xl {
    border-radius: 0 0 0 var(--gk-s-radius-xl);
  }

  /* Border */
  .br-0 {
    border: none;
  }
  .br-acc-1 {
    border: solid 1px var(--gk-c-accent-1);
  }

  .onFocus_br-acc-1:focus {
    border: solid 1px var(--gk-c-accent-1);
  }

  .br-1 {
    border: solid 1px var(--gk-c-contour-1);
  }
  .br-1_hvr {
    border: solid 1px var(--gk-c-contour-1);
    transition: var(--gk-t-fast);
    transition-property: border;
  }
  .br-1_hvr:hover {
    border-color: var(--gk-c-contour-1-focus);
  }

  .onFocus_br-1:focus {
    border: solid 1px var(--gk-c-contour-1);
  }
  .brt-1 {
    border-top: solid 1px var(--gk-c-contour-1);
  }
  .brb-1 {
    border-bottom: solid 1px var(--gk-c-contour-1);
  }
  .brl-1 {
    border-left: solid 1px var(--gk-c-contour-1);
  }
  .brr-1 {
    border-right: solid 1px var(--gk-c-contour-1);
  }

  .br-2 {
    border: solid 1px var(--gk-c-contour-2);
  }
  .br-2_hvr {
    border: solid 1px var(--gk-c-contour-2);
    transition: var(--gk-t-fast);
    transition-property: border;
  }
  .br-2_hvr:hover {
    border-color: var(--gk-c-contour-2-focus);
  }

  .onFocus_br-2:focus {
    border: solid 1px var(--gk-c-contour-2);
  }
  .brt-2 {
    border-top: solid 1px var(--gk-c-contour-2);
  }
  .brb-2 {
    border-bottom: solid 1px var(--gk-c-contour-2);
  }
  .brl-2 {
    border-left: solid 1px var(--gk-c-contour-2);
  }
  .brr-2 {
    border-right: solid 1px var(--gk-c-contour-2);
  }

  /* Shadow */
  .sdw-1 {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03), 0 20px 48px rgba(0, 0, 0, 0.03),
      0 1px 4px rgba(0, 0, 0, 0.03);
  }
  .sdw-2 {
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
  }
  .sdw-shine {
    box-shadow: inset 1px 1px 1px 0 hsla(0, 0%, 100%, 0.61);
  }

  /* Background */
  .bg-1 {
    background-color: var(--gk-c-area-1);
  }
  .bg-1-focus {
    background-color: var(--gk-c-area-1-focus);
  }
  .bg-1_hvr {
    background-color: var(--gk-c-area-1);
    transition: var(--gk-t-fast);
    transition-property: background-color;
  }
  .bg-1_hvr:hover {
    background-color: var(--gk-c-area-1-focus);
  }
  .onFocus_bg-1:focus {
    background-color: var(--gk-c-area-1);
  }

  .bg-2 {
    background-color: var(--gk-c-area-2);
  }
  .bg-2-focus {
    background-color: var(--gk-c-area-2-focus);
  }
  .bg-2_hvr {
    background-color: var(--gk-c-area-2);
    transition: var(--gk-t-fast);
    transition-property: background-color;
  }
  .bg-2_hvr:hover {
    background-color: var(--gk-c-area-2-focus);
  }
  .onFocus_bg-2:focus {
    background-color: var(--gk-c-area-2);
  }

  .bg-acc-1 {
    background-color: var(--gk-c-accent-1);
    color: var(--gk-c-text-in-accent-1);
  }
  .bg-acc-1 > * {
    color: var(--gk-c-text-in-accent-1);
  }
  .bg-acc-1_hvr {
    background-color: var(--gk-c-accent-1);
    color: var(--gk-c-text-in-accent-1);
  }
  .bg-acc-1_hvr > * {
    color: var(--gk-c-text-in-accent-1);
  }
  .bg-acc-1_hvr:hover {
    background-color: var(--gk-c-accent-1-focus);
  }

  .bg-acc-2 {
    background-color: var(--gk-c-accent-2);
    color: var(--gk-c-text-in-accent-2);
  }
  .bg-acc-2 > * {
    color: var(--gk-c-text-in-accent-2);
  }
  .bg-acc-2_hvr {
    background-color: var(--gk-c-accent-2);
    color: var(--gk-c-text-in-accent-2);
  }
  .bg-acc-2_hvr > * {
    color: var(--gk-c-text-in-accent-2);
  }
  .bg-acc-2_hvr:hover {
    background-color: var(--gk-c-accent-2-focus);
  }

  .bg-warn {
    background-color: var(--gk-c-warn);
    color: var(--gk-c-text-in-warn);
  }
  .bg-warn > * {
    color: var(--gk-c-text-in-warn);
  }
  .bg-warn_hvr {
    background-color: var(--gk-c-warn);
    color: var(--gk-c-text-in-warn);
  }
  .bg-warn_hvr > * {
    color: var(--gk-c-text-in-warn);
  }
  .bg-warn_hvr:hover {
    background-color: var(--gk-c-warn-focus);
  }

  .bg-hint {
    background-color: var(--gk-c-hint);
    color: var(--gk-c-text-in-hint);
  }
  .bg-hint > * {
    color: var(--gk-c-text-in-hint);
  }
  .bg-hint_hvr {
    background-color: var(--gk-c-hint);
    color: var(--gk-c-text-in-hint);
  }
  .bg-hint_hvr > * {
    color: var(--gk-c-text-in-hint);
  }
  .bg-hint_hvr:hover {
    background-color: var(--gk-c-hint-focus);
  }

  /* Overflow */
  .ovfl-h {
    overflow: hidden;
  }
  .ovfl-a {
    overflow: auto;
  }
  .ovflx-h {
    overflow-x: hidden;
  }
  .ovflx-a {
    overflow-x: auto;
  }
  .ovfly-h {
    overflow-y: hidden;
  }
  .ovfly-a {
    overflow-y: auto;
  }

  .scrl-x {
    overflow-x: scroll;
  }
  .scrl-y {
    overflow-y: scroll;
  }

  /* Padding */
  .p-0 {
    padding: 0 !important;
  }
  .p-s {
    padding: var(--gk-s-spacing-s);
  }
  .p-m {
    padding: var(--gk-s-spacing-m);
  }
  .p-l {
    padding: var(--gk-s-spacing-l);
  }
  .p-xl {
    padding: var(--gk-s-spacing-xl);
  }
  .pt-s {
    padding-top: var(--gk-s-spacing-s);
  }
  .pt-m {
    padding-top: var(--gk-s-spacing-m);
  }
  .pt-l {
    padding-top: var(--gk-s-spacing-l);
  }
  .pt-xl {
    padding-top: var(--gk-s-spacing-xl);
  }
  .pb-s {
    padding-bottom: var(--gk-s-spacing-s);
  }
  .pb-m {
    padding-bottom: var(--gk-s-spacing-m);
  }
  .pb-l {
    padding-bottom: var(--gk-s-spacing-l);
  }
  .pb-xl {
    padding-bottom: var(--gk-s-spacing-xl);
  }
  .pl-s {
    padding-left: var(--gk-s-spacing-s);
  }
  .pl-m {
    padding-left: var(--gk-s-spacing-m);
  }
  .pl-l {
    padding-left: var(--gk-s-spacing-l);
  }
  .pl-xl {
    padding-left: var(--gk-s-spacing-xl);
  }
  .pr-s {
    padding-right: var(--gk-s-spacing-s);
  }
  .pr-m {
    padding-right: var(--gk-s-spacing-m);
  }
  .pr-l {
    padding-right: var(--gk-s-spacing-l);
  }
  .pr-xl {
    padding-right: var(--gk-s-spacing-xl);
  }
  .px-s {
    padding-left: var(--gk-s-spacing-s);
    padding-right: var(--gk-s-spacing-s);
  }
  .px-m {
    padding-left: var(--gk-s-spacing-m);
    padding-right: var(--gk-s-spacing-m);
  }
  .px-l {
    padding-left: var(--gk-s-spacing-l);
    padding-right: var(--gk-s-spacing-l);
  }
  .px-xl {
    padding-left: var(--gk-s-spacing-xl);
    padding-right: var(--gk-s-spacing-xl);
  }
  .py-s {
    padding-top: var(--gk-s-spacing-s);
    padding-bottom: var(--gk-s-spacing-s);
  }
  .py-m {
    padding-top: var(--gk-s-spacing-m);
    padding-bottom: var(--gk-s-spacing-m);
  }
  .py-l {
    padding-top: var(--gk-s-spacing-l);
    padding-bottom: var(--gk-s-spacing-l);
  }
  .py-xl {
    padding-top: var(--gk-s-spacing-xl);
    padding-bottom: var(--gk-s-spacing-xl);
  }

  /* Margin */

  .m-0 {
    margin: unset !important;
  }
  .m-s {
    margin: var(--gk-s-spacing-s);
  }
  .m-m {
    margin: var(--gk-s-spacing-m);
  }
  .m-l {
    margin: var(--gk-s-spacing-l);
  }
  .m-xl {
    margin: var(--gk-s-spacing-xl);
  }
  .mt-s {
    margin-top: var(--gk-s-spacing-s);
  }
  .mt-m {
    margin-top: var(--gk-s-spacing-m);
  }
  .mt-l {
    margin-top: var(--gk-s-spacing-l);
  }
  .mt-xl {
    margin-top: var(--gk-s-spacing-xl);
  }
  .mb-s {
    margin-bottom: var(--gk-s-spacing-s);
  }
  .mb-m {
    margin-bottom: var(--gk-s-spacing-m);
  }
  .mb-l {
    margin-bottom: var(--gk-s-spacing-l);
  }
  .mb-xl {
    margin-bottom: var(--gk-s-spacing-xl);
  }
  .ml-s {
    margin-left: var(--gk-s-spacing-s);
  }
  .ml-m {
    margin-left: var(--gk-s-spacing-m);
  }
  .ml-l {
    margin-left: var(--gk-s-spacing-l);
  }
  .ml-xl {
    margin-left: var(--gk-s-spacing-xl);
  }
  .mr-s {
    margin-right: var(--gk-s-spacing-s);
  }
  .mr-m {
    margin-right: var(--gk-s-spacing-m);
  }
  .mr-l {
    margin-right: var(--gk-s-spacing-l);
  }
  .mr-xl {
    margin-right: var(--gk-s-spacing-xl);
  }
  .mt-a {
    margin-top: auto;
  }
  .mb-a {
    margin-bottom: auto;
  }
  .ml-a {
    margin-left: auto;
  }
  .mr-a {
    margin-right: auto;
  }

  /* Gap */

  .gap-s {
    gap: var(--gk-s-spacing-s);
  }
  .gap-m {
    gap: var(--gk-s-spacing-m);
  }
  .gap-l {
    gap: var(--gk-s-spacing-l);
  }
  .gap-xl {
    gap: var(--gk-s-spacing-xl);
  }

  .gapx-s > * + * {
    margin-left: var(--gk-s-spacing-s);
  }
  .gapx-s ::slotted(*:not(:first-child)) {
    margin-left: var(--gk-s-spacing-s);
  }

  .gapx-m > * + * {
    margin-left: var(--gk-s-spacing-m);
  }
  .gapx-m ::slotted(*:not(:first-child)) {
    margin-left: var(--gk-s-spacing-m);
  }

  .gapx-l > * + * {
    margin-left: var(--gk-s-spacing-l);
  }
  .gapy-l ::slotted(*:not(:first-child)) {
    margin-left: var(--gk-s-spacing-l);
  }

  .gapx-xl > * + * {
    margin-left: var(--gk-s-spacing-xl);
  }
  .gapx-xl ::slotted(*:not(:first-child)) {
    margin-left: var(--gk-s-spacing-xl);
  }

  .gapy-s > * + * {
    margin-top: var(--gk-s-spacing-s);
  }
  .gapy-s ::slotted(*:not(:first-child)) {
    margin-top: var(--gk-s-spacing-s);
  }

  .gapy-m > * + * {
    margin-top: var(--gk-s-spacing-m);
  }
  .gapy-m ::slotted(*:not(:first-child)) {
    margin-top: var(--gk-s-spacing-m);
  }

  .gapy-l > * + * {
    margin-top: var(--gk-s-spacing-l);
  }
  .gapy-l ::slotted(*:not(:first-child)) {
    margin-top: var(--gk-s-spacing-l);
  }

  .gapy-xl > * + * {
    margin-top: var(--gk-s-spacing-xl);
  }
  .gapy-xl ::slotted(*:not(:first-child)) {
    margin-top: var(--gk-s-spacing-xl);
  }
`;
