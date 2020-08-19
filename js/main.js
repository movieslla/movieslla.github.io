var mainCont = {
    code: '<IFRAME id="tm-welcome-video" class="tm-welcome-video" SRC="https://oogly.io/embed-w21rkf3a1hf7.html" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO allowfullscreen></IFRAME>'
};

document.getElementById('mainvid').innerHTML = mainCont.code;


content.forEach((i) => {
    document.getElementById('cont').innerHTML += `
    <div class="card" onclick="vidselect(3)">
    <img src=${i.img} alt="Image" class="ima">
    <p class="tit">${i.date}</p>
    </div>

    `
})

function vidselect(myid) {
	console.log(myid);
    content.forEach((i) => {
        if (i.id == myid) {
            document.getElementById('mainvid').innerHTML = i.code;
        }
    })
    $(window).scrollTop(100); 
};





