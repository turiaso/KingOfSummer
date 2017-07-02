#pragma strict

public var player:GameObject;
private var text:UnityEngine.UI.Text;

function Start () {
    text = GetComponent(UnityEngine.UI.Text);
    text.text = "Credits: " + player.GetComponent(Player).credits;
}

function Update () {
    text.text = "Credits: " + player.GetComponent(Player).credits;
}
