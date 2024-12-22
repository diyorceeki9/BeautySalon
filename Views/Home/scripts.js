// В scripts.js  
document.addEventListener('DOMContentLoaded', function() {  
    const elements = document.querySelectorAll('.fade-in');  
    const options = {  
        threshold: 0.1 // процент видимости элемента  
    };  

    const observer = new IntersectionObserver((entries) => {  
        entries.forEach(entry => {  
            if (entry.isIntersecting) {  
                entry.target.classList.add('fade-in-visible');  
                observer.unobserve(entry.target);  
            }  
        });  
    }, options);  

    elements.forEach(element => {  
        observer.observe(element);  
    });  
});