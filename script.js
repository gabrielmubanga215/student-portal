function searchPapers() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let papers = document.getElementsByClassName("paper");

    for (let i = 0; i < papers.length; i++) {
        let title = papers[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (title.includes(input)) {
            papers[i].style.display = "block";
        } else {
            papers[i].style.display = "none";
        }
    }
}

function filterByYear() {
    let selectedYear = document.getElementById("yearFilter").value;
    let papers = document.getElementsByClassName("paper");

    for (let i = 0; i < papers.length; i++) {
        let year = papers[i].getAttribute("data-year");

        if (selectedYear === "all" || year === selectedYear) {
            papers[i].style.display = "block";
        } else {
            papers[i].style.display = "none";
        }
    }
}
