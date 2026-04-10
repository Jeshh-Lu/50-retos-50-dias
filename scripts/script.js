import projectList from "./lista_proyecto.json" with { type: 'json' };

const container = document.getElementById('projects-container');

const cards = projectList.map((project, index) => {
    const isComingSoon = !project.name || project.name.trim() === "";
    const numStr = (index + 1).toString().padStart(2, '0');
    
    if (isComingSoon) {
        return `
            <div class="card coming-soon">
                <span class="card-number">${numStr}</span>
                <h3 class="card-title">Reto Sorpresa</h3>
                <p class="card-desc">Próximamente...</p>
            </div>
        `;
    }
    
    return `
        <div class="card">
            <span class="card-number">${numStr}</span>
            <h3 class="card-title">${project.name}</h3>
            <a href="./${project.urlSegment}/index.html" class="card-link">
                Ver Demo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="icon" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
        </div>
    `;
});

container.innerHTML = cards.join('');