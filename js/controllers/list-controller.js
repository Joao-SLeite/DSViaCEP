import * as dataStorageService from '../services/address-storage-service.js';

function State() {
    this.listSection = null;
}

const state = new State();

export function init() {
    state.listSection = document.querySelector('#list-section');
    updateListValue();
}

export function addCard(address) {
    state.listSection.innerHTML = '';
    dataStorageService.postAddressService(address);
    const addressList = dataStorageService.getAddressService();
    addressList.map((address, index) => {
        const card = creatCard(address, index);
        state.listSection.appendChild(card);
    });
}

function updateListValue() {
    const addressList = dataStorageService.getAddressService();
    if (addressList) {
        state.listSection.innerHTML = '';
        addressList.map((address, index) => {
            const card = creatCard(address, index);
            state.listSection.appendChild(card);
        });
    } else {
        state.listSection.innerHTML = '';
    }
}

function creatCard(address, index) {
    const div = document.createElement('div');
    div.classList.add('card-list-item');
    div.setAttribute('id', `CEP${index}`);
    div.addEventListener('click', handleRemoveButtonClick);

    const h3 = document.createElement('h3');
    h3.innerHTML = address.city;
    h3.addEventListener('click', (event) => event.stopPropagation());

    const line = document.createElement('p');
    line.classList.add('address-line');
    line.innerHTML = `${address.street}, ${address.number}`;
    line.addEventListener('click', (event) => event.stopPropagation());

    const cep = document.createElement('p');
    cep.classList.add('cep-line');
    cep.innerHTML = address.cep;
    cep.addEventListener('click', (event) => event.stopPropagation());

    div.appendChild(h3);
    div.appendChild(line);
    div.appendChild(cep);

    return div;
}
function handleRemoveButtonClick(event) {
    const index = event.target.id[3];
    dataStorageService.removeAddressService(index);
    updateListValue();
}
