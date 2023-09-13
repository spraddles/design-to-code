import { rgb2hex } from './utils/rgb2hex'
import { state, Element } from './store'
import { setElementType } from './utils/setElementType'

var elementObject: Object = {}

figma.showUI(__html__)

figma.on('selectionchange', () => {
  const nodeArray: ReadonlyArray<BaseNode> = figma.currentPage.selection
  const node: any = nodeArray[0]
  if (node) {
    console.log('node: ', node)

    elementObject = {
      'name': 'test',
      'type': 'container',
      'textContent': node.characters ? node.characters : null,
      'style': {
        'position': {
          'top': node.y + 'px' || null,
          'left': node.x + 'px' || null,
        },
        'dimensions': {
          'width': node.width + 'px' || null,
          'height': node.height + 'px' || null,
        },
        'colors': {
          'color': node.fills[0]?.color ? rgb2hex(
            node.fills[0].color.r,
            node.fills[0].color.g,
            node.fills[0].color.b
          ) : null,
          'background-color': node.backgrounds && node.backgrounds[0] && node.backgrounds[0].color ? rgb2hex(
            node.backgrounds[0].color.r,
            node.backgrounds[0].color.g,
            node.backgrounds[0].color.b
          ) : null
        },
        'fonts': {
          'font-family': node.fontName?.family ? node.fontName.family : null,
          'font-size': node.fontSize ? node.fontSize + 'px' : null,
          'font-weight': node.fontWeight ? node.fontWeight + 'px' : null,
          'line-height': node.lineHeight?.value ? node.lineHeight.value + 'px' : null,
          'letter-spacing': node.letterSpacing?.value ? node.letterSpacing.value + 'px' : null
        },
        'image': {
          'imageHash': node.fills[0]?.imageHash ? node.fills[0].imageHash : null
        }
      }
    }

    setElementType(elementObject as Element)

    console.log('state.elements: ', state.elements)

    // figma.ui.postMessage(elementObject)
  }
})
