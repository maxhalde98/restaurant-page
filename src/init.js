const initialLoad = () => {
    const CONTENT = document.querySelector('#content');

    const HEADER = document.createElement('div');
    HEADER.classList.add('header-footer');
    CONTENT.appendChild(HEADER);

    const TITLE = document.createElement('div');
    TITLE.id = 'title';
    TITLE.textContent = 'Poutine en Folie';
    HEADER.appendChild(TITLE);

    const TABS = document.createElement('div');
    TABS.id = 'tabs';
    HEADER.appendChild(TABS);

    const WELCOME_BTN = document.createElement('button');
    WELCOME_BTN.classList.add('header-button');
    WELCOME_BTN.id = 'welcome';
    WELCOME_BTN.textContent = 'Bienvenue';
    TABS.appendChild(WELCOME_BTN);

    const MENU_BTN = document.createElement('button');
    MENU_BTN.classList.add('header-button');
    MENU_BTN.id = 'menu';
    MENU_BTN.textContent = 'Menu';
    TABS.appendChild(MENU_BTN);

    const CONTACT_BTN = document.createElement('button');
    CONTACT_BTN.classList.add('header-button');
    CONTACT_BTN.textContent = 'Contact';
    TABS.appendChild(CONTACT_BTN);

    const DESCRIPTION = document.createElement('div');
    DESCRIPTION.id = 'description';
    DESCRIPTION.innerHTML = 'La meilleure poutine à Acton Vale et de loin! Une tonne de variétées toutes aussi succulentes les unes que les autres. 10/10<br>- Jean-Guy Lin<br>';
    CONTENT.appendChild(DESCRIPTION);

    const POUTINE_DESCRIPTION_IMG = document.createElement('img');
    POUTINE_DESCRIPTION_IMG.src = '../src/images/poutine.jpg';
    POUTINE_DESCRIPTION_IMG.id = 'poutine-img';
    DESCRIPTION.appendChild(POUTINE_DESCRIPTION_IMG);   
    
    const FOOTER = document.createElement('div');
    FOOTER.classList.add('header-footer');
    FOOTER.id = 'footer';
    FOOTER.textContent = 'Copyrights 2021 @ github.com/maxhalde98';
    CONTENT.appendChild(FOOTER);

    const HEADER_BTNS = document.querySelectorAll('.header-button');
    let curr = WELCOME_BTN;
    checkStyle();
    HEADER_BTNS.forEach(btn => {
        btn.addEventListener('click', () => {
            curr = btn;
            checkStyle();
        });
    });
    
    function checkStyle() {
        HEADER_BTNS.forEach(btn => {
            if (btn === curr) {
                btn.style.backgroundColor = 'rgb(243, 184, 36)';
            }
            else {
                btn.style.backgroundColor = 'gainsboro';
            }
        })
    };
}

export {initialLoad}
