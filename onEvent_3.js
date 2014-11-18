function isUndefined(x){return typeof(x)==='undefined'}

//
function onEvent(name,node,action,capture){
 var s=name,e=node,f=action,k=Boolean(capture);
 function detach(v){e.removeEventListener(s,f,isUndefined(v)?k:v);return e}
 detach(k).addEventListener(s,f,k);

}
//
function zz1(evt){alert('ok1'+evt);}
function zz2(evt){alert('ok2'+evt);}
onEvent('click',document,zz1);
onEvent('click',document,zz1);
