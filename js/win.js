let winStep = 0;
let winD = document.querySelector('.win__d');
let winArr = shuffle([...contentWin].flat());

winD.innerHTML = winArr[winStep];

function winChoose(num){
    winStep+=1;
    if (~contentWin[num].indexOf(winD.textContent)) userWin+=1;
    if (winStep < winArr.length){
        return winD.innerHTML = winArr[winStep];
    }
    scoreButton(0);
}
