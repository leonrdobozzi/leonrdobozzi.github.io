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
    })
})

