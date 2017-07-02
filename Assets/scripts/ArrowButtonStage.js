#pragma strict

public var code:int;
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

function OnMouseDown () { 
    if(code == controlPadScript.getCode() && controlPadScript.getStatusArrow() == 1 && !controlPadScript.isBlock()){
        controlPadScript.setBlock(true);
        playerScript.addScore(1);
		playerScript.changeSprite(2);
		restartSkin();

    }else if(!controlPadScript.isBlock()){
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
		//reproducir fallo
    }
}

function restartSkin(){
	yield WaitForSeconds(0.2);
	playerScript.changeSprite(1);
}