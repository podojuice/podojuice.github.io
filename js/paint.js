const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode")
const INITIAL_COLOR = "#2C2C2C";
const saveBtn = document.getElementById("jsSave");

canvas.width = 700;
canvas.height = 700;


ctx.fillStyle ="white";
ctx.fillRect(0, 0, 700, 700)
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillstyle = INITIAL_COLOR;



ctx.lineWidth = 2.5;


let painting = false;

let filling = false;


function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseDown(event) {
    painting = true;
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleModeClick(event) {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";

    }

}

function onMouseUp(event) {
    stopPainting();
}

function handleRangeChange(event) {
    const value = event.target.value;
    ctx.lineWidth = value;
}

function handleCM(event) {
    event.preventDefault();
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);

function handleCanvasClick() {
    if(filling) {
        ctx.fillRect(0,0,700, 700);
    }

}

function handleSaveClick() {
    const image = canvas.toDataURL();
    // jpeg로 만들고 싶으면 todataurl 인자로 "image/jpeg" 넣어주면 댐.
    const link = document.createElement("a");
    link.download = "PaintJS[good]"; // 얘는 이름임.
    link.href = image;
    link.click();
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM)
}

if(range) {
    range.addEventListener("input", handleRangeChange)
}

if(mode) {
    mode.addEventListener("click", handleModeClick)
}

if(saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick)
}