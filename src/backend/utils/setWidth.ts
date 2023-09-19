import { state } from '../store'
import { FigmaElement } from '../../types'

export const setWidth = (data: any) => {

    const index = state.elements.findIndex((element: FigmaElement) => element.id == data.id)
    state.elements[index].textMeta.widthSet = true
    state.elements[index].style.dimensions.width = data.width
}
