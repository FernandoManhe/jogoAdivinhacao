	var numSecreto;
    var tentativas;
    var pontos;
    
    function novoJogo() {
	   document.getElementById('chute').value='';
      numSecreto = Math.floor(Math.random() * 101);
      tentativas = 0;
      pontos = 100;
      document.getElementById('resultado').textContent = '';
    }
    
    function verificarChute() {
      var chute = parseInt(document.getElementById('chute').value);
	  
	  
	if  (chute < 0 || chute > 100) {
		document.getElementById("resultado").textContent = "Digite um número válido entre 0 e 100.";
		
	return;
	
	}
      
      while (chute !== numSecreto) {
        tentativas++;
        
        if (chute < numSecreto) {
          document.getElementById('resultado').textContent = 'Tente um número maior.';
        } else {
          document.getElementById('resultado').textContent = 'Tente um número menor.';
        } 
		
        
        return; // Encerra a função para aguardar nova tentativa
      }
      
      tentativas++;
      pontos -= tentativas;
      document.getElementById('resultado').textContent = 'Parabéns! Você acertou o número em ' + tentativas+ ' tentativa(s). Pontuação: ' + (pontos +1);
    }
    
    novoJogo();