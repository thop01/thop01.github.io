
const githubRepos = [
    // "https://sbechoe.github.io",
    "https://thop01.github.io",
    "https://reshadshirzai.github.io",
    "https://duncanvandien.github.io",
    "https://damian-gangadin.github.io",
    "https://davy-alhaydar.github.io",
    "https://jing072.github.io",
    "https://adriankuijpers.github.io",
    "https://dylan-liao.github.io",
    "https://jugadsinghreal.github.io",
    "https://arsenio-w.github.io/",
    "https://t-hussain01.github.io",
    "https://a-sealiti.github.io"
    

]


function showGlinks(){
    const cardContainer = document.querySelector(".page-container");

    for (let index = 0; index < githubRepos.length; index++) {
        const glink = githubRepos[index];
        let username = glink.slice(8);
        username = username.substring(0, username.length - 10);
        console.log(username);
        cardContainer.innerHTML += 
        `
        <div class="col-3">
        <div class="card">
            <img class="card-img-top" src="${glink}/img/logo.png" alt="logo" />
            <div class="card-body">
                <h4 class="card-title"><a href="${glink}">${username}</a></h4>
                <a href="${glink}">Page</a>
                <a href="${glink}">profile</a>
            </div>
        </div>
    </div>
        `;   
    }
}

showGlinks();