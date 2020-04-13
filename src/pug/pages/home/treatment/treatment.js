export default () => {
    const sections = document.querySelector('.treatment__accordion-content');
    const allSections = document.querySelectorAll('.treatment__section-head');

    sections.addEventListener('click', e => {
        if (e.target.className.search('treatment__section-head') > -1) {
            allSections.forEach(s => s.classList.remove('active'));
            if (e.target.className.search('active') > -1) {
                e.target.classList.remove('active');
            } else {
                e.target.classList.add('active');
            }
        }
    })
}