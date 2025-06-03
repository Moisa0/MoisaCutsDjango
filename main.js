const container = document.getElementById("container_cortes");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnRemover = document.getElementById("btnRemover");

btnAdicionar.addEventListener("click", () => {
    const cortes = document.querySelector(".section_corte");
    const novoCorte = cortes.cloneNode(true);

    // Limpar inputs
    novoCorte.querySelectorAll("input").forEach(input => input.value = "");

    container.appendChild(novoCorte);
});

btnRemover.addEventListener("click", () => {
    const cortes = document.querySelectorAll(".section_corte");
    if (cortes.length > 1) {
        container.removeChild(cortes[cortes.length - 1]);
    }
});

document.getElementById("btnExportar").addEventListener("click", downloadpdf);

const novaDiv = document.createElement("div");
novaDiv.classList.add("page-break");
container.appendChild(novaDiv);

function downloadpdf(){
    const item = document.querySelector(".content");

    const opt = {
        margin: 0.5,
        filename: "corte.pdf",
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(item).save();
}

