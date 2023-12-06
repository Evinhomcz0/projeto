function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'url_do_servidor', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
    }; if (xhr.readyState === 4 && xhr.status !== 200) {
        alert('E-mail ou senha incorretos. Tente novamente.');

    };

    var data = JSON.stringify({
        email: email,
        password: password
    });

    xhr.send(data);


    function validaFormulario() {

        const nome = document.getElementById("nome").value;
        const email = document.querySelector("#email").value;
        const senha = document.getElementById("senha").value;
        const confirmaSenha = document.getElementById("confirmaSenha").value;

        console.log(senha);

        // validação de campos vazios
        if (nome === '' || email === '' || senha === '') {
            alert("Por favor, preencha os campos vazios!");
            return;
        }

        // Validação do campo do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Digite um e-mail válido!");
            return;
        }

        // Verificar tamanho da senha
        if (senha.length < 8) {
            alert("A senha nao pode ser menor que '8' caracteres");
            return;
            alert("Cadastro foi realizado com sucesso!");


            alert("Cadastro foi realizado com sucesso!");
        }
