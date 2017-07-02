#pragma strict

public var controlPad:GameObject;
public var player:GameObject;

private var controlPadScript:controlPadController;
private var playerScript:Player;

function Start () {
    controlPadScript = controlPad.GetComponent(controlPadController);
    playerScript = player.GetComponent(Player);
}

function Update () {
	
}

function OnGUI() {
    var e : Event = Event.current;
    var code = -1;
    switch(e.type){
        case EventType.KeyDown:
            switch(e.keyCode){
                case  KeyCode.UpArrow:
                    code = 0;
                    break;
                case  KeyCode.DownArrow:
                    code = 2;
                    break;
                case  KeyCode.LeftArrow:
                    code = 3;
                    break;
                case  KeyCode.RightArrow:
                    code = 1;
                    break;
            }
            break;
        case EventType.KeyUp:
            break;
    }
    if (code >= 0){
        if(code == controlPadScript.getCode() && controlPadScript.getStatusArrow() == 1 && !controlPadScript.isBlock()){
            controlPadScript.setBlock(true);
            playerScript.addScore(1);
			playerScript.changeSprite(2);
			restartSkin();			
        }else{
            controlPadScript.setBlock(true);
            var score = playerScript.getScore();
            score--;
            if(score < 0){
                //seteo a 0
                playerScript.addScore(0);
            }else{
                playerScript.addScore(-1);
            }
			playerScript.changeSprite(0);
			restartSkin();
        }
    }
}

function restartSkin(){
	yield WaitForSeconds(0.2);
	playerScript.changeSprite(1);
}