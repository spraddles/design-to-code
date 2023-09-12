import { rgb2hex } from './utils/rgb2hex'
// @ts-ignore
import require from 'require'

var styleObject: styleObjectProps = {}

interface styleObjectProps {
  // dimensions
  width?: string
  height?: string
  // position
  left?: string
  right?: string
  // colors
  color?: string
  background?: string
}
 
figma.showUI(__html__) 

figma.on('selectionchange', () => { 

  const nodeArray: ReadonlyArray<BaseNode> = figma.currentPage.selection
  const node: any = nodeArray[0]

  if(node) {
    
    console.log('node: ', node)

    const red = node?.backgrounds[0].color.r || ''
    const green = node?.backgrounds[0].color.g || ''
    const blue = node?.backgrounds[0].color.b || ''

    styleObject.width = node?.width ? node.width + 'px' : ''
    styleObject.height = node?.height ? node.height + 'px' : ''
    styleObject.left = node?.x ? node.x + 'px' : ''
    styleObject.right = node?.y ? node.y + 'px' : ''
    styleObject.background = rgb2hex(red, green, blue)

    console.log('styleObject: ', styleObject)
    // figma.ui.postMessage(styleObject)
  }
})
