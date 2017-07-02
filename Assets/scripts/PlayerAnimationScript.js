#pragma strict

public var sprites:Sprite[];
private var counterTime = 0;
private var timeToChange = 333;
private var status =0;

function Start () {
	
}

function Update () {
	counterTime+=Time.deltaTime*1000;
	if(counterTime>timeToChange){
		//cambiamos sprite
		counterTime = counterTime-timeToChange;
		changeSprite(status);
		status =(status+1)% sprites.length;
	}
}

function changeSprite(status){
		 GetComponent(SpriteRenderer).sprite = sprites[status];
}

function getStatus(){
	return status;
}
