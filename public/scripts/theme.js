const themeChanger = document.querySelector("#theme_changer"), 
nightColor = document.querySelectorAll(".night-color"), 
    a_tag = document.querySelectorAll("a"),
    searchInput = document.querySelector("#search_input"),
    themeText = document.querySelectorAll(".theme_text")
    
let theme = localStorage.getItem("theme")
    
const enableDarkMode = () => {
    nightColor.forEach(bg => {
        bg.classList.add(localStorage.getItem("themeClass"))
            a_tag.forEach(text => {
            text.classList.add("theme_text-color")
        })
        themeText.forEach(heading => {
            heading.classList.add("theme_text-color")
        })
        document.body.classList.add("night_theme-bg")
        searchInput.classList.add("plc")
    })

    localStorage.setItem("theme", "enabled")
}
const disableDarkMode = () => {
    nightColor.forEach(bg => {
        bg.classList.remove(localStorage.getItem("themeClass"))
        a_tag.forEach(text => {
            text.classList.remove("theme_text-color")
    })
    themeText.forEach(heading => {
        heading.classList.remove("theme_text-color")
    })
    document.body.classList.remove("night_theme-bg")
        searchInput.classList.remove("plc")
    })

    localStorage.setItem("theme", null)
}

if (theme === "enabled") {
    enableDarkMode()
}

themeChanger.addEventListener("click", function(){
    theme = localStorage.getItem("theme")
    if(theme !== "enabled") {
        enableDarkMode()
        console.log(theme);
    } else {
        disableDarkMode()
        console.log(theme);
    }
})