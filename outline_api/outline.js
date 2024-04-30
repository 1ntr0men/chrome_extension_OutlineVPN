// outline.js
// Этот скрипт будет общаться с Outline API и предоставлять функции для использования в других частях расширения.

const OUTLINE_API_URL = 'https://outline.yourserver.com'; // Замените на URL вашего Outline API сервера

async function addOutlineServer(key) {
    try {
        // Здесь ты делаешь запрос к Outline API для добавления сервера с определенным ключом
        const response = await fetch(`${OUTLINE_API_URL}/add-server`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}

async function toggleOutlineServer(serverId, enable) {
    try {
        // Включение или выключение сервера в зависимости от состояния переключателя
        const action = enable ? 'enable' : 'disable';
        const response = await fetch(`${OUTLINE_API_URL}/server/${serverId}/${action}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}

export { addOutlineServer, toggleOutlineServer };
