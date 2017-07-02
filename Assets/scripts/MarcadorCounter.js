#pragma strict

public var player:GameObject;
private var text:UnityEngine.UI.Text;

function Start () {
    text = GetComponent(UnityEngine.UI.Text);
    text.text = "Score: " + player.GetComponent(Counter).score;
}

function Update () {
    text.text = "Score: " + player.GetComponent(Counter).score;
}
