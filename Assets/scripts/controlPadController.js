#pragma strict

private var timePast = 0;
private var index = 0;
private var notas = [0,1,2,3,0,1,2,3,0];
private var numberOfLoop = 0;
private var timeToChange = 2000;
private var timeLigth = 1000;
private var block = false;
public var goList:GameObject[];
private var audioTrack:AudioSource; 

public var player:GameObject;
public var counter:GameObject;

private var playerScript:Player;
private var counterScript:Counter;


function Start () {	
	audioTrack = GetComponent.<AudioSource>();
	audioTrack.Play();
	audioTrack.Play(44100);

	playerScript = player.GetComponent(Player);
	counterScript = counter.GetComponent(Counter);
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
			if(index == 0){
				numberOfLoop ++;
			}
		}
	}
	
	if(numberOfLoop == 2){
		if(playerScript.getScore()>counterScript.getScore()){
			//Gana
			Debug.Log("Gano!");
			UnityEngine.SceneManagement.SceneManager.LoadScene("MainScene");
			playerScript.addCredits(-100);
		}else{
			Debug.Log("Pierdo!");
			//Pierde
			playerScript.addCredits(-100);
			if(playerScript.getCredits()<=0){
				//credito gastado
				UnityEngine.SceneManagement.SceneManager.LoadScene("AdBannerScene");
			}
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

function getArrowActivate(){
	return notas[index];
}

