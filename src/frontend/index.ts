import { FigmaElement, EventObject } from '../types'
import { setWidth } from './utils/setWidth'

// receive event
onmessage = (event) => {

    // set width
    if(event.data.pluginMessage.name == 'setWidth') {
        var widthData = setWidth(event.data.pluginMessage.data as FigmaElement)
        const eventObject = {
            name: 'setWidth',
            data: widthData
        }
        parent.postMessage({ pluginMessage: eventObject as EventObject, pluginId: '*' }, '*')
    }
}