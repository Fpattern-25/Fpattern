// head-component.js

document.addEventListener("DOMContentLoaded", function () {
  const head = document.head;

  const metaCharset = document.createElement("meta");
  metaCharset.setAttribute("charset", "UTF-8");

  const metaViewport = document.createElement("meta");
  metaViewport.name = "viewport";
  metaViewport.content = "width=device-width, initial-scale=1.0";

  const metaIE = document.createElement("meta");
  metaIE.httpEquiv = "X-UA-Compatible";
  metaIE.content = "ie=edge";

  const linkFavicon96 = document.createElement("link");
  linkFavicon96.rel = "icon";
  linkFavicon96.type = "image/png";
  linkFavicon96.sizes = "96x96";
  linkFavicon96.href = "img/icons/favicon-96x96.png";

  const linkFaviconSVG = document.createElement("link");
  linkFaviconSVG.rel = "icon";
  linkFaviconSVG.type = "image/svg+xml";
  linkFaviconSVG.href = "img/icons/favicon.svg";

  const linkFaviconICO = document.createElement("link");
  linkFaviconICO.rel = "shortcut icon";
  linkFaviconICO.href = "img/icons/favicon.ico";

  const linkAppleTouchIcon = document.createElement("link");
  linkAppleTouchIcon.rel = "apple-touch-icon";
  linkAppleTouchIcon.sizes = "180x180";
  linkAppleTouchIcon.href = "img/icons/apple-touch-icon.png";

  const linkManifest = document.createElement("link");
  linkManifest.rel = "manifest";
  linkManifest.href = "img/icons/site.webmanifest";

  const title = document.createElement("title");
  title.textContent = "FPattern";

  const stylesheets = [
    "css/plugins/bootstrap-grid.css",
    "css/plugins/font-awesome.min.css",
    "css/plugins/swiper.min.css",
    "css/plugins/fancybox.min.css",
    "css/style.css"
  ];

  const links = stylesheets.map(href => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    return link;
  });

  // Append everything to head
  head.append(
    metaCharset,
    linkFavicon96,
    linkFaviconSVG,
    linkFaviconICO,
    linkAppleTouchIcon,
    linkManifest,
    metaViewport,
    metaIE,
    ...links,
    title
  );
});
