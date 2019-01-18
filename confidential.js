(function() {
  setTimeout(function () {

    // Header
    var banner = document.createElement("div");
    banner.className = "classification-banner";
    banner.innerHTML = "CONFIDENTIAL";
    banner.style = "display: block; background-color: #286090; color: #fff; font-weight: bold; text-align: center; text-shadow: 1px 1px 0 #444; margin-left: -2rem; position: absolute; width: 98.5vw; height: 16px"

    var content = document.getElementsByClassName("navbar-pf-vertical")[0];
    if (typeof(content) != 'undefined' && content != null)
    {
      content.insertBefore(banner, content.firstChild);
    } else {
      var body = document.body;
      body.insertBefore(banner, body.firstChild);
    }

    // Footer
    var bannerFooter = document.createElement("footer");
    bannerFooter.className = "classification-banner-footer";
    bannerFooter.innerHTML = "CONFIDENTIAL";
    bannerFooter.style = "display: block; background-color: #286090; color: #fff; font-weight: bold; text-align: center; text-shadow: 1px 1px 0 #444; position: absolute; width: 98.5vw; bottom: 0; z-index: 99999; height: 16px"
    var body = document.body;
    body.appendChild(bannerFooter);

  }, 1000);
}());
