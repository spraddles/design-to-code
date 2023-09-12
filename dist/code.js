"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const require = './utils'
const rgb2hex_1 = __importDefault(require("./utils/rgb2hex"));
var styleObject = {};
figma.showUI(__html__);
figma.on('selectionchange', () => {
    const nodeArray = figma.currentPage.selection;
    const node = nodeArray[0];
    if (node) {
        console.log('node: ', node);
        const red = (node === null || node === void 0 ? void 0 : node.backgrounds[0].color.r) || '';
        const green = (node === null || node === void 0 ? void 0 : node.backgrounds[0].color.g) || '';
        const blue = (node === null || node === void 0 ? void 0 : node.backgrounds[0].color.b) || '';
        styleObject.width = (node === null || node === void 0 ? void 0 : node.width) ? node.width + 'px' : '';
        styleObject.height = (node === null || node === void 0 ? void 0 : node.height) ? node.height + 'px' : '';
        styleObject.left = (node === null || node === void 0 ? void 0 : node.x) ? node.x + 'px' : '';
        styleObject.right = (node === null || node === void 0 ? void 0 : node.y) ? node.y + 'px' : '';
        styleObject.background = (0, rgb2hex_1.default)(red, green, blue);
        console.log('styleObject: ', styleObject);
    }
});
