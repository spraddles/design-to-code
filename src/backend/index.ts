import { rgb2hex } from './utils/rgb2hex'
import { state } from '../store'
import { FigmaElement, FigmaEvent } from '../types'
import { setData } from './utils/setData'
import { setZindex } from './utils/setZindex'
import { setWidth } from './utils/setWidth'

var elementObject: FigmaElement | null

figma.showUI(__html__)

figma.on('selectionchange', () => {
  const nodeArray: ReadonlyArray<BaseNode> = figma.currentPage.selection
  const node: any = nodeArray[0]
  if (node) {

    console.log('node: ', node)

    if(!(state.elementIDs.includes(node.id))) {

      state.elementIDs.push(node.id)

      elementObject = {
        'id': node.id,
        'name': null,
        'textContent': node.characters ? node.characters : null,
        'isMainContainer': false,
        'style': {
          'position': {
            'top': null,
            'left': null,
            'z-index': null,
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
            'font-weight': node.fontWeight ? node.fontWeight : null,
            // 'line-height': node.lineHeight?.unit == 'PERCENT' ? node.lineHeight?.value + '%': node.lineHeight?.value ? node.lineHeight?.value : null,
            'text-align': node.textAlignHorizontal ? node.textAlignHorizontal : null,
            'letter-spacing': node.letterSpacing?.value ? (node.letterSpacing.value / 100) + 'em' : null,
            'text-transform': node.textCase && node.textCase == 'UPPER' ? 'uppercase' : node.textCase && node.textCase == 'lower' ? 'lowercase' : null
          },
          'image': {
            'imageHash': node.fills[0]?.imageHash ? node.fills[0].imageHash : null
          }
        }
      }

      setData(node, elementObject)

      setZindex()

      // send to UI
      figma.ui.postMessage({
        name: 'setWidth', 
        data: elementObject
      } as FigmaEvent)
    }

    // console.log('state.elements: ', state.elements)

  }
})

// receive from UI
figma.ui.onmessage = (event) => {

  console.log(event)

  // set width
  if(event.name == 'setWidth') {
    console.log(event)
    // setWidth(event.data)
  }
}