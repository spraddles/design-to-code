import { rgb2hex } from './utils/rgb2hex'
import { state } from './store'
import { EventObject, FigmaElement } from '../types'
import { setData } from './utils/setData'
import { setZindex } from './utils/setZindex'
import { setWidth } from './utils/setWidth'
import { setLineHeight } from './utils/setLineHeight'

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
        'textMeta': {
          'content': node.characters ? node.characters : null,
          'wordCount': 0,
          'isSentence': false
        },
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
            'line-height': node.lineHeight ? node.lineHeight : null,
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

      setLineHeight(elementObject)

      setZindex()

      // send to UI
      if(elementObject.type == 'text' && elementObject.textMeta?.isSentence == false) {
        figma.ui.postMessage({
          name: 'setWidth', 
          data: elementObject
        } as EventObject)
      }
    }

    console.log('state.elements: ', state.elements)

  }
})

// receive from UI
figma.ui.onmessage = (event) => {

  // set width
  if(event.name == 'setWidth') {
    setWidth(event.data)
    
    console.log('state.elements: ', state.elements)
  }
}