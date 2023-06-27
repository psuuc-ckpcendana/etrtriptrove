const form = document.getElementById("form");
const name = document.getElementById("name");
const birth = document.getElementById("dob");
const addr = document.getElementById("address");
form.addEventListener('submit', e =>{
    e.preventDefault();

    val();
});

const val = () => {
    const nameval = name.value;
    const birthd = birth.value;
    const addrs = addr.value;

    if(nameval === '' || birthd === '' || addrs === ''){
        alert("Please fill in the fields.");
        return;
    }
    else{
        alert("Successfully registered.");
        window.location.href = '/monster-html/index.html';
    }

    
 }; 

