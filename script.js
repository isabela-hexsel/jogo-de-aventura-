const avanca = document.queySelectorAll('.btn-proximo');

avanca.forEach(button=> {
    button.addEventListener('click', function (){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAtribute('data-proximp';

            atual.classList.remove('ativo');
            document.getElementById(proximoPasso).classList.add('ativo');
    })
})