let count = 0

function add() {
    count++
    document.getElementById('counter').innerText = count;
}

function remove() {
    count--
    document.getElementById('counter').innerText = count;
}
