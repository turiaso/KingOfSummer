#pragma strict

private var rb: Rigidbody2D;

private var timeOnFly = 0;

function Start () {
    rb = GetComponent.<Rigidbody2D>();
    transform.position.x= Random.Range(-10.0f, 10.0f);
}

function Update () {	

    timeOnFly+= Time.deltaTime*1000;
    
    if(timeOnFly>5000){
        //El jugador gana creditos del juego
    }

	if(transform.position.y<-5){
	    UnityEngine.SceneManagement.SceneManager.LoadScene("MainScene");
	}
}
function OnMouseDown () {  
    //Para que funcione esta funcion hace falta añadir un collider
    //calculo vecor al centro del objeto para aplicar una fuerza en direccion opuesta
    var clickedPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
    var forceVector = transform.position - clickedPosition;
    forceVector.y = 1;
    rb.AddForce((forceVector)*5, ForceMode2D.Impulse);
    
}

function OnCollisionEnter2D(collision: Collision2D) {
    var contact : ContactPoint2D = collision.contacts[0];    
    var force = transform.position -contact.point;
    force.y = 0;
    rb.AddForce(force, ForceMode2D.Impulse);
}