let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = (e) => {
    e.preventDefault();
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const targetDate = new Date('2025-08-13 23:59:59').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                let displayText = '';
                if (days > 0) {
                    displayText = `${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                } else {
                    displayText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                }

                document.getElementById('timeDisplay').textContent = displayText;
            } else {
                document.getElementById('timeDisplay').textContent = 'Time\'s up!';
            }
        }

        // Update every second
        setInterval(updateCountdown, 1000);
        
        // Initialize immediately
        updateCountdown();