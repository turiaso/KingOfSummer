#pragma strict

public var credits:int;
public var score:int;

function Start () {
	var data =  GameObject.Find("GameData").GetComponent(CommunicationAmongScenesScript).getData();
	this.credits = data["credits"];
}

function Update () {
	
}

function getScore () {
    return score;
}

function addScore (increment:int) {
    score = score + increment;
}
