// head-component.js

document.addEventListener("DOMContentLoaded", function () {
  const head = document.head;

  // Meta tags
  const metaCharset = document.createElement("meta");
  metaCharset.setAttribute("charset", "UTF-8");

  const metaViewport = document.createElement("meta");
  metaViewport.name = "viewport";
  metaViewport.content = "width=device-width, initial-scale=1.0";

  const metaIE = document.createElement("meta");
  metaIE.httpEquiv = "X-UA-Compatible";
  metaIE.content = "ie=edge";

  // Icons
  const icons = [
    { rel: "icon", type: "image/png", sizes: "96x96", href: "img/icons/favicon-96x96.png" },
    { rel: "icon", type: "image/svg+xml", href: "img/icons/favicon.svg" },
    { rel: "shortcut icon", href: "img/icons/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "img/icons/apple-touch-icon.png" },
    { rel: "manifest", href: "img/icons/site.webmanifest" }
  ];

  icons.forEach(icon => {
    const link = document.createElement("link");
    Object.entries(icon).forEach(([key, value]) => link.setAttribute(key, value));
    head.appendChild(link);
  });

  // Stylesheets
  const stylesheets = [
    "css/plugins/bootstrap-grid.css",
    "css/plugins/font-awesome.min.css",
    "css/plugins/swiper.min.css",
    "css/plugins/fancybox.min.css",
    "css/style.css"
  ];

  stylesheets.forEach(href => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    head.appendChild(link);
  });

  // Dynamic title based on page
  const path = window.location.pathname;
  let pageTitle = "FPattern";

  const titleMap = {
    "index.html": "FPattern - Home",
    "about.html": "FPattern - About",
    "portfolio-1.html": "FPattern - Portfolio Grid 1",
    "portfolio-2.html": "FPattern - Portfolio Grid 2",
    "portfolio-3.html": "FPattern - Portfolio Slider",
    "services.html": "FPattern - Services",
    "service.html": "FPattern - Single Service",
    "blog.html": "FPattern - Blog",
    "blog-inner.html": "FPattern - Blog Inner",
    "publication.html": "FPattern - Publications",
    "team.html": "FPattern - Team",
    "contact.html": "FPattern - Contact Us",
    "project-1.html": "FPattern - Interior Design Studio",
    "project-2.html": "FPattern - Home Security Camera",
    "project-3.html": "FPattern - Kemia Skincare",
    "project-4.html": "FPattern - Cascade of Lava",
    "project-5.html": "FPattern - Molekule Air Pro",
    "project-6.html": "FPattern - Tony's Chocolonely",
    "careers.html": "FPattern - Careers"
  };

  const currentPage = path.split("/").pop(); // e.g., "index.html"
  if (titleMap[currentPage]) {
    pageTitle = titleMap[currentPage];
  }

  const title = document.createElement("title");
  title.textContent = pageTitle;
  head.appendChild(title);

  // Also add meta tags last to keep proper order
  head.append(metaCharset, metaViewport, metaIE);
});
