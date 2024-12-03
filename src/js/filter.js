// Funcionalidad actualizada para los filtros
document.addEventListener('DOMContentLoaded', function() {
    const filterSelects = document.querySelectorAll('.filter-select');
    const activeFilters = document.querySelector('.active-filters');
    const placeCards = document.querySelectorAll('.place-card');

    // Función para aplicar filtros
    function applyFilters() {
        const activeFiltersMap = new Map();
        
        filterSelects.forEach(select => {
            if (select.value) {
                activeFiltersMap.set(select.id, select.value);
            }
        });

        placeCards.forEach(card => {
            let shouldShow = true;
            
            activeFiltersMap.forEach((value, key) => {
                const cardValue = card.dataset[key.replace('-filter', '')];
                if (cardValue !== value) {
                    shouldShow = false;
                }
            });

            card.style.display = shouldShow ? 'block' : 'none';
        });
    }

    // Event listeners para los selectores
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            if (this.value) {
                // Añadir nuevo tag de filtro
                const filterTag = document.createElement('div');
                filterTag.className = 'filter-tag';
                filterTag.dataset.filter = this.id;
                filterTag.innerHTML = `
                    ${this.options[this.selectedIndex].text}
                    <span class="remove-tag">×</span>
                `;
                activeFilters.appendChild(filterTag);
            }
            applyFilters();
        });
    });

    // Event listener para remover tags
    activeFilters.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-tag')) {
            const tag = e.target.parentElement;
            const filterId = tag.dataset.filter;
            const select = document.getElementById(filterId);
            select.value = '';
            tag.remove();
            applyFilters();
        }
    });

    // Event listener para el botón de descartar
    document.querySelector('.discard-btn').addEventListener('click', function() {
        filterSelects.forEach(select => select.value = '');
        activeFilters.innerHTML = '';
        placeCards.forEach(card => card.style.display = 'block');
    });
});