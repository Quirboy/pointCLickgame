document.getElementById("mainTitle").innerText = "Point and Click adventure game";
//gameWindow
const GameWindow = document.getElementById("gameWindow");

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

     break;

     default:
        MainCharacter.style.backgroundColor ="#ffff00"
    door1.style.opacity = 1;

     break;
    }


 
 
}