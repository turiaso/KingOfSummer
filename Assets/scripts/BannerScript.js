#pragma strict

var ls:UnityEngine.SceneManagement.SceneManager;
private var rb: Rigidbody;

function Start () {
	rb = GetComponent.<Rigidbody>();
}

function Update () {	
	if(Input.GetMouseButtonDown(0)){
		Debug.Log("OnMouseDown2 ");
		rb.AddForce(0,15,0,ForceMode.Impulse);
	}
	if(transform.position.y<-5){
		ls.LoadScene("MainScene");
	}
}
function OnMouseDown () {  
	Debug.Log("OnMouseDown ");
	rb.AddForce(0,15,0,ForceMode.Impulse);
}