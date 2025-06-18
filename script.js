const patternSize = document.getElementById("patternSize");
const sizeLabel = document.getElementById("sizeLabel");
const output = document.getElementById("output");
const patternType = document.getElementById("patternType");
const generateBtn = document.getElementById("generateBtn");

patternSize.oninput = () => {
  sizeLabel.textContent = patternSize.value;
};

generateBtn.onclick = generatePattern;

function generatePattern() {
  const size = parseInt(patternSize.value);
  const type = patternType.value;
  let pattern = "";

  if (type === "pyramid") {
    for (let i = 1; i <= size; i++) {
      pattern += " ".repeat(size - i);
      for (let j = 1; j <= i; j++) {
        pattern += j + " ";
      }
      pattern += "\n";
    }
  } else if (type === "reverse") {
    for (let i = size; i >= 1; i--) {
      pattern += " ".repeat(size - i);
      for (let j = 1; j <= i; j++) {
        pattern += j + " ";
      }
      pattern += "\n";
    }
  } 
  if (type === "right") {
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
}
else if (type === "left") {
  for (let i = 1; i <= size; i++) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
}
else if (type === "full") {
  for (let i = 1; i <= size; i++) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
}
else if (type === "invFull") {
  for (let i = size; i >= 1; i--) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
}
else if (type === "rhombus") {
  for (let i = 1; i <= size; i++) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= size; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
}
else if (type === "diamond") {
  for (let i = 1; i <= size; i++) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
  for (let i = size - 1; i >= 1; i--) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
}
else if (type === "hourglass") {
  for (let i = size; i >= 1; i--) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
  for (let i = 2; i <= size; i++) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
}
else if (type === "hollowSquare") {
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (i === 1 || i === size || j === 1 || j === size) {
        pattern += j + " ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
}
else if (type === "hollowFull") {
  for (let i = 1; i <= size; i++) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === size) {
        pattern += j + " ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
}
else if (type === "hollowInvFull") {
  for (let i = size; i >= 1; i--) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === size) {
        pattern += j + " ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
}
else if (type === "hollowDiamond") {
  for (let i = 1; i <= size; i++) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i) {
        pattern += j + " ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
  for (let i = size - 1; i >= 1; i--) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i) {
        pattern += j + " ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
}
else if (type === "hollowHourglass") {
  for (let i = size; i >= 1; i--) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i) {
        pattern += j + " ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
  for (let i = 2; i <= size; i++) {
    pattern += " ".repeat(size - i);
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i) {
        pattern += j + " ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
}
else if (type === "floyd") {
  let num = 1;
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += num + " ";
      num++;
    }
    pattern += "\n";
  }
}
else if (type === "pascal") {
  for (let i = 0; i < size; i++) {
    pattern += " ".repeat(size - i);
    let num = 1;
    for (let j = 0; j <= i; j++) {
      pattern += num + " ";
      num = num * (i - j) / (j + 1);
    }
    pattern += "\n";
  }
}
  output.textContent = pattern;
  output.innerText = pattern.join('\n\n');  // double line break for space between rows

}

// Generate once on load
generatePattern();
