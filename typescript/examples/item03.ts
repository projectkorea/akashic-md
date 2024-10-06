interface Square {
  width: number
}

interface Rectangle extends Square {
  height: number
}

type Shape = Square | Rectangle

function calculateArea(shape: Shape): number {
  if (shape instanceof Rectangle) {
    // 'Rectangle' only refers to a type, but is being used as a value
    return shape.width * shape.height
    //  Property 'height' does not exist on type 'Square'
  }
}
