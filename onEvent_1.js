function onEvent(s,e,f,c){
 var k=Boolean(c);
 e.removeEventListener(s,f,k);
 e.addEventListener(s,f,k);
}

//
function zz1(e,b,o){alert('ok1');}
function zz2(e,b,o){alert('ok2');}
onEvent('click',document,zz1);
onEvent('click',document,zz1);
