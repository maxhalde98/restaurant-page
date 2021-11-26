const populateContact = () => {
    const CONTENT = document.querySelector('#content');
    let children = CONTENT.childNodes;

    children.forEach(child => {
        if (child.id === 'description') {
            CONTENT.removeChild(child);
        }
    })

    const DESCRIPTION = document.createElement('div');
    DESCRIPTION.id = 'description';
    DESCRIPTION.innerHTML = '<span style="color:rgb(110, 2, 2)">Adresse:</span> 2547 rue Messier, Montréal, Qc.<br><br><span style="color:rgb(110, 2, 2)">Téléphone:</span> 514-328-2277<br><br><span style="color:rgb(110, 2, 2)">Courriel:</span> info@poutineenfolie.ca';
    CONTENT.insertBefore(DESCRIPTION, CONTENT.lastChild);

}

export { populateContact }