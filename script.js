function toggleActive(element) {
    const input = document.querySelector('input');
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => icon.classList.remove('active'));
    input.value = element.dataset.link;
    element.classList.add('active');
}

function copyToClipboard() {
    const alert = document.querySelector('.alert');
    setTimeout(() => {
        alert.style.display = "none";
    }, 1000);
    alert.style.display = "block";

    const input = document.querySelector('input');
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
}