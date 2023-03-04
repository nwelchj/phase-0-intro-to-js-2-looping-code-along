// Code your solutions in this file

const names = [`Guadalupe`, `Ollie`, `Aki`]

function writeCards (names,holiday) {
    
    var ThankYou = []
     for (let i = 0; i < names.length; i++){
         console.log (i);
         ThankYou.push (`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
         console.log (i);
          
          
          console.log ([ThankYou]);
     

        }


        return(ThankYou)


       
         
    //console.log(i)
    //return (ThankYou)
}

// function pushToNewArray (writeCards){
//     thankYou.push(writeCards)
//     console.log (thankYou);
// }
//writeCards(Thanks,`suprise`);
//pushToNewArray(writeCards);
writeCards( "birthday",names);



function countDown (){
    for (let i =0; i < 11; i++)
    console.log(i)
}