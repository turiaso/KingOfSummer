#pragma strict

private var timePast = 0;
private var index = 0;
private var notas = [0,1,2,3,0,1,2,3,0,1,1,1,1,2,2,1,1,3,1,3,1,2,0];
private var timeToChange = 1000;
private var timeLigth = 100;

public var goList:GameObject[];

function Start () {
	
}

function Update () {
	timePast += Time.deltaTime*1000;	
	var bs = goList[notas[index]].GetComponent(buttonScript);
	
	Debug.Log(index);
	if(bs.getStatus() == 0){
		if (timePast>timeToChange) {
			bs.changeSprite();			
			timePast = timePast-timeToChange;
		}
	}else{
		if (timePast>timeLigth) {
			bs.changeSprite();		
			timePast = timePast-timeLigth;
			index = (index+1) % notas.length;
		}
	}
	
}
