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
function InitializeObj(){
	var obj = {
		'difficulty':0,
		'playerSelected':'heavy',
		'score':0,
		'playerName':"Bombasto"
	};
	data=obj;
}