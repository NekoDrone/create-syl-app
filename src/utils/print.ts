import chalk from "chalk";

export enum PrintColour {
    RED,
    GREEN,
    YELLOW,
    BLUE,
    MAGENTA,
    CYAN,
    WHITE,
    GRAY,
}

export interface printOpts {
    underline?: boolean;
    bold?: boolean;
    italic?: boolean;
}

export const printWithColour = (
    colour: PrintColour,
    message: string,
    opts?: printOpts,
) => {
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
        case PrintColour.GRAY:
            chalkColour = chalkColour.gray;
            break;
        default:
            chalkColour = chalkColour.white;
            break;
    }

    const actualOpts = opts ?? {
        bold: false,
        italic: false,
        underline: false,
    };

    if (actualOpts.bold && actualOpts.underline && actualOpts.italic) {
        // why would you ever use this, you shouldn't lol. included for completeness.
        console.log(chalkColour.bold.underline.italic(message));
    } else if (actualOpts.underline && actualOpts.italic) {
        console.log(chalkColour.underline.italic(message));
    } else if (actualOpts.bold && actualOpts.italic) {
        console.log(chalkColour.bold.italic(message));
    } else if (actualOpts.bold && actualOpts.underline) {
        console.log(chalkColour.bold.underline(message));
    } else if (actualOpts.bold) {
        console.log(chalkColour.bold(message));
    } else if (actualOpts.underline) {
        console.log(chalkColour.underline(message));
    } else if (actualOpts.italic) {
        console.log(chalkColour.italic(message));
    } else {
        console.log(chalkColour(message));
    }
};

export const printLine = () => {
    console.log();
};
