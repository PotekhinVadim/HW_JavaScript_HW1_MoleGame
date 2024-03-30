const dead = document.getElementById('dead');
const lost = document.getElementById('lost');


getHole = index => document.getElementById(`hole${index}`);

for (holeIndex = 1; holeIndex < 10; holeIndex++) {
    let hole = getHole(holeIndex);
    
    hole.onclick = () => {
        if ( hole.classList.contains( 'hole_has-mole' )) {
            dead.textContent ++;
        } else {
            lost.textContent ++;
        }

        if (dead.textContent == 10) {
            alert ('win');
            dead.textContent = 0;
            lost.textContent = 0;
        }

        if (lost.textContent == 3) {
            alert ('lost');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}