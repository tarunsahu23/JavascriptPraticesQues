//-------programe for print right triangle ,pyramid triangle and dimond------
/*
----right triangle------
for(let i=1 ; i<=6 ;i++){
    for( let j=1 ; j<i;j++){
        document.write("*")
    }
    document.write("<br>");
}
*/
/*--------pyramid trianle----------*/
for(let i=1 ; i<=6 ;i++){
    for( let k=1 ; k<6-i;k++){
        document.write("&nbsp;&nbsp;")
    }
    for( let j=1 ; j<i;j++){
        document.write(" * "+"&nbsp;&nbsp;")
    }
    document.write("<br>");
}
