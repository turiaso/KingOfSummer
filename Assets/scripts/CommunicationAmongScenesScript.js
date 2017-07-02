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
		'credits':100,
		'playerName':"Bombasto"
	};
	data=obj;
}