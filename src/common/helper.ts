import { Size } from "./types";

export function decrementSize(size: Size): Size {
  switch (size) {
    case "xl":
      return "l";
    case "l":
      return "m";
    case "m":
      return "s";
    case "s":
      return "0";
    case "0":
      return "0";
  }
}

export function incrementSize(size: Size): Size {
  switch (size) {
    case "m":
      return "l";
    case "s":
      return "0";
    case "l":
      return "xl";
    case "xl":
      return "xl";
    case "0":
      return "s";
  }
}
