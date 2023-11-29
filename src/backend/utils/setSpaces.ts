import { state } from '../store'
import { FigmaElement } from '../../types'

export const setSpaces = (elementObject: FigmaElement) => {

  if(elementObject.textMeta.content !== null) {

    var text: string = elementObject.textMeta.content
    text = text.replace(/  /g,'&#20;&#20;')

    const index = state.elements.findIndex((element: FigmaElement) => element.id == elementObject.id)
    return state.elements[index].textMeta.content = text

  }
}