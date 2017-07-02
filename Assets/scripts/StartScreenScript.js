#pragma strict
private var audio2:AudioSource; 
var woohoo = AudioSource;
function Start () {
	audio2 = GetComponent.<AudioSource>();
}

function Update () {	
}

function loadScene(){
	yield WaitForSeconds (1);
	UnityEngine.SceneManagement.SceneManager.LoadScene("SelectCharacterScene");
	
}

function OnMouseDown () { 
	 audio2.Play();
	 audio2.Play(44100);
	 loadScene();
}
