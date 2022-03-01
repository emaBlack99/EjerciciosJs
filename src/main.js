var numero = parseInt(prompt("Digite un numero", 0));

while(isNaN(numero)){
    numero = parseInt(prompt("Digite un numero", 0));
}

if(numero %2 ==0){
    document.write("<h2> El numero es par</h2>")
} else {
    document.write("<h2> El numero es impar </h2> ")
}


for (let i = 0; i < 100; i++) {
    console.log(i);
    const resultado =  i % 2 + 1;
    if (resultado === 2) {
        console.log(`Este numero es impar${i}`);
    }
}
