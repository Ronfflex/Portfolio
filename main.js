
    const button = document.querySelector(".navClose");
    const dopen = document.querySelector(".navOpen");

    button.addEventListener("click", () => {
        if(dopen.classList.contains("open")){
            dopen.classList.remove("open");
        }else{
        dopen.classList.add("open");
        }
    });
