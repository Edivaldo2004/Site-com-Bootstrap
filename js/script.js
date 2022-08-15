let contador = 1;

setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(counter > 5 ) {
        contador = 1;
    }
}, 3000 );
 
onload = start;

function start(){
    var i = 1;
    function Move(){
        i = (i%5)+1;
        document.getElementById('t' +i).checked = true;
    }
    setInterval(Move, 7000);
}