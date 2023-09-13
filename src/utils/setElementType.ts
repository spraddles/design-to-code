import { state, Element } from './../store'

export const setElementType = (elementObject: Element) => {

    // shape:
    if(elementObject.style.colors['background-color'] !== null) {
        elementObject.type = 'shape'
    }

    // text: 
    if(elementObject.style.fonts['font-size'] !== null) {
        elementObject.type = 'text'
    }

    // image: if imageHash
    if(elementObject.style.image['imageHash'] !== null) {
        elementObject.type = 'image'
    }

    // container: ??

    return state.elements.push(elementObject as Element)
}