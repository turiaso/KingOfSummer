#pragma strict
var ls:UnityEngine.SceneManagement.SceneManager;
private var audioLoaded:AudioSource; 
function Start () {
	audioLoaded = GetComponent.<AudioSource>();
}

function Update () {
 if (Input.GetMouseButton(0)){
	 audioLoaded.Play();
	 audioLoaded.Play(44100);
		loadScene();
	}
	
}
function loadScene(){
	yield WaitForSeconds (1);
	ls.LoadScene("StageScene");
	
}
