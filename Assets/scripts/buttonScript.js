#pragma strict

public var sprite0:Sprite;
public var sprite1:Sprite;


private var status =0;

function Start () {
	
}

function Update () {
	
}

function changeSprite(){
	if(status == 0){
		 GetComponent(SpriteRenderer).sprite = sprite1;
		 status = 1;
	}else{
		GetComponent(SpriteRenderer).sprite = sprite0;
		status = 0;
	}
}

function getStatus(){
	return status;
}
