document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o envio do formulário para testar

    // Simulação de sucesso ou erro
    var sucesso = Math.random() > 0.5;  // Simulando sucesso com 50% de chance

    var sucessoDiv = document.getElementById('sucesso');
    var erroDiv = document.getElementById('erro');
    var mensagemDiv = document.getElementById('mensagem');

    if (sucesso) {
        sucessoDiv.innerHTML = 'Sessão agendada com sucesso! Um de nossos psicólogos entrará em contato em breve.';
        sucessoDiv.style.display = 'block';
        erroDiv.style.display = 'none';
    } else {
        erroDiv.innerHTML = 'Ocorreu um erro ao agendar sua sessão. Tente novamente.';
        erroDiv.style.display = 'block';
        sucessoDiv.style.display = 'none';
    }

    mensagemDiv.style.display = 'block';  // Exibe a mensagem de erro ou sucesso
});
