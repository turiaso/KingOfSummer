#pragma strict
var ls:UnityEngine.SceneManagement.SceneManager;
public var btn : GameObject;
function Start () {
	
}

function Update () {
	 if (Input.GetMouseButton(0)){
		loadScene();
	}
	
}
function loadScene(){
		ls.LoadScene("StageScene");
	
}
