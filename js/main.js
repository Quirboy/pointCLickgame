document.getElementById("mainTitle").innerText = "Point and Click adventure game";

//Game window reference
const gameWindow = document.getElementById("gameWindow");


// Game state
 gameState = {
    "castlelocked": true,
    "inventory": []
};

const sec = 1000;

// Main Character
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

// Speech bubbles
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const counterSpeech = document.getElementById("counterSpeech");
const counterAvatarImg = document.getElementById("counterAvatarImg");

// Inventory
const inventoryBox = document.getElementById("inventoryBox");
const inventoryList = document.getElementById("inventoryList");

// Foreground Items
const TombeStone = document.getElementById("TombeStone");
const TombeStone2 = document.getElementById("TombeStone2");
const Hole = document.getElementById("Hole");
const forrest = document.getElementById("forrest");
const cave = document.getElementById("cave");
const castel = document.getElementById("castel");
const Sign = document.getElementById("Sign");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    if (e.target.id !== "mcImage") {
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";
    }

    console.log(e.target.id);
    switch (e.target.id) {
        
        
        case "Sign":
            showMessage(mainCharacterSpeech, "It's just a sign.");
            break;
        case "Hole":
            showMessage(mainCharacterSpeech, "It's a hole.");
            alert("You almost fell into the hole!");
            break;
        case "cave":
            showMessage(mainCharacterSpeech, "Hello anybody here?");
            setTimeout(function () { counterAvatarImg.style.opacity = 1; }, 4 * sec);
            setTimeout(showMessage, 3 * sec, counterSpeech, "Boo");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, "What are you doing here?");
            setTimeout(showMessage, 12 * sec, counterSpeech, "waiting for you ");
            setTimeout(showMessage, 16 * sec, mainCharacterSpeech, "why and why tell me to go here.");
            setTimeout(showMessage, 12 * sec, counterSpeech, " I am just lonely and bored so i need someone to talk to");
            setTimeout(showMessage, 16 * sec, mainCharacterSpeech, "oh oke(weird).");
            setTimeout(showMessage, 12 * sec, counterSpeech, "for your troublles here are the key ");
            if (document.getElementById("key1") !== null) {
                console.log('Found key!');
                document.getElementById("key1").remove();
                changeInventory('key', 'add');
            }
            setTimeout(showMessage, 16 * sec, mainCharacterSpeech, "Thank you.");
            setTimeout(function () { counterAvatarImg.style.opacity = 0; }, 20 * sec);
            break;
        case "TombeStone":
            showMessage(mainCharacterSpeech, "Wow a grave..");
            setTimeout(function () { counterAvatarImg.style.opacity = 1; }, 4 * sec);
            setTimeout(showMessage, 3 * sec, counterSpeech, "boo");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, "You don't have to be so mean.");
            setTimeout(showMessage, 12 * sec, counterSpeech, "than don't interupt my sleep");
            setTimeout(showMessage, 16 * sec, mainCharacterSpeech, "Okay Bye.");
            setTimeout(function () { counterAvatarImg.style.opacity = 0; }, 20 * sec);
            break;
        case "TombeStone2":
            showMessage(mainCharacterSpeech, "Wow a grave..");
            setTimeout(function () { counterAvatarImg.style.opacity = 1; }, 4 * sec);
            setTimeout(showMessage, 4 * sec, counterSpeech, "hello can i help you");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, "wow a ghost .");
            setTimeout(showMessage, 12 * sec, mainCharacterSpeech, "can you help enter the castle .");
            setTimeout(showMessage, 16 * sec, counterSpeech, "sorry no maby you find your answers in the cave");
            setTimeout(showMessage, 20 * sec, mainCharacterSpeech, "Okay thank you have a great day/ life?.");
            setTimeout(function () { counterAvatarImg.style.opacity = 0; }, 24 * sec);
            break;
        case "castel":
            if (gameState.castlelocked == true) {
                if (document.getElementById("inv-key") !== null) {
                    gameState.door2locked = false;
                    changeInventory('key', 'delete');
                    console.log('Door unlocked!');
                    alert(" This is the end");
                } else {
                    alert("Door is locked!");
                }
            } else {
                console.log('this is the end for now');
            }
            break;
       
        default:
            break;
    }
}

/**
 * function to change inventory
 * @param {string} itemName 
 * @param {string} action "add", "delete"
 * @returns 
 */
function changeInventory(itemName, action) {
    if (itemName == null || action == null) {
        console.log('wrong parameters given to changeInventory()');
        return
    }

    switch (action) {
        case 'add':
            gameState.inventory.push(itemName);
            break
        case 'delete':
            gameState.inventory.find(function (item, index) {
                if (item == itemName) {
                    var index = gameState.inventory.indexOf(item);
                    if (index !== -1) {
                        gameState.inventory.splice(index, 1);
                    }
                }
            })
            break

        default:
            break;
    }
    updateInventory(gameState.inventory, inventoryList);
}

/**
 * update inventoryList
 * @param {Array} inventory array of items 
 * @param {HTMLElement} inventoryList html <ul> element 
 */
function updateInventory(inventory, inventoryList) {
    inventoryList.innerHTML = '';
    inventory.forEach(function (item) {
        const inventoryItem = document.createElement("li");
        inventoryItem.id = "inv-" + item;
        inventoryItem.innerText = item;
        inventoryList.appendChild(inventoryItem);
    })
}

/**
 * Shows a message in a speech bubble
 * @param {getElementById} targetBalloon 
 * @param {string} message 
 */
function showMessage(targetBalloon,message) {
    targetBalloon.style.opacity = "1";
    targetBalloon.innerText = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon);
}

/**
 * Set the opacity to 0
 * @param {getElementById} targetBalloon 
 */
function hideMessage(targetBalloon) {
    
    targetBalloon.style.opacity = "0";
}