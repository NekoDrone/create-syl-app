import chalk from "chalk";

export enum PrintColour {
  RED,
  GREEN,
  YELLOW,
  BLUE,
  MAGENTA,
  CYAN,
  WHITE,
}

export interface printOpts {
  underline?: boolean;
  bold?: boolean;
  italic?: boolean;
}

export function printWithColour(
  colour: PrintColour,
  message: string,
  opts?: printOpts,
) {
  let chalkColour = chalk;
  switch (colour) {
    case PrintColour.RED:
      chalkColour = chalkColour.red;
      break;
    case PrintColour.GREEN:
      chalkColour = chalkColour.green;
      break;
    case PrintColour.YELLOW:
      chalkColour = chalkColour.yellow;
      break;
    case PrintColour.BLUE:
      chalkColour = chalkColour.blue;
      break;
    case PrintColour.MAGENTA:
      chalkColour = chalkColour.magenta;
      break;
    case PrintColour.CYAN:
      chalkColour = chalkColour.cyan;
      break;
    case PrintColour.WHITE:
      chalkColour = chalkColour.white;
      break;
    default:
      chalkColour = chalkColour.white;
      break;
  }
  switch(opts) {
    case opts?.bold:
      console.log(chalkColour.bold(message));
      break;
    case opts?.underline:
      console.log(chalkColour.underline(message));
      break;
    case opts?.italic:
      console.log(chalkColour.italic(message));
      break;
    case opts?.bold && opts.underline:
      console.log(chalkColour.bold.underline(message));
      break;
    case opts?.bold && opts.italic:
      console.log(chalkColour.bold.italic(message));
      break;
    case opts?.underline && opts.italic:
      console.log(chalkColour.underline.italic(message));
      break;
    case opts?.bold && opts.underline && opts.italic:
      // why would you ever use this, you shouldn't lol. included for completeness.
      console.log(chalkColour.bold.underline.italic(message));
      break;
    default:
      console.log(chalkColour(message));
      break;
  }
}
