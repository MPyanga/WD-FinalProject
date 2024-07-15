function toggleHeight(containerId, iconId) {
    const container = document.getElementById(containerId);
    const icon = document.getElementById(iconId);

    if (container.style.height === '17rem') {
        container.style.height = '10rem'; // Change back to initial height
        icon.classList.remove('fa-angles-up');
        icon.classList.add('fa-angles-down');
    } else {
        container.style.height = '17rem'; // Expand container
        icon.classList.remove('fa-angles-down');
        icon.classList.add('fa-angles-up');
    }
}
