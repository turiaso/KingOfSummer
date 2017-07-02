#pragma strict
var ls:UnityEngine.SceneManagement.SceneManager;
public var btn : GameObject;
private var audio2:AudioSource; 
var woohoo = AudioSource;
function Start () {
	audio2 = GetComponent.<AudioSource>();
}

function Update () {
	 if (Input.GetMouseButton(0)){
	 audio2.Play();
	 audio2.Play(44100);
		loadScene();
	}
	
}
function loadScene(){
	yield WaitForSeconds (1);
	ls.LoadScene("SelectCharacterScene");
	
}
