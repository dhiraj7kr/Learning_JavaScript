const currentYear =new Date().getFullYear()
document.getElementById('dynamicYear').textContent = currentYear

// console.log(currentYear)

function toggleMenu(){
    const navList = document.getElementById('nav-list').classList.toggle('show')
    navList.classList.toggle('show')
}

document.getElementById('toggleMenu').addEventListener('click', toggleMenu)