/* ==========================================================================
   WEBMASTER WIKI CORE ENGINE (GGS 2026 EDITION)
   Файл: js/script.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // ДВИЖОК ГЛАВНОЙ СТРАНИЦЫ (ХАБ, СЧЕТЧИКИ, ПОИСК И ФИЛЬТРЫ ЧИПСОВ)
    // ==========================================================================
    const cardsContainer = document.getElementById('cardsContainer');

    if (cardsContainer) {
        const searchInput = document.getElementById('searchInput');
        const searchFeedback = document.getElementById('searchFeedback');
        const searchResultCount = document.getElementById('searchResultCount');
        const clearSearchBtn = document.getElementById('clearSearchBtn');
        const cards = cardsContainer.querySelectorAll('.card');
        const chips = document.querySelectorAll('.filter-chips .chip');
        const flagship = document.querySelector('.flagship-section');
        const statTotal = document.getElementById('statArticlesCount');
        const statCategories = document.getElementById('statCategoriesCount');
        let currentFilter = 'all';

        // 1. Автоматический подсчет метрик по категориям карточек
        function autoCalculateMetrics() {
            let grandTotal = cards.length; // Каждая карточка — это отдельная глава конвейера
            const categoryCounts = {};

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                categoryCounts[category] = (categoryCounts[category] || 0) + 1;
            });

            // Обновляем счетчики на кнопках-чипсах
            chips.forEach(chip => {
                const filter = chip.getAttribute('data-filter');
                const chipCountEl = chip.querySelector('.chip-count');
                if (!chipCountEl) return;

                if (filter === 'all') {
                    chipCountEl.textContent = grandTotal;
                } else if (categoryCounts[filter] !== undefined) {
                    chipCountEl.textContent = categoryCounts[filter];
                }
            });

            // Обновляем KPI в шапке
            if (statTotal) {
                statTotal.textContent = grandTotal;
            }
            if (statCategories) {
                statCategories.textContent = cards.length; 
            }
        }

        autoCalculateMetrics();

        // 2. Хоткей быстрого поиска (Ctrl+K или "/")
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
                e.preventDefault();
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }
            if (e.key === 'Escape' && document.activeElement === searchInput) {
                clearSearch();
            }
        });

        // 3. События ввода и сброса поиска
        if (searchInput) {
            searchInput.addEventListener('input', runFilters);
        }

        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', clearSearch);
        }

        function clearSearch() {
            if (!searchInput) return;
            searchInput.value = '';
            runFilters();
            searchInput.focus();
        }

        // Обработка кликов по чипсам-фильтрам
        chips.forEach(chip => {
            chip.addEventListener('click', function() {
                chips.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.getAttribute('data-filter');
                runFilters();
            });
        });

        // Универсальная логика фильтрации широких блоков
        function runFilters() {
            if (!searchInput) return;
            const query = searchInput.value.toLowerCase().trim();
            let totalVisibleCards = 0;

            if (flagship) {
                if (currentFilter === 'all' || query) {
                    flagship.style.display = '';
                } else {
                    flagship.style.display = 'none';
                }
            }

            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const categoryMatches = (currentFilter === 'all' || currentFilter === cardCategory);
                const cardText = card.textContent.toLowerCase();
                const textMatches = !query || cardText.includes(query);

                if (categoryMatches && textMatches) {
                    card.style.display = '';
                    totalVisibleCards++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (searchFeedback && clearSearchBtn && searchResultCount) {
                if (query !== '' || currentFilter !== 'all') {
                    searchFeedback.style.display = 'flex';
                    clearSearchBtn.style.display = 'inline-block';
                    searchResultCount.textContent = `Найдено глав: ${totalVisibleCards}`;
                } else {
                    searchFeedback.style.display = 'none';
                    clearSearchBtn.style.display = 'none';
                }
            }
        }
    }

    // ==========================================================================
    // УНИВЕРСАЛЬНЫЙ СКРИПТ КОПИРОВАНИЯ КОДА (ДЛЯ СТАТЕЙ)
    // ==========================================================================
    const rawPreBlocks = document.querySelectorAll('pre:not(.code-container pre)');
    rawPreBlocks.forEach((block) => {
        if (block.closest('.code-container') || block.closest('.terminal-deck')) return;
        
        const wrapper = document.createElement('div');
        wrapper.className = 'code-container';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);

        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.innerText = 'Копировать';

        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(block.innerText.trim());
                button.innerText = '✅ Скопировано!';
                button.style.background = '#10B981';
                button.style.borderColor = '#10B981';
                button.style.color = '#FFFFFF';
                setTimeout(() => {
                    button.innerText = 'Копировать';
                    button.style.background = '';
                    button.style.borderColor = '';
                    button.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Ошибка копирования:', err);
            }
        });

        wrapper.appendChild(button);
    });
});