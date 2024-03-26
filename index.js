const box = document.querySelectorAll('.box');
let count = document.querySelector('.container');
let winTxt = document.querySelector('.msg h2');
const win = document.querySelector('.win-msg');
const winMsg = document.querySelector('.msg');
let turn = 0;
for(let i=0; i<box.length;i++){
    box[i].addEventListener('click', ()=>{
        if(box[i].innerHTML === ''){
            turn++;
        }
        if(box[i].innerHTML === ''){
            count.classList.toggle('x');
            if(count.classList.contains('x')){
                box[i].innerHTML = 'X';
            }
            else{
                box[i].innerHTML = 'O';
            }
        }
        if(box[0].innerHTML!='' && box[0].innerHTML === box[3].innerHTML && box[3].innerHTML === box[6].innerHTML){
            winning(box[0].innerHTML);
        }
        else if(box[0].innerHTML!='' && box[0].innerHTML === box[4].innerHTML && box[4].innerHTML === box[8].innerHTML){
            winning(box[0].innerHTML);
        }
        else if(box[0].innerHTML!='' && box[0].innerHTML === box[1].innerHTML && box[1].innerHTML === box[2].innerHTML){
            winning(box[0].innerHTML);
        }
        else if(box[1].innerHTML!='' && box[1].innerHTML === box[4].innerHTML && box[4].innerHTML === box[7].innerHTML){
            winning(box[1].innerHTML);
        }
        else if(box[2].innerHTML!='' && box[2].innerHTML === box[4].innerHTML && box[4].innerHTML === box[6].innerHTML){
            winning(box[2].innerHTML);
        }
        else if(box[2].innerHTML!='' && box[2].innerHTML === box[5].innerHTML && box[5].innerHTML === box[8].innerHTML){
            winning(box[2].innerHTML);
        }
        else if(box[3].innerHTML!='' && box[3].innerHTML === box[4].innerHTML && box[4].innerHTML === box[5].innerHTML){
            winning(box[3].innerHTML);
        }
        else if(box[6].innerHTML!='' && box[6].innerHTML === box[7].innerHTML && box[7].innerHTML === box[8].innerHTML){
            winning(box[6].innerHTML);
        }
        else if(turn === 9){
            winTxt.innerHTML = 'DRAW';
            win.style.display = "flex";
        }
    });
}
function winning(player){
    winTxt.innerHTML = `🎉${player} Wins🎊`;
    win.style.display = "flex";
};
win.querySelector('.rematch').addEventListener('click', ()=>{
    box.forEach((val)=>{
        val.innerHTML='';
    })
    win.style.display = "none";
    turn=0;
});
