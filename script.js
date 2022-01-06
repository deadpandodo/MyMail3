

function update_msgCount() {
    let msgCount = document.getElementsByClassName('row').length
    document.getElementById('compteur').textContent = "Messages total: "+msgCount
}
update_msgCount()

function setup_trash() {
    for (let i=0;i<document.getElementsByClassName('trash').length;i++){
        document.getElementsByClassName('trash')[i].addEventListener('click', function (){
            this.parentElement.remove()
            document.getElementById('compteur').textContent = "Messages total: "+document.getElementsByClassName('row').length
        })
    }    
}
setup_trash()

let button = document.getElementById("button")
let input = document.getElementById("text-input")
button.addEventListener('click', function (){
    let value = input.value
    createMsg("Dim", value, "avatar-3.jpg")
    input.value=""

})


let createMsg = function(name, txt, pic){
    let div_container = document.createElement("div")
   
    document.body.appendChild(div_container)
    div_container.className="row"

    let img = document.createElement("img")
    div_container.appendChild(img)
    img.src = pic
    img.className="avatar"

    let info_div = document.createElement("div")
    div_container.appendChild(info_div)

    let info_name = document.createElement("h6")
    let info_txt = document.createElement("p")
    info_div.appendChild(info_name)
    info_div.appendChild(info_txt)   
    
    info_name.textContent = name
    info_txt.textContent = txt

    let trash = document.createElement("img")
    div_container.appendChild(trash)
    trash.src = "trash.png"
    trash.className="trash"
    setup_trash()
    update_msgCount()

}

