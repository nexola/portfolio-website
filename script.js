const linksInternos = document.querySelectorAll(".header-menu a[href^='#']");

if (linksInternos.length) {
  console.log(linksInternos);

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
    console.log(section);
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
