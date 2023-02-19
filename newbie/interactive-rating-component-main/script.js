(function () {
    const rates = Array.from(document.querySelectorAll('.circle'));
    const vote = document.getElementById('vote');
    const rate = document.getElementById('rates');
    rates.forEach((rated) =>{
        rated.addEventListener('click', (event)=>{
            document.getElementById('rateNum').textContent = this.event.target.getAttribute('id');
            vote.classList.add('hidden');
            rate.classList.add('show');
        });
    });
    
})();