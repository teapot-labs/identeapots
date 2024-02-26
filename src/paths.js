/**
 * Draws a square on the canvas at the specified x and y coordinates with the specified size.
 * @param {CanvasRenderingContext2D} context The 2D context of the canvas to draw on.
 * @param {number} x The x coordinate of the left of the square.
 * @param {number} y The y coordinate of the top of the square.
 * @param {number} size The size of the square.
 */
exports.square = function (context, x, y, size) {
  context.fillRect(x, y, size, size);
};

/**
 * Draw a circle on the canvas at the specified x and y coordinates with the specified radius.
 * @param {CanvasRenderingContext2D} context The 2D context of the canvas to draw on.
 * @param {number} x The x coordinate of the left of the circle.
 * @param {number} y The y coordinate of the top of the circle.
 * @param {number} radius The radius of the circle.
 */
exports.circle = function (context, x, y, radius) {
  context.beginPath();
  context.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
  context.fill();
};

/**
 * Draw a shape on the canvas composed of a rectangle with a semicircle on top at the specified x and y coordinates with the specified size and orientation.
 * @param {CanvasRenderingContext2D} context The 2D context of the canvas to draw on.
 * @param {number} x The x coordinate of the left of the shape.
 * @param {number} y The y coordinate of the top of the shape.
 * @param {number} size The size of the shape.
 * @param {"up" | "right" | "down" | "left"} orientation The orientation of the shape.
 */
exports.semicircleOnRectangle = function (context, x, y, size, orientation) {
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
};

/**
 * Draw a quarter circle on the canvas at the specified x and y coordinates with the specified radius and orientation.
 * @param {CanvasRenderingContext2D} context The 2D context of the canvas to draw on.
 * @param {number} x The x coordinate of the left of the quarter circle.
 * @param {number} y The y coordinate of the top of the quarter circle.
 * @param {number} radius The radius of the quarter circle.
 * @param {"top-left" | "top-right" | "bottom-right" | "bottom-left"} orientation The orientation of the quarter circle.
 */
exports.quarterCircle = function (context, x, y, radius, orientation) {
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
};
