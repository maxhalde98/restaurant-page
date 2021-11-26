import './style.css';
import _ from 'lodash';
import { initialLoad } from './init';
import { populateMenu } from './menu';
import { populateWelcome } from './welcome';
import { populateContact } from './contact';

initialLoad();

const TABS = document.querySelectorAll('.header-button');

TABS.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === 'menu') {
            populateMenu();
        }
        else if (btn.id === 'welcome') {
            populateWelcome();
        }
        else {
            populateContact();
        }
    })
})