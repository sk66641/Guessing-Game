let num= Math.floor(Math.random()*100);
let count=0;

function fun(){
    count++;
    guess = document.querySelector("#userGuess").value;
    para = document.querySelector("#message");
    if(num==guess){
        para.innerHTML="Congratulations! You guessed correctly. It took you "+ count + " tries.";
        para.classList.remove("red-text");
        para.classList.add("green-text");
        para.classList.remove("blue-text");
    }
    else{
        if(guess<num){
            para.innerHTML= "Try again. Go higher!";
            para.classList.remove("green-text");
            para.classList.add("blue-text");
            para.classList.remove("red-text");
        }
        else{
            para.innerHTML= "Try again. Go lower!";
            para.classList.remove("green-text");
            para.classList.add("red-text");
            para.classList.remove("blue-text");
        }
    }
    t = document.querySelector("#guesses");
    trow = document.createElement("tr");
    td = document.createElement("td");
    content=document.createTextNode(guess);
    td.appendChild(content);
    trow.appendChild(td);
    t.append(trow);
    if(guess == num) trow.classList.add("correct-guess");
    else{
        if(guess<num) trow.classList.add("incorrect-guess-low");
        else trow.classList.add("incorrect-guess-high");
    }
}

function resetGame() {
    location.reload();
}
