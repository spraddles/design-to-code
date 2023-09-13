export interface Element {
    "name"?: string | null
    "type"?: 'shape' | 'text' | 'image' | 'container'
    "textContent": string | null,
    "style": {
        "position": {
            "top": string | null
            "left": string | null
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
            "letter-spacing": string | null
            "text-align": string | null
            "line-height": string | null
        },
        "transform": {
            "text-transform": string | null
        },
        "image": {
            "imageHash": string | null
        }
    }
}

export var state = {
    elements: [] as Array<Element>
}