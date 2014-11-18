function onEvent(s,e,action,capture){
 var k=Boolean(capture),f=action;
 e.removeEventListener(s,f,k);
 e.addEventListener(s,f,k);
}
//
function zz1(e,b,o){alert('ok1');}
function zz2(e,b,o){alert('ok2');}
onEvent('click',document,zz1);
onEvent('click',document,zz1);

