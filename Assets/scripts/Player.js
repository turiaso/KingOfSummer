#pragma strict

public var credits:int;
public var score:int;

public var sprites1:Sprite[];
public var sprites2:Sprite[];

private var mySprites:Sprite[];
private var type:int;

function Start () {
	var data =  GameObject.Find("GameData").GetComponent(CommunicationAmongScenesScript).getData();
	this.credits = data["credits"];
	this.type = data["playerSelected"];
	if(this.type ==0){
		mySprites = sprites1;
	}else{
		mySprites = sprites2;
	}
	try{
	GetComponent(SpriteRenderer).sprite = mySprites[1];
	}catch(ex){
	
	}
}

function Update () {
	
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

function getCredits () {
    return credits;
}

function addCredits (increment:int) {
    credits = credits + increment;
}
