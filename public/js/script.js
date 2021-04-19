const iconsSkills = document.querySelectorAll('.icons');
const skillName = document.getElementById('skill-name');
const iconSkill = document.getElementById('icon-skill');
const descriptionSkill = document.getElementById('description-skill');

iconsSkills.forEach(element => {
    element.addEventListener('click', () => {
        const classListElement = element.classList[1];
        
        skillName.innerText = classListElement ;
        iconSkill.setAttribute('src', `./public/assets/icons/${classListElement}.svg`);
        descriptionSkill.innerText = element.getAttribute('alt')
    });
});

const setModal = document.querySelector('.set-modal');
const modalContainer = document.querySelector('.modal-container');

function openOrCloseModal(){
    modalContainer.classList.toggle('open-modal');
};

setModal.addEventListener('click', () => openOrCloseModal())

const closeModal = document.querySelector('.close');

closeModal.addEventListener('click', () => openOrCloseModal())