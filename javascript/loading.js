
    // Loading bar but for scrolling => Handles scrolling and resizing
    document.addEventListener("DOMContentLoaded", function() {
    const loadingBar = document.getElementById("loading");   

    function updateLoadingBar() {
        loadingBar.style.display = 'block';
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        const progress = (scrollTop / scrollHeight) * 100;

        loadingBar.style.width = progress + "%";
        setTimeout(()=>{
            loadingBar.style.display = 'none';
        },4000);

        // When the page is fully scrolled hide the scroll indicator
        if (progress === 100) {
            setTimeout(() => {
                loadingBar.style.display = "none";
            }, 300);
        }
    } 


    //update title with current year
    var year = new Date().getFullYear();
    document.getElementById('toptitle').textContent = 'Bro lee music ᴷᴱ | '+year;

    // Update the loading bar on scroll and resize
    window.addEventListener("scroll", updateLoadingBar);
    window.addEventListener("resize", updateLoadingBar);

}); 