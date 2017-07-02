#pragma strict

public var credits:int;
public var score:int;

function Start () {
	
}

function Update () {
	
}

function getScore () {
    return score;
}

function addScore (increment:int) {
    score = score + increment;
}
