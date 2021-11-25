const initialLoad = () => {
    const CONTENT = document.querySelector('#content');

    const HEADER = document.createElement('div');
    HEADER.classList.add('header-footer');
    CONTENT.appendChild(HEADER);

    const TITLE = document.createElement('div');
    TITLE.id = 'title';
    TITLE.textContent = 'Poutine en Folie';
    HEADER.appendChild(TITLE);
}

export {initialLoad}
