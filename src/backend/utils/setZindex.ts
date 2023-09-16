import { state } from '../../store'
import { FigmaElement } from '../../types'

export const setZindex = () => {

    // add key
    state.elements.forEach((element: FigmaElement) => {
        element.idNumeric = Number(element.id?.replace(/\D/g,''))
    })
    
    // sort
    state.elements.sort((a: any, b: any) => {
        return a.idNumeric as any - b.idNumeric as any
    })
    
    // add z-index
    state.elements.forEach((element, index) => {
      if(index == 0) { 
        element.style.position["z-index"] = (index + 1)
      }
      else (
        element.style.position["z-index"] = (index * 10)
      )
      // remove key
      delete element.idNumeric
    })
}