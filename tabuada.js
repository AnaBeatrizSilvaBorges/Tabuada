const calcularTabuada = function(tabuada, tabuada2, cont1, cont2)
{
    

    while ( parseInt(tabuada)<= parseInt(tabuada2)){
        for ( let counter = parseInt(cont1); counter <= parseInt(cont2); counter++){
            console.log(tabuada + ' x ' + counter + ' = ' + (tabuada * counter));
        }
        tabuada++
        console.log('\n')
        
    }
    
}

module.exports = { calcularTabuada }
