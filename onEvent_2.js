function onEvent(s,e,callBack,usecapture){
 var k=Boolean(usecapture),f=callBack;
 e.removeEventListener(s,f,k);
 e.addEventListener(s,f,k);
}
//
function zz1(e,b,o){alert('ok1');}
function zz2(e,b,o){alert('ok2');}
onEvent('click',document,zz1);
onEvent('click',document,zz1);
