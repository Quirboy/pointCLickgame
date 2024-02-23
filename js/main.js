document.getElementById("mainTitle").innerText = "Point and Click Adventure Game";

const GameWindow = document.getElementById("gameWindow");
const MainCharacter = document.getElementById("mainCharacter");
const door1 = document.getElementById("door1");
const inventoryList = document.getElementById("inventoryList");
const sec = 1000;
const offsetCharacter = 16; // Assuming the character's width is 32px and height is 64px
const counterAvatar = document.getElementById("coungterAvatar")
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const counterrSpeech = document.getElementById("counterSpeech");

const gameState = {
    door2locked: true,
    inventory: []
};

GameWindow.addEventListener("click", function (e) {
    var rect = GameWindow.getBoundingClientRect();
    var X = e.clientX - rect.left;
    var Y = e.clientY - rect.top;
    MainCharacter.style.left = X - offsetCharacter + "px";
    MainCharacter.style.top = Y - offsetCharacter + "px";

    switch (e.target.id) {
        case "door1":
           
            door1.style.opacity = 0.7;
            if (!gameState.inventory.includes("key")) {
                console.log("FOUND KEY");
                const Keyelement = document.createElement("li");
                Keyelement.id = "inv-Key";
                Keyelement.innerText = "key";
                inventoryList.appendChild(Keyelement);
                gameState.inventory.push("key");
            }
            break;
        case "door2":
            if (gameState.door2locked) {
                if (gameState.inventory.includes("key")) {
                    gameState.door2locked = false;
                    console.log("Door unlocked!");
                    // Remove key from inventory
                    gameState.inventory.splice(gameState.inventory.indexOf("key"), 1);
                    const keyElement = document.getElementById("inv-Key");
                    if (keyElement) {
                        keyElement.remove();
                    }
                } else {
                    alert("Door is locked!");
                }
            } else {
                console.log("Enter building");
            }
            break;
            case "satue":
            showMessage(mainCharacterSpeech,"wow")
            setTimeout(function(){counterAvatar.style.opacity = 1;}, 4*sec);
            setTimeout(showMessage,4*sec,counterrSpeech,"pipi")
            setTimeout(showMessage,8*sec,mainCharacterSpeech,"pi")
            setTimeout(function(){counterAvatar.style.opacity = 0;}, 12*sec);


            break;
        default:
            
            door1.style.opacity = 1;
            break;
    }
});

/**
 * 
 *  @param {HTMLElement} targetballoon
 * @param {string} message
 */

function showMessage(targetballoon, message) {
    targetballoon.style.opacity = "1";
    targetballoon.innerText = message;
    setTimeout(function () { hideMessage(targetballoon); }, 4 * sec);
}

function hideMessage(targetballoon) {
    targetballoon.style.opacity = "0";
}

// Example usage of showMessage
setTimeout(function () { showMessage(mainCharacterSpeech, "Hello!"); }, 1 * sec);
setTimeout(function () { hideMessage(mainCharacterSpeech); }, 2 * sec);