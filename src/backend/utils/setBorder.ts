import { state } from '../store'
import { FigmaElement } from '../../types'
import { rgb2hex } from './rgb2hex'

export const setBorder = (node: any, elementObject: FigmaElement) => {

    if(elementObject.type == 'shape') {

        var width: number = 0
        var style: string = ''
        var colour: string = ''

        if(node.strokes.length !== 0) {
            style = node.strokes[0].type
            width = node.strokeWeight
            colour = rgb2hex(node.strokes[0].color.r, node.strokes[0].color.g, node.strokes[0].color.b)
            const index = state.elements.findIndex((element: FigmaElement) => element.id == elementObject.id)
            
            return state.elements[index].style.border = `${width}px ${style} ${colour}`
        }
    }
}