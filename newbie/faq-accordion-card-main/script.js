(function () {
    const anss = Array.from(document.querySelectorAll('.ans'));
    const quess = Array.from(document.querySelectorAll('.question'));
    quess.forEach(ques => {
        ques.addEventListener('click', (event) => {
            anss.forEach(ans => {
                ans.classList.remove('ans-show');
            });
            quess.forEach(q => {
                q.classList.remove('active');
                q.children[0].classList.remove('rotateArrow');
            });
            let eAns = this.event.target.parentNode.children[1];
            this.event.target.classList.toggle('active');
            eAns.classList.add('ans-show');
            this.event.target.children[0].classList.toggle('rotateArrow');
        });
    })
})();