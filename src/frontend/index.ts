import { FigmaElement, FigmaEvent } from '../types'
import { setWidth } from './utils/setWidth'

// receive event
onmessage = (event) => {

    // set width
    if(event.data.pluginMessage.name == 'setWidth') {
        var getWidth = setWidth(event.data.pluginMessage.data as FigmaElement)
        const eventObject = {
            name: 'setWidth',
            data: getWidth
        }
        parent.postMessage({ pluginMessage: eventObject as FigmaEvent, pluginId: '*' }, '*')
    }
}