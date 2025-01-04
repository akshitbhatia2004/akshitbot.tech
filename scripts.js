document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("click", function() {
            this.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        });
    });

    // Modal functionality
    const modal = document.getElementById("paymentModal");
    const btns = document.querySelectorAll("button");
    const span = document.getElementsByClassName("close")[0];

    btns.forEach(btn => {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function showPaymentOptions() {
    document.getElementById("paymentModal").style.display = "block";
}
