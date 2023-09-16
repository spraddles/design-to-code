import { state } from '../../store'
import { FigmaElement } from '../../types'

export const setData = (node: any, elementObject: FigmaElement) => {

    state.elementIndex = state.elementIndex + 1

    // ***************************************** TYPES *****************************************

    // container:
    if(state.elementIndex == 0) {
        elementObject.isMainContainer = true
        elementObject.name = 'container'
        elementObject.id ? state.mainContainerID = elementObject.id : null
        elementObject.style.position.top = '0px'
        elementObject.style.position.left = '0px'
    }
    // text: 
    if(elementObject.style.fonts['font-size'] !== null) {
        state.textElementIndex = state.textElementIndex + 1
        elementObject.type = 'text'
        elementObject.name = `text-${state.textElementIndex}`
        elementObject.style.fonts['font-family'] = 'Sans-serif'
    }
    // image:
    if(elementObject.style.image['imageHash'] !== null) {
        state.imageElementIndex = state.imageElementIndex + 1
        elementObject.type = 'image'
        elementObject.name = `image-${state.imageElementIndex}`
    }
    // default to shape type (if none set)
    if(elementObject.name == null && !elementObject.isMainContainer) {
        state.shapeElementIndex = state.shapeElementIndex + 1
        elementObject.type = 'shape'
        elementObject.name = `shape-${state.shapeElementIndex}`
        // set color
        if(elementObject.style.colors.color == null) {
            elementObject.style.colors.color = elementObject.style.colors['background-color']
        }
        if(elementObject.style.colors['background-color'] == null) {
             elementObject.style.colors['background-color'] = elementObject.style.colors.color
        }
    }

    // ***************************************** POSITION *****************************************

    if(elementObject.isMainContainer) { // is main container
        elementObject.style.position.left = '0px'
        elementObject.style.position.top = '0px'
    }
    // deep node with many parents
    else if(!elementObject.isMainContainer && state.mainContainerID == node.parent.parent.parent.parent.parent.id) { // 5 deep
        elementObject.style.position.left = (node.x + node.parent.x + node.parent.parent.x + node.parent.parent.parent.x + node.parent.parent.parent.parent.x) + 'px'
        elementObject.style.position.top = (node.y + node.parent.y + node.parent.parent.y + node.parent.parent.parent.y + node.parent.parent.parent.parent.y) + 'px'
    }
    else if(!elementObject.isMainContainer && state.mainContainerID == node.parent.parent.parent.parent.id) { // 4 deep
        elementObject.style.position.left = (node.x + node.parent.x + node.parent.parent.x + node.parent.parent.parent.x) + 'px'
        elementObject.style.position.top = (node.y + node.parent.y + node.parent.parent.y + node.parent.parent.parent.y) + 'px'
    }
    else if(!elementObject.isMainContainer && state.mainContainerID == node.parent.parent.parent.id) { // 3 deep
        elementObject.style.position.left = (node.x + node.parent.x + node.parent.parent.x) + 'px'
        elementObject.style.position.top = (node.y + node.parent.y + node.parent.parent.y) + 'px'
    }
    else if(!elementObject.isMainContainer && state.mainContainerID == node.parent.parent.id) { // 2 deep
        elementObject.style.position.left = (node.x + node.parent.x) + 'px'
        elementObject.style.position.top = (node.y + node.parent.y) + 'px'
    }
    else if(!elementObject.isMainContainer && state.mainContainerID == node.parent.id) { // parent is main container
        elementObject.style.position.left = node.x + 'px'
        elementObject.style.position.top =  node.y + 'px'
    }
    
    state.elements.push(elementObject)
}
