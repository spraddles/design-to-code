import { state } from '../store'
import { FigmaElement } from '../../types'

export const setLineHeight = (elementObject: FigmaElement) => {

  if(elementObject.style.fonts['font-size'] !== null) {

    var lineHeight: number | string = 0

    // if % then (e.g. 160%) so 160 / 100 = 1.6, 1.6 * 14px (font size) = 22.4px
    if(elementObject.style.fonts['line-height'].unit == 'PERCENT') {
      lineHeight = elementObject.style.fonts['line-height'].value / 100
    }
    
    // if PIXELS and VALUE = 0, line-height = 1
    else if (elementObject.style.fonts['line-height'].unit == 'PIXELS' && elementObject.style.fonts['line-height'].value == 0) {
      lineHeight = 1
    }

    // else default to what Figma says
    else if (elementObject.style.fonts['line-height'].unit == 'PIXELS' && elementObject.style.fonts['line-height'].value !== 0) {
      lineHeight = elementObject.style.fonts['line-height'].value + 'px'
    }

    // @TODO: add new line-height cap method

    const index = state.elements.findIndex((element: FigmaElement) => element.id == elementObject.id)
    return state.elements[index].style.fonts['line-height'] = lineHeight

  }
}