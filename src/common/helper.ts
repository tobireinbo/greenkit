import { ChangableSize, Size } from "./types";

export function decrementSize(size: Size): ChangableSize {
  switch (size) {
    case "xl":
      return "l";
    case "l":
      return "m";
    case "m":
      return "s";
    case "s":
      return "xs";
    case "0":
      return "0";
  }
}

export function incrementSize(size: Size): ChangableSize {
  switch (size) {
    case "m":
      return "l";
    case "s":
      return "m";
    case "l":
      return "xl";
    case "xl":
      return "xxl";
    case "0":
      return "s";
  }
}
