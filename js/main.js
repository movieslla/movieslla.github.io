document.getElementById('mainvid').innerHTML = content[content.length - 1].code;
document.getElementById('dlinkdiv').innerHTML = `<a href=${content[content.length - 1].d} id="dlink"> Download Link</a>`;
content.reverse().forEach((i) => {
    document.getElementById('cont').innerHTML += `
    <div class="card" onclick="vidselect(${i.id})">
    <img src=${i.img} alt="Image" class="ima">
    <p class="tit">${i.date}</p>
    </div>`
})
function vidselect(myid) {
    console.log(myid);
    content.forEach((i) => {
        if (i.id == myid) {
            document.getElementById('mainvid').innerHTML = i.code;
            document.getElementById('dlinkdiv').innerHTML = `
            <a href=${i.d} id="dlink"> Download Link</a>
            `}
    })
    $(window).scrollTop(100);
};





