var question1=prompt('Ви приступили до розв"язку квадратного рівняння ax^2+bx+c=0 Введіть перше значення <a>');
var a='a=' + question1;
document.write(a);
var question2=prompt('ax^2+bx+c=0 Введіть значення змінної <b>');
var b='<br>b=' + question2;
document.write(b);
var question3=prompt('ax^2+bx+c=0 Введіть значення змінної <c>');
var c='<br>c=' + question3;
document.write(c);
/*document.write('<br> ax^2+bx+c=0');
var d = b * b - 4 * a * c;
var x1_1=((-b + Math.sqrt(d))/2*a);
var x1_1='x1='
x2_2=((-b - Math.sqrt(d))/2*a);
x2_2='x1='
x3_3=(-b/(2*a));
x3_3='x1='
if (d>0){
    document.write(x1_1);
    document.write(x2_2);
}
else {
    document.write(x3_3);
}
/*else{
     document.write('щось пішло не так');
}*/
/*function answer (ans) {
	document.write ('<br>Відповідь Х= ' +ans);
	alert ('Відповідь Х= ' +ans);
    }
var D=b*b-4*a*c;
console.log ('D= '+D);
if (D==0) {
		var x;
		x=b/2*a;
		x=-x;
		answer(x);
	} else {
			if (D >0){
				var x1,x2,d;
				d=Math.sqrt (D);
				x=(d-b)/(2*a);
				answer (x1);
				x=0;
				d=-d;
				x2=(d-b)/(2*a);
				answer (x2);
			}else {
				alert('Нема рішень');
				}
		}