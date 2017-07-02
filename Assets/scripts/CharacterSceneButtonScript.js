#pragma strict
private var audioLoaded:AudioSource; 
var MainSoundTrack;
function Start () {
	audioLoaded = GetComponent.<AudioSource>();
	MainSoundTrack = GameObject.Find("MainSoundTrack");
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
	Destroy (MainSoundTrack);

}

