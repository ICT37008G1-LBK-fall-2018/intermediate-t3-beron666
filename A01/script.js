let numbers = prompt('Sheiyvanet ori ricxvi').split(' '),
    a = +numbers[0],
    b = +numbers[1],
    sum = 0;

if((a <= 0 || b <= 0 ) || (a >= 1000 || b >= 1000) || a >= b ){
    alert('araswori shualedi');
}else{
    for(a; a<=b; a++){
        sum += a;
    }

    alert(sum);
}