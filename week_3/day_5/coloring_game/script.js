
const gridContainer = document.querySelector('.game-col-2');
const numberOfSquares = 1440; 

for (let i = 0; i <= numberOfSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    gridContainer.appendChild(square);
}

const colors = document.querySelectorAll('.color');
const squares = document.querySelectorAll('.square');
const clearBtn = document.querySelector('.clear-btn');

let selectedColor = null;
let isDrawing = false;

colors.forEach((color)=>{
    color.addEventListener("click", ()=>{
        selectedColor = color.classList[1];
        console.log(selectedColor)
       
    })
})

squares.forEach((sq)=>{
            // sq.addEventListener("click",()=>{
            //     if(!selectedColor) return;
            //     sq.classList.add(`${selectedColor}`)
            //     console.log(sq.classList)
            // })

             sq.addEventListener('mousedown', (e) => {
                if (!selectedColor) return;
                isDrawing = true;
                sq.classList.add(`${selectedColor}`);
            });

            sq.addEventListener('mouseover', (e) => {
                if (isDrawing && selectedColor) {
                    sq.classList.add(`${selectedColor}`);
                }
            });

            sq.addEventListener('mouseup', () => {
                isDrawing = false;
            });
        })

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

clearBtn.addEventListener('click',()=>{
    squares.forEach((sq)=>{
        sq.classList.remove(`${selectedColor}`)
    })
})