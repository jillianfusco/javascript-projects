
function makeLine(size) {
    let line = "";
  for (let i = 0; i < size; i++) {
    line += "#"
  }
  return line;
}

// console.log(`Make Line: \n${makeLine(5)}`)

function makeSquare(size) {
    return makeRectangle(size, size);
}

// console.log(`Make Square: \n${makeSquare(5)}`)

function makeRectangle (width, height) {
    let rectangle = ""
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + "\n");
    }
    return rectangle.slice(0, -1);
}

// console.log(`Make Rectangle: \n${makeRectangle(5, 3)}`)

function makeDownwardStairs (height) {
    let stairs = "";
    for (let i = 0; i < height; i++) {
        stairs += makeLine(i + 1) + `\n`;
    }
    return stairs.slice(0, -1);
}

// console.log(`Make Downward Stairs: \n${makeDownwardStairs(5)}`)

function makeSpaceLine (numSpaces, numChars) {
    let spaces = " ".repeat(numSpaces);
    let chars = "#".repeat(numChars);
    return spaces + chars + spaces;
}

// console.log(`Make Space Line: \n${makeSpaceLine(3,5)}`)

function makeIsoscelesTriangle(height) {
    let triangle = ""
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1)+ `\n`);
    }
    return triangle.slice(0, -1)
}

// console.log(`Make Isosceles Triangle: \n${makeIsoscelesTriangle(5)}`)

function makeDiamond(height) {
    let diamond = makeIsoscelesTriangle(height) + '\n';
  for (let i = height - 2; i >= 0; i--) {
    diamond += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
  }
  return diamond;
}

console.log(`Make Diamond: \n${makeDiamond(5)}`)