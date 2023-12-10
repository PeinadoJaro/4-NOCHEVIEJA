// ADALIDmotor  Ángel Peinado Jaro - 2012 
// 'En las duras aristas de las armas': obra de ejemplo inspirada en 'El Cantar de Mio Çid'
// Diseño del Script de muestra de funcionalidad por Jesús Martínez Alonso
var camino = 0;
var ok=1;
var op = new Array();
op[1] = "acompañ"
op[2] = "qued"

var msgs = new Array();
msgs[0] = "\t Prueba del editor <a href="www.adalid.org.es">Editor</a>" +
        " \n\n\t La espada de tu padre, hundida en el jardín en su memoria, parece contemplarte. Tus dedos buscan el puño de la espada. Es al afianzarla cuando caes en la cuenta de que él no habria esperado a que le desterraran, acompañaría al Cid sin vacilar." +
        " \n\t Los últimos rayos de la tarde se estrellan en el filo de la espada. Sabes que el Cid partirá hacia Burgos antes de los primeros de la mañana, lo que no sabes es... ¿qué harás tú?"
msgs[1] = "\t Tensas tus músculos hasta el dolor, pones todo tu empeño en arrancar el metal del cuerpo de la tierra, pero el acero se resiste. Comienzan a flaquearte las fuerzas cuando sientes que por fin la hoja cede a tus demandas. No reparas en cuán maciza resulta hasta que la elevas en lo alto en señal de victoria, lo que hace que te desequilibres y estés a punto de caer de espaldas. La enfundas en su vaina y con ella a la cintura te diriges hacia el campamento de los hombres del Cid, entre los que te quieres contar.\n\n\t  Las sombras poco a poco van cubriendo el paisaje como pesados párpados, nublando la vigilia. ¿Será mejor pasar la noche en casa partiendo temprano hacia el campamento o, por el contrario, marchar cuanto antes para allá?"
msgs[2] = "\t No estás preparado para vivir en el destierro -recapacitas. Aún no has sido nombrado caballero. Te desprendes del tacto frío de la espada y vuelves al interior de la casa. -Aún es pronto. Puedes vivir de la herencia de tu padre y de los beneficios que producen tus tierras. Prevés que en un par de años el rey te nombre caballero y entonces participes en los hechos de armas..." +
        " \n\n\t Vas disponiendo de tu futuro al tiempo que te desprendes de la armadura y te metes en la cama. Las voces en el sueño intranquilo van ganando en claridad: \"¡Al destierro con los traidores!\", \"¡destierro a los amigos del traidor!\". Tan nítidas resultan que en tu desvelo entiendes que son reales. ¡Alguien ha prendido fuego a tu casa!... "
msgs[3] = "[Cuentas con una buena imaginación, pero ése no es el comando en este momento: PRUEBA OTRA VEZ]"

var x = ""
num = 1
toggle = 1
OOK = 0
timval = 0
var tval = ""
var msg = msgs[0];
var cont=0;

function cambiarImg(){
    var valor="img/"+camino+".jpg"
    $(".imagen img").fadeOut("fast",function(){
        $(".imagen img").attr("src",valor);
    });
    $(".imagen img").fadeIn("fast");
}

$(document).ready(function(){
   $("form").submit(function(){
        var entry = $("#entrada").val();
        var p = -1;
        var i = 1;
        ok=0
        while (i<=2){
            if (entry!="") p= entry.indexOf(op[i]);
            if (p!=-1){
                camino = i;
                msg = msgs[camino];
                num = 1;
                ok = 1;
                toggle=1
                cambiarImg();
                scroll();
            }
            i=i+1;
        }

       if(ok!=1) {
            msg = msgs[3];
            num = 1
            toggle=1
            scroll();
            setTimeout("iniciar()", "2500")
        }
        $("#entrada").val("");
        return false;
  });
 });

function iniciar(){
    msg = msgs[0];
    num = 1;
    toggle=1;
    ok=1;
    scroll();
}
function scroll() {
  document.myform.entrada.disabled = "disabled"
    if (num <= msg.length)
      OOK = 1
  if ( OOK == 1)
 {
 OOK = 0
 x = msg.substring(0,num)
 document.myform.scroll.value = x
 num = num+1;
 }
  else
 {
 x = ""
 document.myform.scroll.value = msg
 if ((camino==0)&&(ok==1)) document.myform.entrada.disabled = ""
 document.myform.entrada.focus();
 num = msg.length;
 toggle=0;
 }
  if (toggle == 1)
 setTimeout("scroll()", timval)
 }