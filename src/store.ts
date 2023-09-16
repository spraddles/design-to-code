import { FigmaElement } from './types'

export var state = {

    mainContainerID: null as null | string,
    elementIDs: [] as Array<String>,

    elementIndex: -1 as number,
    shapeElementIndex: -1 as number,
    textElementIndex: -1 as number,
    imageElementIndex: -1 as number,

    elements: [] as Array<FigmaElement>
}