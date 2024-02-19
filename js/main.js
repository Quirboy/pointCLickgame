document.getElementById("mainTitle").innerText = "Point and Click adventure game";
//gameWindow
const GameWindow = document.getElementById("gameWindow");


const inventoryBox  = document.getElementById("inventoryBox")
const inventoryList  = document.getElementById("inventoryList")
//FOREGROUND 
    const door1 = document.getElementById("door1")
//maincharatcer
const MainCharacter = document.getElementById("mainCharcter");
const offsetCharcater =40;

GameWindow.onclick = function(e)
{
    var rect = GameWindow.getBoundingClientRect();
    var X = e.clientX - rect.left;
    var Y = e.clientY - rect.top;
    MainCharacter.style.left = X - offsetCharcater +"px";
    MainCharacter.style.top = Y - offsetCharcater +"px";
    console.log(e.target.id);

    switch(e.target.id)
    {
       
     case "door1":
        MainCharacter.style.backgroundColor ="#ffff00"
    door1.style.opacity = 0.7;
    if(document.getElementById("key1") !== null){

        console.log  ("FOUND KEY");
        document.getElementById("key1").remove();
        const Keyelement = document.createElement("li");
        Keyelement.id= "inv-KEy"
        Keyelement.innerText = "key";
        inventoryList.appendChild(Keyelement);
   
    }
        
     break;
     case "door2":

     

     break;
     default:
        MainCharacter.style.backgroundColor ="#ffff00"
    door1.style.opacity = 1;

     break;
    }


 
 
}