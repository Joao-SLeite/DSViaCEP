import RequestException from './exceptions/request-exception.js';

export async function getJson(url) {
    try {
        const response = await fetch(url);
        const jasonBody = await response.json();
        return jasonBody;
    } catch (e) {
        throw new RequestException('Erro ao realizar requisição');
    }
}
