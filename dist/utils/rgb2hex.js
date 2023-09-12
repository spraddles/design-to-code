"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rgbToHex(red, green, blue) {
    red = Math.max(0, Math.min(1, red));
    green = Math.max(0, Math.min(1, green));
    blue = Math.max(0, Math.min(1, blue));
    red = Math.round(red * 255);
    green = Math.round(green * 255);
    blue = Math.round(blue * 255);
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');
    const hexColor = `#${redHex}${greenHex}${blueHex}`;
    return hexColor;
}
exports.default = rgbToHex;
