export function postAddress(address) {
    const listCeps = getAddress();

    let postNewAddressObj = listCeps !== null ? listCeps : [];

    postNewAddressObj.push(address);
    localStorage.setItem('ceps', JSON.stringify(postNewAddressObj));
}

export function getAddress() {
    const listCepsJson = localStorage.getItem('ceps');
    const listCepsObj = JSON.parse(listCepsJson);
    return listCepsObj;
}

export function removeAddress(index) {
    const listCep = getAddress();
    const addressListFiltered = listCep.filter(
        (address, indexAdd) => indexAdd != index
    );
    localStorage.setItem('ceps', JSON.stringify(addressListFiltered));
}
