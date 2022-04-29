const link = 'link'

//INITIALIZE HEADER MENU
const headerLinks = document.querySelectorAll('.headerLinks .link');
initHeader();
//Initialize textbooks
function initHeader() {
    headerLinks.forEach(x => {
        x.addEventListener('click', function (e) {
            loadpage(e);  
        })
    })
}

function loadpage(e) {
    let id = e.target.classList.value;
    const classes = id.split(' ');
    individualClass = classes.find(x => x != link);
    console.log(individualClass)
    if(window.location.href = "/textbooks/routes/home.html") {
        window.location.href = "/textbooks/";
    }
    window.location.href = `/textbooks/routes/${individualClass}.html`;
}
