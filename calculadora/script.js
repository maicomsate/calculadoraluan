// array para armazenar o histórico de calculos

let history=[];
// função para adicionar valor ao display
function appendToDisplay(value){
    const result = document.getElementById('result');
    result.value += value; //adiciona o valor ao campo de exibição
}

    // função para limpar display
    function clearDisplay(){
        document.getElementById('result').value='';
   
    //limpar campo de exibição
    }

    // funçaõ para deletar o ultimo caracter do display

    function deleteLast(){
        const result = document.getElementById('result');
        result.value = result.value.slice(0,-1); //remove o ultimo caracter do campo de exibição
    }
// função para calçular o resultado da expressão
    function calculateResult(){
        const result= document.getElementById('result');
        const expression= result.value;
        
    }

    // verificar se a expressão é valida
    if (isValidExpression (expression)){
        const evaluatedResult = evaluateExpression(expression);
        addToHistory(expression, evaluatedResult);
        result.value = evaluatedResult; 
    } else {
        alert('Expressão inválida')

    }

    // função para verificar se a expressão é valida

    function isValidExpression(expression){

        const regex = /^[0-9+\-*\^.()]*$/;
        return regex.text(expression);
    }

    //função para avaliar a expressão
        function evaluateExpression(expression){
            //substituir ^ por ** 
            let formattedExpression = expression.replace( /\^/g,'**');
            
       //avaliar expressão
            return Function(`"Use strict"; return(${formattedExpression})`)();

    }

     
    function addToHistory(expression,result){
        history.push({expression,result}); // adiciona a expressão e o resultado ao array de histórico
        updateHistory(); // atualiza a exibição do histórico

    }

    //função para atualizar a exinição do histórico
        function updateHistory(){
            const historyList = document.getElementById('historyList');
            historyList.innerHTML= ''; // limpa a lista de historico
            history.forEach(entry => {
            let li = document.createElement('li');
            li.textContent = `${entry.expression} = ${entry.result}`;// define o texto do item da lista
            historyList.appendChild(li); // adiciona o item á lista
            })

        }

        //função para alternar entre modos basicos e cientifico
            function toggleScientificMode(){
                const sciButtons= document.getElementById('scientific-buttons');
                if (sciButtons.style.display === 'none'){
                    sciButtons.style.display = 'grid'

                 } else { sciButtons.style.display = 'none'
                           }

            }
        