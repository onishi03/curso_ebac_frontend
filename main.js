document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const nome = document.getElementById('nome');
    const profileName = document.getElementById('profile-name')
    const repositorio = document.getElementById('rep');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const link = document.getElementById('link');
    const endpoint = `https://api.github.com/users/Onishi03`

    fetch(endpoint)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        nome.innerText = json.name;
        profileName.innerText = '@' + json.login;
        repositorio.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.html_url;
    })
})