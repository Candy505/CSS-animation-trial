
   /*console.log("hello") ;
   console.log("hi");
*/


  function getComputerChoice()
  {
    let t = Math.ceil(Math.random() * 3); // if we use floor inclusive of 0 but exclusive of 1 so 3 is never geerated
    
    if(t == 1)
    {
        return "stone" ;
    }

    else if(t == 2)
    {
        return "scissor" ;
    }

    else
    {
        return "paper" ;
    }
  }

  //console.log(getComputerChoice()) ;
  
  

  //round starts
  
  function play(playerSelect,compSelect)
  {
    console.log("comp   : "+ compSelect);
    console.log("player : "+ playerSelect);


    if(playerSelect == "stone"  && compSelect == "paper" ||  playerSelect == "paper"  && compSelect == "scissor" || playerSelect == "scissor"  && compSelect == "stone")
    {
           return 'c' ;
    }

    else if(playerSelect == compSelect)
    {
        //return 'd' ;
        console.log("No points awarded!") ;
    }

    else
    {
        return'p' ;
        //console.log("p");
    }

  }

   
  // console.log(play(player,comp));

// Game time fellas !!

function game()
{
    let p = 0 ;
    let c = 0;

    for(let i = 0 ;i <5;i++)
    {
        
     let player = prompt("Enter your choice .....");
     let comp = getComputerChoice();
 
     let r = play(player.toLowerCase(),comp);
       
      if(r == 'p')
       { p++;}
      else if(r == 'c')
       { c++;}
    }

    if(c > p)
    {
           console.log("comp wins!") ;
    }

    else if(c == p)
    {
        console.log("Draw!") ;
    }

    else
    {
        console.log("Player wins!") ;
    }

}


game();