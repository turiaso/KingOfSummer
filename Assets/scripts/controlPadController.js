#pragma strict

private var timePast = 0;
private var index = 0;
private var notas = [0,1,2,3,0,1,2,3,0,1,1,1,1,2,2,1,1,3,1,3,1,2,0];
private var timeToChange = 2000;
private var timeLigth = 1000;
private var block = false;

public var goList:GameObject[];

function Start () {
	
}

function Update () {
	timePast += Time.deltaTime*1000;	
	var bs = goList[notas[index]].GetComponent(buttonScript);

	if(getStatusArrow() == 0){
	    if (timePast>timeToChange) {
	        block = false;
			bs.changeSprite();			
			timePast = timePast-timeToChange;
		}
	}else{
		if (timePast>timeLigth) {
			bs.changeSprite();		
			timePast = timePast-timeLigth;
			index = (index+1) % notas.length;
			block = true;
		}
	}
	
}

function getCode(){
    return notas[index];
}

function getStatusArrow(){
    return goList[notas[index]].GetComponent(buttonScript).getStatus();
}

function isBlock(){
    return block;
}

function setBlock(block1:boolean){
    this.block = block1;
}
