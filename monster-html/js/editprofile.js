document.getElementById('saveMo').addEventListener('click', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phoNe').value;

    document.querySelector('.card-title.mt-2').textContent = fullName;
    document.querySelector('.card-subtitle.mt-2').textContent = email;
    document.getElementById('phone').textContent = phone
});