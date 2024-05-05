document.addEventListener('DOMContentLoaded', function() {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    
    // Function to show content of the current slide
    function showText() {
        let currentSlide = document.querySelector('.item');
        let content = currentSlide.querySelector('.content');
        content.style.display = 'block';
    }
    
    // Function to hide content of the current slide
    function hideText() {
        let currentSlide = document.querySelector('.item');
        let content = currentSlide.querySelector('.content');
        content.style.display = 'none';
    }
    
    // Show content of the first slide when the page loads
    showText();

    next.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        let slide = document.querySelector('.slide');
        
        if (items.length > 0) {
            // Hide content of the current slide before moving
            hideText();
            
            // Move first item to the end
            slide.appendChild(items[0].cloneNode(true));
            slide.removeChild(items[0]);
            
            // Show content of the new current slide
             
            showText();
        }
    });
    
    prev.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        let slide = document.querySelector('.slide');
        
        if (items.length > 0) {
            // Hide content of the current slide before moving
            hideText();
            
            // Move last item to the beginning
            slide.insertBefore(items[items.length - 1].cloneNode(true), items[0]);
            slide.removeChild(items[items.length - 1]);
            
            // Show content of the new current slide
            showText();
        }
    });
});