document.addEventListener('DOMContentLoaded', function() {
    var vpnToggle = document.getElementById('vpnToggle');

    // Инициализация состояния переключателя при загрузке всплывающего окна
    // TODO: Загрузите реальное состояние VPN из хранилища или фонового скрипта
    // Предположим, что состояние VPN хранится в chrome.storage
    chrome.storage.sync.get('vpnEnabled', function(data) {
        vpnToggle.checked = data.vpnEnabled || false;
    });

    // Слушатель для переключения VPN
    vpnToggle.addEventListener('change', function() {
        if(vpnToggle.checked) {
            // Код для включения VPN
            console.log('VPN On');
            // Сохраняем состояние VPN как включенное
            chrome.storage.sync.set({vpnEnabled: true}, function() {
                console.log('VPN is set to ON');
            });
        } else {
            // Код для выключения VPN
            console.log('VPN Off');
            // Сохраняем состояние VPN как выключенное
            chrome.storage.sync.set({vpnEnabled: false}, function() {
                console.log('VPN is set to OFF');
            });
        }
    });

    // Слушатель для кнопки "Add Server"
    document.getElementById('addServerBtn').addEventListener('click', function() {
        document.getElementById('serverKeyEntry').style.display = 'block';
    });

    // Слушатель для кнопки "Save" в форме ввода ключа сервера
    document.getElementById('saveServerKeyBtn').addEventListener('click', function() {
        var serverKey = document.getElementById('serverKeyInput').value.trim();
        if(serverKey) {
            // Здесь код для сохранения ключа сервера
            console.log('Server Key Saved:', serverKey);
            // Сохраняем ключ сервера
            chrome.storage.sync.set({serverKey: serverKey}, function() {
                console.log('Key is saved in Chrome storage');
            });
        } else {
            // Оповещение пользователя, если ключ не введен
            console.log('No key entered');
        }
    });
});
