#pragma strict

public var sprites:Sprite[];
private var counterTime = 0;
private var timeToChange = 333;
private var status =0;
private var script:CommunicationAmongScenesScript;
public var type :int;
function Start () {
	script =  GameObject.Find("GameData").GetComponent(CommunicationAmongScenesScript);
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
function onMouseDown(){
	script.playerSelected(type);
}
function changeSprite(status){
		 GetComponent(SpriteRenderer).sprite = sprites[status];
}

function getStatus(){
	return status;
}
