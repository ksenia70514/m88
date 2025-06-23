document.getElementById('moreIdeasBtn').addEventListener('click', () => {
    const moreIdeasDiv = document.getElementById('moreIdeas');
    if (moreIdeasDiv.style.display === 'none') {
        moreIdeasDiv.style.display = 'block';
        document.getElementById('moreIdeasBtn').textContent = 'Скрыть дополнительные идеи';
    } else {
        moreIdeasDiv.style.display = 'none';
        document.getElementById('moreIdeasBtn').textContent = 'Показать больше идей';
    }
});