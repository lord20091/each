
let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

let otadiv = document.getElementById(`ota`);

for (const date of data) {
    let p = document.createElement(`h1`)
    p.innerHTML = date
    if(date <= 50) {
        p.style.backgroundColor = `red`
    } else {
        p.style.backgroundColor = `green`
    }
    p.style.display = `flex`
    p.style.justifyContent = `center`
    p.style.alignItems = `center`
    p.style.marginTop = `35px`
    p.style.color = `white`
    otadiv.appendChild(p)
}

