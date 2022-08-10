const api = "https://api.github.com/users/";
const vale = document.getElementById("ser");

// console.log(search);
const main = document.querySelector(".main");
const form = document.querySelector("form")
async function getinfo(user){
    const resp = await fetch(api + user);
    const respData = await resp.json();
    userCard(respData);
    getrepos(user);
}
async function getrepos(user){
    const resp = await fetch(api + user + "/repos") 
    const respdata = await resp.json();
    addrepos(respdata);
}
function userCard(det){
    const user_div = document.createElement("div");
    user_div.classList.add("card");
    main.innerHTML = `  <div class="cardin">
                        <div class="avatar">
                        <img src = "${det.avatar_url}" />
                        </div>
                        <div>
                        <h2>${det.name}</h2>
                        <p>${det.bio}</p>
                        <ul class="info">
                        <li>${det.followers}<strong> followers</strong></li>
                        <li>${det.following}<strong> following</strong></li>
                        <li>${det.public_repos}<strong> repos</strong></li>
                        </ul>
                        <ul id = repos>
                        </ul>
                        </div>
                        </div>
    `
    // main.innerHTML = user_div;
}  
function addrepos(data){
    const repos = document.getElementById("repos");
    console.log(data);
    data.slice(0,12).forEach((repo)=> {
        const repoel = document.createElement("a");
        repoel.classList.add('repo');
        repoel.href = repo.html_url;
        repoel.target = "_blank";
        repoel.innerText = repo.name;
        repos.appendChild(repoel);
    })

}


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const ser = vale.value;
    if(ser){
        
        getinfo(ser);
        user= "";
}
})