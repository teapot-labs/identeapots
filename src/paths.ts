type SemicircleOrientation = "up" | "right" | "down" | "left";
type QuarterCircleOrientation = "top-left" | "top-right" | "bottom-right" | "bottom-left";

/**
 * Draws a square on the canvas at the specified x and y coordinates with the specified size.
 * @param context The 2D context of the canvas to draw on.
 * @param x The x coordinate of the left of the square.
 * @param y The y coordinate of the top of the square.
 * @param size The size of the square.
 */
export function square(context: CanvasRenderingContext2D, x: number, y: number, size: number) {
  context.fillRect(x, y, size, size);
}

/**
 * Draw a circle on the canvas at the specified x and y coordinates with the specified radius.
 * @param context The 2D context of the canvas to draw on.
 * @param x The x coordinate of the left of the circle.
 * @param y The y coordinate of the top of the circle.
 * @param radius The radius of the circle.
 */
export function circle(context: CanvasRenderingContext2D, x: number, y: number, radius: number) {
  context.beginPath();
  context.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
  context.fill();
}

/**
 * Draw a shape on the canvas composed of a rectangle with a semicircle on top at the specified x and y coordinates with the specified size and orientation.
 * @param context The 2D context of the canvas to draw on.
 * @param x The x coordinate of the left of the shape.
 * @param y The y coordinate of the top of the shape.
 * @param size The size of the shape.
 * @param orientation The orientation of the shape.
 */
export function semicircleOnRectangle(context: CanvasRenderingContext2D, x: number, y: number, size: number, orientation: SemicircleOrientation) {
  context.beginPath();
  if (orientation === "up") {
    context.moveTo(x, y);
    context.lineTo(x + size, y);
    context.lineTo(x + size, y + size / 2);
    context.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI);
  } else if (orientation === "right") {
    context.moveTo(x + size, y);
    context.lineTo(x + size, y + size);
    context.lineTo(x + size / 2, y + size);
    context.arc(x + size / 2, y + size / 2, size / 2, Math.PI / 2, Math.PI * 1.5);
  } else if (orientation === "down") {
    context.moveTo(x + size, y + size);
    context.lineTo(x, y + size);
    context.lineTo(x, y + size / 2);
    context.arc(x + size / 2, y + size / 2, size / 2, Math.PI, Math.PI * 2);
  } else if (orientation === "left") {
    context.moveTo(x, y + size);
    context.lineTo(x, y);
    context.lineTo(x + size / 2, y);
    context.arc(x + size / 2, y + size / 2, size / 2, Math.PI * 1.5, Math.PI * 0.5);
  }
  context.fill();
}

/**
 * Draw a quarter circle on the canvas at the specified x and y coordinates with the specified radius and orientation.
 * @param context The 2D context of the canvas to draw on.
 * @param x The x coordinate of the left of the quarter circle.
 * @param y The y coordinate of the top of the quarter circle.
 * @param radius The radius of the quarter circle.
 * @param orientation The orientation of the quarter circle.
 */
export function quarterCircle(context: CanvasRenderingContext2D, x: number, y: number, radius: number, orientation: QuarterCircleOrientation) {
  context.beginPath();
  if (orientation === "top-left") {
    context.moveTo(x, y);
    context.arc(x, y, radius, 0, Math.PI / 2);
  } else if (orientation === "top-right") {
    context.moveTo(x + radius, y);
    context.arc(x + radius, y, radius, Math.PI / 2, Math.PI);
  } else if (orientation === "bottom-right") {
    context.moveTo(x + radius, y + radius);
    context.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5);
  } else if (orientation === "bottom-left") {
    context.moveTo(x, y + radius);
    context.arc(x, y + radius, radius, Math.PI * 1.5, Math.PI * 2);
  }
  context.fill();
}
