#pragma strict

private var data = {};

function Awake () {
	DontDestroyOnLoad (this);
}

function Start () {
	InitializeObj();
}

public function getData(){
	return data;
}
public function playerSelected(type:int){
	data['playerSelected'] = type;
}
function InitializeObj(){
	data = {
		'difficulty':0,
		'playerSelected':0,
		'credits':100,
		'playerName':"Bombasto"
	};
}