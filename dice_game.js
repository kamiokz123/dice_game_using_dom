
let score = [0,0,0,0];
let turn =1;
let done=false;




btn5.addEventListener("click",start_game);
btn6.addEventListener("click",check_result);



function start_game(){
    score=[0,0,0,0]
    btn5.innerHTML="ROLL DICE";
    result.innerHTML="result :";
    //  playDiceGame(round)

    btn1.addEventListener("click",tog)
    btn2.addEventListener("click",tog)
    btn3.addEventListener("click",tog)
    btn4.addEventListener("click",tog)
    btn1.classList.add("active" , "roll")


}


function check_result(){
    if (done) {
        let draw = false;
        for ( l = 0; l < 4; l++) {
        
            for (k = l+1; k < 4; k++) {
                if (score[k]==score[l]) {
                    num=score[k];
                    draw=true;
                }
            }
            if (draw==true) {
                result.innerHTML="match is draw";
                done=false;
                return 1;
            }
          }
          if (draw==true) {
            result.innerHTML="match is draw";
            done=false;
            return 1;
        } 
    }
    if (done) {

        let h = score[0];
        let player=0;
    
            for (let i = 0; i < score.length; i++) {
        
                if (score[i]>h) {
                    h=score[i]
                    player=(i);
                }   
            }
          result.innerHTML=`winner is player ${(player+1)} with score ${h}`;
          player=0;
          h=arr[0];
          done=false;
    }
    else{
        result.innerHTML="please finish game";
    }
}


function tog(e){

    if (e.target.id==="btn1"&&turn===1) {
    let pl1= Math.floor((Math.random()*6)+1);
        e.target.innerHTML=pl1;
        score[0]+=pl1;
        turn=2;
        // console.log(e.target.nextElementSibling);
        e.target.classList.remove("active" , "roll")
        e.target.nextElementSibling.classList.add("active" , "roll");
    }
    else if(e.target.id==="btn2"&&turn===2){
        let pl1= Math.floor((Math.random()*6)+1);
            e.target.innerHTML=pl1;
            score[1]+=pl1;  
            turn=3;  
     e.target.classList.remove("active" , "roll");
     btn3.classList.add("active" , "roll")

    }
    else if(e.target.id==="btn3"&&turn===3){
        let pl1= Math.floor((Math.random()*6)+1);
            e.target.innerHTML=pl1;
            score[2]+=pl1; 
            turn=4;   
        e.target.classList.remove("active" , "roll");
        btn4.classList.add("active" , "roll")

    }
    else if(e.target.id==="btn4"&&turn==4){
        let pl1= Math.floor((Math.random()*6)+1);
            e.target.innerHTML=pl1;
            score[3]+=pl1; 
            turn=1;   
            e.target.classList.remove("active" , "roll");
            result.innerHTML="Game finished click on check result or start new game";
            btn5.innerHTML="Start new game"
            done=true;
    }
    scr.innerHTML=score;

    return 1;
}



 

    
  

      
    



