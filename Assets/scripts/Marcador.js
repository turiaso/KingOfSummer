#pragma strict

public var player:GameObject;
public var text:UnityEngine.UI.Text;

function Start () {
    text = GetComponent(UnityEngine.UI.Text);
    text.text = "Score: " + player.GetComponent(Player).score;
}

function Update () {
    text.text = "Score: " + player.GetComponent(Player).score;
}
