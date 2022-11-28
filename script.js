let n = 35;
let arr = [];
let x = 50;

function slider() {
    n = document.getElementById("size").value;
    init();
}
function sliderTwo() {
    x = document.getElementById("speed").value;
}

init(); // auto run intit function and create new array at refresh
function init() {
    arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Math.random(); // random floating number btw 0-1
    }
    // console.log(arr);
    showbars();
}
//flex container 
function alignStart() {
    document.getElementById("containertwo").style.alignItems = "flex-start";
}
function alignCenter() {
    document.getElementById("containertwo").style.alignItems = "center";
}
function alignEnd() {
    document.getElementById("containertwo").style.alignItems = "flex-end";
}


function sort() {
    // const copy=[];
    const copy = [...arr]; //spread operator to create array copy, slice operatoe can also be used to create copy.
    // const mo=[];
    const moves = BubbleSort(copy);
    console.log(moves);
    animate(moves);
}

function animate(moves) {
    if (moves.length == 0) {
        showbars();
        return;
    }
    // const [i, j] = moves.shift(); //destructuring moves array elements
    const move = moves.shift();
    const [i, j] = move.indices;
    if (move.type == "swap") {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    showbars(move);
    setTimeout(() => {
        animate(moves);
    }, x);
}

function BubbleSort(array) {
    const moves = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            moves.push({ indices: [j, j + 1], type: "compare" });
            if (array[j + 1] < array[j]) {
                moves.push({ indices: [j, j + 1], type: "swap" });
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return moves;
}
//merge sort

function showbars(move) {
    document.getElementById("containertwo").innerHTML = ""; // or containertwo.innerHTML="";
    for (let i = 0; i < n; i++) {
        const bar = document.createElement("div");
        bar.style.height = arr[i] * 100 + "%";
        bar.style.width = "45px";
        bar.style.margin = "0px 1.5px";
        bar.style.backgroundColor = "#336b87";
        bar.style.borderRadius = "5px";
        // bar.setAttribute("id", "elem" + i); i++;
        // if (indices && indices.includes(i)) {
        //     bar.style.backgroundColor = "red";
        // }
        if (move && move.indices.includes(i)) {
            if (move.type == "swap") {
                bar.style.backgroundColor = "red";
            } else {
                bar.style.backgroundColor = "blue";
            }
        }
        containertwo.appendChild(bar);
    }
}

// var a = 1;
// console.log((a) ? "a is true" : "a is false");

