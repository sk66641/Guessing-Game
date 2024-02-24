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
    }
    else{
        para.classList.remove("green-text");
        para.classList.add("red-text");
        if(guess<num){
            para.innerHTML= "Try again. Go higher!";

        }
        else{
            para.innerHTML= "Try again. Go lower!";
        }
    }
}
