const populateWelcome = () => {
    const CONTENT = document.querySelector('#content');
    let children = CONTENT.childNodes;

    children.forEach(child => {
        if (child.id === 'description') {
            CONTENT.removeChild(child);
        }
    })

    const DESCRIPTION = document.createElement('div');
    DESCRIPTION.id = 'description';
    DESCRIPTION.innerHTML = 'La meilleure poutine à Acton Vale et de loin! Une tonne de variétées toutes aussi succulentes les unes que les autres. 10/10<br>- Jean-Guy Lin<br>';
    CONTENT.insertBefore(DESCRIPTION, CONTENT.lastChild);

    const POUTINE_DESCRIPTION_IMG = document.createElement('img');
    POUTINE_DESCRIPTION_IMG.src = '../src/images/poutine.jpg';
    POUTINE_DESCRIPTION_IMG.id = 'poutine-img';
    DESCRIPTION.appendChild(POUTINE_DESCRIPTION_IMG);   
}

export {populateWelcome}