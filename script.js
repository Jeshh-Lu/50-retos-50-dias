import projectList from "./lista_proyecto.json" with { type: 'json' }


const rows = projectList.map((project, index) => `
    <tr>
        <td class="first">${ (index + 1).toLocaleString('es-MX', { minimumIntegerDigits: 2, useGrouping: false }) } </td>
        <td class="second">${ project.name }</td>
        <td class="third">
            <a href="./${ project.urlSegment }/index.html">Demo en vivo</a>
        </td>
    </tr>
`)


document.getElementById('tbody').innerHTML = rows.join('')