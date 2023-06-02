let parent = document.querySelector('#parent-tabs');
let links  = parent.querySelectorAll('.menu a');
let tabs   = parent.querySelectorAll('.tab');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
    let activeLink = parent.querySelector('.menu a.active');
    activeLink.classList.remove('active');
    
    let activeTab = parent.querySelector('.tab.active');
    activeTab.classList.remove('active');
    
    tabs[i].classList.add('active');
    this.classList.add('active');
    
    event.preventDefault();
    });
}