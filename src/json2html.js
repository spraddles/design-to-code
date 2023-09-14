import * as fs from 'fs'
// import { Element } from './store'

const name = 'example'
const configFile = './src/config.json'
const targetHtmlFile = `./dist/${name}.html`
const targetCssFile = `./dist/${name}.css`

// var elementsArray: Array<Element> = []
var elementsArray = []

if (fs.existsSync(configFile)) {
    const buffer = fs.readFileSync(configFile)
    const contents = buffer.toString()
    elementsArray = JSON.parse(contents)
}

const htmlString = () => {
    var htmlString = ''
    htmlString+= '<html><head>'
    htmlString+= `<link rel="stylesheet" type="text/css" href="${name}.css" />`
    htmlString+= '</head><body>'
    htmlString+= '<div id="container">'
    elementsArray.forEach((element) => {
        if(element.name !== "container") {
            htmlString+= `<div id="${element.name}">${element.type == 'text' ? element.textContent : ''}</div>`
        }
    })
    htmlString+= '</div>'
    htmlString+= '</body></html>'
    return htmlString
}

const cssString = () => {
    var cssString = ''
    elementsArray.forEach((e) => {

        cssString+= `
            #${e.name} {
                /* position */
                position: absolute;
                ${e.style.position && e.style.position.top ? `top: ${e.style.position.top};` : '' }
                ${e.style.position && e.style.position.left ? `left: ${e.style.position.left};` : '' }
                /* dimensions */
                ${e.style.dimensions && e.style.dimensions.width ? `width: ${e.style.dimensions.width};` : '' }
                ${e.style.dimensions && e.style.dimensions.height ? `height: ${e.style.dimensions.height};` : '' }
                /* colors */
                ${e.style.colors && e.style.colors.color ? `color: ${e.style.colors.color};` : '' }
                ${e.style.colors && e.style.colors["background-color"] ? `background-color: ${e.style.colors["background-color"]};` : '' }
                /* fonts */
                ${e.style.fonts && e.style.fonts["font-family"] ? `font-family: ${e.style.fonts["font-family"]};` : '' }
                ${e.style.fonts && e.style.fonts["font-size"] ? `font-size: ${e.style.fonts["font-size"]};` : '' }
                ${e.style.fonts && e.style.fonts["font-weight"] ? `font-weight: ${e.style.fonts["font-weight"]};` : '' }
                ${e.style.fonts && e.style.fonts["line-height"] ? `line-height: ${e.style.fonts["line-height"]};` : '' }
                ${e.style.fonts && e.style.fonts["text-align"] ? `text-align: ${e.style.fonts["text-align"]};` : '' }
                ${e.style.fonts && e.style.fonts["letter-spacing"] ? `letter-spacing: ${e.style.fonts["letter-spacing"]};` : '' }
                ${e.style.fonts && e.style.fonts["text-transform"] ? `text-transform: ${e.style.fonts["text-transform"]};` : '' }
            }
        `
    })
    return cssString
}

const createHtmlFile = () => {
    return fs.writeFileSync(targetHtmlFile, htmlString())
}

const createCssFile = () => {
    return fs.writeFileSync(targetCssFile, cssString())
}

createHtmlFile()
createCssFile()