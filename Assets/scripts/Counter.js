#pragma strict

public var score:int;

public var sprites1:Sprite[];
public var sprites2:Sprite[];

private var mySprites:Sprite[];
private var type:int;

private var timePast = 0;
private var index = 0;
private var notas = [0,1,2,3,0,1,2,3,0];
private var timeToChange = 2000;
public var controlPad:GameObject;
private var controlPadScript:controlPadController;

function Start () {
	var data =  GameObject.Find("GameData").GetComponent(CommunicationAmongScenesScript).getData();
	controlPadScript =  controlPad.GetComponent(controlPadController);
	this.type = data["playerSelected"];
	if(this.type ==1){
		mySprites = sprites1;
	}else{
		mySprites = sprites2;
	}
	GetComponent(SpriteRenderer).sprite = mySprites[1];
}

function Update () {
	timePast += Time.deltaTime*1000;	
	if(timePast>=timeToChange){
		timePast = timePast - timeToChange;
		if(notas[index] == controlPadScript.getArrowActivate()){
			score = score +1;
			changeSprite(2);
			restoreSprite();
;		}else{
			score = score -1;
			if(score<0){
				score = 0;
			}
			changeSprite(0);
			restoreSprite();
		}
		index++;
		index = index % notas.length;
	}
}

function getScore () {
    return score;
}

function addScore (increment:int) {
    score = score + increment;
}

function changeSprite(index:int){
	GetComponent(SpriteRenderer).sprite = mySprites[index];
}

function restoreSprite(){
	yield WaitForSeconds (0.2);
	changeSprite(1);
}
