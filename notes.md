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
-parseCss line height issue
-shapes: SVG as background or use random colors
> https://www.figma.com/plugin-docs/working-with-images/
> see example: "Retrieve fills from current selection"

-add line break: characters: "Queenstown\n\nComing soon"
-if text has double space, add &nbsp
-research "fontSize:Symbol(figma.mixed)" issue
-setLineHeight: advanced
-remove elements with no relevant data (e.g. shapes with no colours, text with no content, etc.)
-setWidth not always accurate (fixed @ 3 words)