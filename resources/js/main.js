function showProjectDetails(projectName) {
            alert(`soon`);
        }
        
        function validateForm() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields before submitting.');
                return false;
            }
            
            alert('Thank you for your message! I will get back to you soon.');
            return true;
        }
        
        function downloadResume() {
            alert('Downloading....');
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });