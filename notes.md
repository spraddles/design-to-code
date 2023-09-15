Notes:

https://github.com/andreincu/Styler/blob/master/src/code/modules/layers.ts#L35

const isContainer = (layer) => ['FRAME', 'COMPONENT', 'INSTANCE'].includes(layer.type);
const isShape = (layer) => ['RECTANGLE', 'ELLIPSE', 'POLYGON', 'STAR', 'VECTOR'].includes(layer.type);
const isText = (layer) => layer.type === 'TEXT';

Preact v-dom:
https://preactjs.com/guide/v8/api-reference/#preactrender


Sending & receiving messages to / from UI:
https://www.figma.com/plugin-docs/creating-ui/


Todo:
-font fallback
-shapes: SVG as background or use random colors
