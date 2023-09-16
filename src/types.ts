export interface FigmaElement {
    "id"?: string | null,
    "idNumeric"?: number | null,
    "name"?: string | null
    "type"?: 'shape' | 'text' | 'image' | 'container'
    "textContent": string | null,
    "isMainContainer": boolean | false,
    "style": {
        "position": {
            "top": string | null
            "left": string | null
            "z-index": number | null
        },
        "dimensions": {
            "width": string | null
            "height": string | null
        },
        "colors": {
            "color": string | null
            "background-color": string | null
        },
        "fonts": {
            "font-family": string | null
            "font-size": string | null
            "font-weight": string | null
            // "line-height": string | null (issues with Figma line-height)
            "text-align": string | null
            "letter-spacing": string | null
            "text-transform": string | null
        },
        "image": {
            "imageHash": string | null
        }
    }
}

export interface FigmaEvent {
    name: string
    data: object | any
}