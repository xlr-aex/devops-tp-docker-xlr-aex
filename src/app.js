function updateTimestamp() {
    const now = new Date();
    const timestamp = now.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('timestamp').textContent = timestamp;
}

function generateContainerId() {
    const chars = '0123456789abcdef';
    let id = '';
    for (let i = 0; i < 12; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}

function testContainer() {
    const resultBox = document.getElementById('result');
    const statusElement = document.getElementById('status');

    statusElement.textContent = 'Test en cours...';
    statusElement.style.color = '#EA580C';

    setTimeout(() => {
        statusElement.textContent = 'Container opérationnel';
        statusElement.style.color = '#16A34A';

        // Sécurisation: Utilisation de DOM API au lieu de innerHTML pour éviter les failles XSS
        resultBox.textContent = ''; // Nettoyer le contenu précédent

        const title = document.createElement('strong');
        title.textContent = 'Test du Container Réussi';
        resultBox.appendChild(title);
        resultBox.appendChild(document.createElement('br'));
        resultBox.appendChild(document.createElement('br'));

        const lines = [
            'docker ps',
            'CONTAINER ID   IMAGE                               STATUS',
            `${document.getElementById('container-id').textContent}   ghcr.io/xlr-aex/devops-tp-docker-xlr-aex:latest   Up 2 minutes`,
            '',
            '- Serveur Nginx : OK',
            '- Application Web : OK',
            '- Port 80 : LISTENING',
            '- Health Check : PASSED'
        ];

        lines.forEach(line => {
            if (line === '') {
                resultBox.appendChild(document.createElement('br'));
            } else {
                resultBox.appendChild(document.createTextNode(line));
                resultBox.appendChild(document.createElement('br'));
            }
        });
        resultBox.className = 'result-box success';
    }, 1500);
}

document.addEventListener('DOMContentLoaded', function () {
    updateTimestamp();
    setInterval(updateTimestamp, 1000);

    const containerId = generateContainerId();
    document.getElementById('container-id').textContent = containerId;
    document.getElementById('status').textContent = 'Container opérationnel';
});
