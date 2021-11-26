const populateMenu = () => {
    const CONTENT = document.querySelector('#content');
    let children = CONTENT.childNodes;

    children.forEach(child => {
        if (child.id === 'description') {
            CONTENT.removeChild(child);
        }
    })

    const MENU_DIV = document.createElement('div');
    MENU_DIV.id = 'description';
    MENU_DIV.style.alignItems = 'flex-start';

    CONTENT.insertBefore(MENU_DIV, CONTENT.lastChild);
    
    const ITEM_ONE = document.createElement('div');
    ITEM_ONE.innerHTML = '<span style="color:rgb(110, 2, 2)">La Poutine du Chef 16$</span><br><br>Notre fameuse poutine avec viande fumée, petits pois, oignons caramélisés, cornichons et moutarde de dijon.<br><br>';
    MENU_DIV.appendChild(ITEM_ONE);

    const ITEM_TWO = document.createElement('div');
    ITEM_TWO.innerHTML = '<span style="color:rgb(110, 2, 2)">La Poutine Classique 10$</span><br><br>Notre fameuse poutine, un classique!<br><br>';
    MENU_DIV.appendChild(ITEM_TWO);

    const ITEM_THREE = document.createElement('div');
    ITEM_THREE.innerHTML = '<span style="color:rgb(110, 2, 2)">La Poutine Hot-Dog 12$</span><br><br>Notre fameuse poutine avec saucisses hot-dog et choux.<br><br>';
    MENU_DIV.appendChild(ITEM_THREE);
}

export {populateMenu}