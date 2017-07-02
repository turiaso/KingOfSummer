#pragma strict
private var audioLoaded:AudioSource; 
function Start () {
	audioLoaded = GetComponent.<AudioSource>();
}

function Update () {
	
}

function loadScene(){
	yield WaitForSeconds (1);
	UnityEngine.SceneManagement.SceneManager.LoadScene("StageScene");
	
}

function OnMouseDown () {
	audioLoaded.Play();
	audioLoaded.Play(44100);
	loadScene();
}

