

function playbutton(){

    document.addEventListener('DOMContentLoaded', function() {
        const playButtons = document.querySelectorAll('.play-button');
        playButtons.forEach(button => {
            let flag = 0;
    
            button.addEventListener('click', function() {
                if (flag == 0) {
                    button.innerHTML = `<i class="ri-pause-line"></i>`;
                    flag = 1;
                } else {
                    button.innerHTML = `<i class="ri-play-line"></i>`;
                    flag = 0;
                }
            });
        });
    });
}
playbutton()


function movedots(){

    document.addEventListener('DOMContentLoaded', function() {
        const dots = document.querySelectorAll('.dot');
        let currentIndex = 0;
    
        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    
        function nextDot() {
            currentIndex = (currentIndex + 1) % dots.length;
            updateDots();
        }
    
        setInterval(nextDot, 1000);
        updateDots();
    });
}
movedots()


