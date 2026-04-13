function abrirModal(lugar, desc, tipo, episodio) {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    document.getElementById('tituloModal').innerText = lugar;
    document.getElementById('descModal').innerText = desc;
    document.getElementById('tipoModal').innerText = tipo;
    document.getElementById('episodioModal').innerText = episodio;

    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function filtrarMapa(tipo) {
    const puntos = document.querySelectorAll('.punto');

    puntos.forEach(p => {
        if (tipo === 'all') {
            p.style.display = 'block';
        } else {
            p.style.display = p.classList.contains(tipo) ? 'block' : 'none';
        }
    });
}