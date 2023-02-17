import * as addressStorage from '../data/data-storage.js';

export function postAddressService(address) {
    addressStorage.postAddress(address);
}

export function getAddressService() {
    return addressStorage.getAddress();
}
export function removeAddressService(index) {
    addressStorage.removeAddress(index);
}
