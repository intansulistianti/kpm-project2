window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if(window.scrollY > 50) {
        navbar.classList.remove ("bg-transparent", "text-white");
        navbar.classList.add ("bg-white", "text-amber-900")
    } else {
        navbar.classList.remove("bg-white", "text-amber-900");
        navbar.classList.add("bg-transparent", "text-white");
    }
})
