import { FigmaElement } from './../../types'

export const setWidth = (element: FigmaElement) => {

    if(element.type == 'text') {

        const canvas = document.createElement('canvas')
        canvas.setAttribute('id', 'canvas')
        const wrapper = document.getElementById('wrapper')
        wrapper?.appendChild(canvas)
        const context = canvas.getContext('2d')  
        
        const letterSpacing = element.style.fonts['letter-spacing']
        const textAlign = element.style.fonts['text-align'] !== null ? element.style.fonts['text-align'] : 'left'
        const fontSize = element.style.fonts['font-size']
        const fontFamily = 'Sans-serif' // override until we support all fonts

        var words = element.textMeta?.content || ''
        if(element.style.fonts['text-transform'] == 'uppercase') {
            words = words.toUpperCase()
        }
        else if(element.style.fonts['text-transform'] == 'lowercase') {
            words = words.toLowerCase()
        }

        if(context) {
            // @ts-ignore
            context.letterSpacing = letterSpacing
            // @ts-ignore
            context.textAlign = textAlign
            context.fillText(words.toUpperCase(), 0, 0)
            context.textBaseline = 'middle'
            context.font = `${fontSize} ${fontFamily}`
            const widthCalc = Math.round(context?.measureText(words as string).width)
            canvas.remove()

            const returnObject = {
                id: element.id,
                width: widthCalc + 2 + 'px' // add 1 px
            }

            return returnObject
        }
    }
}