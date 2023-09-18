import { FigmaElement } from './../../types'

export const setWidth = (element: FigmaElement) => {

    if(element.type == 'text') {

        /* JS Fiddle test:

            // canvas
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')
            const wrapper = document.getElementsByTagName('body')
            wrapper[0].appendChild(canvas)

            // input
            const fontWeight = 336
            const textAlign = 'center'
            const fontSize = '64px'
            const fontFamily = 'Sans-serif'
            const letterSpacing = 'normal'
            const words = 'Customer Experience'

            // set inputs
            context.textAlign = textAlign
            context.textBaseline = 'middle'
            context.letterSpacing = letterSpacing
            context.font = `${fontWeight} ${fontSize} ${fontFamily}`
            context.fillText(words, 0, 0)

            // calculate width
            const widthCalc = Math.round(context.measureText(words).width)
            console.log(widthCalc)

        */

        const canvas = document.createElement('canvas')
        canvas.setAttribute('id', 'canvas')
        const wrapper = document.getElementById('wrapper')
        wrapper?.appendChild(canvas)
        const context = canvas.getContext('2d')  


        const fontWeight = element.style.fonts['font-weight']
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
            context.fillText(words, 0, 0)
            context.textBaseline = 'middle'
            context.font = `${fontWeight} ${fontSize} ${fontFamily}`
            const widthCalc = Math.round(context?.measureText(words as string).width)
            canvas.remove()

            const returnObject = {
                id: element.id,
                width: widthCalc + 1 + 'px' // add 1 px buffer
            }

            return returnObject
        }
    }
}