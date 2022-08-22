console.log('Tabuada');

const { Console } = require('console');
const { exit } = require('process');

// Import da biblioteca entrada de dados 
    var readline = require('readline');

// Instancia do objeto entrada dde dados
    var entradaDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const { calcularTabuada } = require('./tabuada')

    entradaDados.question('Digite a tabuada inicial (2-100;) \n', function(numero){
        let tabuada = numero;
        
        

    entradaDados.question('Digite a tabuada final (2-100): \n', function(numero2){
        let tabuada2 = numero2; 
       

    entradaDados.question('Digite o contador inicial da tabuada: \n', function(contador){
        let cont1 = contador; 
        

    entradaDados.question('Digite o contador final: \n', function(contador2){
        let cont2 = contador2; 

        if(numero < 2 || numero > 100)
        {
            console.log('A tabuadas devem ser entre 2 e 100.')
        }

        if(numero2 < 2 || numero2 > 100)
        {
            console.log('A tabuadas devem ser entre 2 e 100.')
        }

        if(cont1 < 1 || cont1 > 50)
        {
            console.log('Os contadores devem estar entre 1 e 50.')
        }

        if(cont2 < 1 || cont2 > 50)
        {
            console.log('Os contadores devem estar entre 1 e 50.')
        }

        if(numero == '' || numero2 == '')
        {
            console.log('Todos os números devem ser informados.')
        }

        
        if(cont1 == '' || cont2 == ' ')
        {
            console.log('Os contadores devem ser informados.')
        }

       
        else 
        {
            calcularTabuada(tabuada, tabuada2, cont1, cont2);
            process.exit(1);
        }


    });
});
});
});