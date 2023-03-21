
    function giaiptbac2(a,b,c){
    
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;
if(a==0){
    alert("He so a phai khác 0")
}else{
    delta = Math.pow(b, 2)-4*a*c;
    if(delta>0){
        x1=(-b-Math.sqrt(delta))/(2*a);
        x2=(-b-Math.sqrt(delta))/(2*a);
    <h1>    document.write(" Nghiem x1 = ", x1);</h1>
        document.write(" Nghiem x2=  ", x2);
    }else if(delta==0){
		x1 = -b/(2*a);
		document.write("Phuong trinh có nghiem kep, ",x1);
	}else{
		alert(" Phuong trinh vo nghiem");
			}	
    }
}
    