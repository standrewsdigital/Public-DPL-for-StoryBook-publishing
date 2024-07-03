function openModal(name, role, description) {
    const modal = document.getElementById('modal');
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalRole').textContent = role;
    document.getElementById('modalDescription').textContent = description;
    modal.showModal();
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.close();
}
