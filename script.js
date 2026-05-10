function login() {

    let name = document.getElementById("nameInput").value;

    if (name == "") {

        alert("Isi dulu nama pasangan 😅");

    } else {

        document.getElementById("partnerName").innerHTML = name;

        document.getElementById("loginPage").style.display = "none";

        document.getElementById("mainContent").style.display = "block";
    }
}

function showMessage() {

    document.getElementById("messageSection").style.display = "flex";

    document.getElementById("messageSection").scrollIntoView({
        behavior: "smooth"
    });
}

/* EFEK LOVE JATUH */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);