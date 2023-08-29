const matriz = [];
let linha
let valor = ''

for(let linha = 0; linha < 15; linha++) {
    matriz[linha] = [];
        for(let coluna = 0; coluna < 15; coluna++){
            matriz[linha][coluna] = '*';        
    }
}

for(linha = 0; linha < 15; linha++){
    for(let coluna = 0; coluna < 15; coluna++){
        if(coluna < 14) {
           valor += matriz[linha][coluna]; 
        }
        else{
            valor += matriz[linha][coluna] + "\n"; 
        }
    }
}
document.write(valor)


function criarMatriz() {
    let tabela = document.getElementById("tabela")
    let row = document.getElementById("linha")
    let column = document.getElementById("coluna")
    for(let i = 0; i < 15; i++){
        row[i] = []
        for(let j = 0; j < 15; j++){
            matriz[i][j] = '*';        
    }
    }
    for(i = 0; i < 15; i++){
        for(let column = 0; coluna < 15; coluna++){
            if(coluna < 14) {
               valor += matriz[linha][coluna]; 
            }
            else{
                valor += matriz[linha][coluna] + "\n"; 
            }
        }
    }
    
}