function generate()
{
   
    function playSound () {
        let ding = new Audio('head.mp3');
        ding.play();
    }

    let a = Math.floor(Math.random() * 10);
    

    if ((a%2) == 0) {
        document.getElementById("display").innerHTML = "HEAD"  
        
    } 

        else {

            document.getElementById("display").innerHTML =   "TAIL" 
            
          }
}