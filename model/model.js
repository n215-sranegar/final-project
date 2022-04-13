//This information simulates getting data from a database

var homeContent = `<div class="home-hero">
<h1>Header goes here</h1>
<h2>Less important text goes here</h2>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
  aliquid minus nemo sed est.
</p>
<div class="home-btn-wrapper">
  <button>Read More</button>
</div>
</div>
<div class="home-quote">
<div class="home-quote-wrapper">
  <p>
    “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
    ab illo inventore veritatis et quasi architecto beatae vitae dicta
    sunt explicabo. Iste natus error sit voluptatem accusantium
    doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
    inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo”
  </p>
  <h2>John Smith</h2>
  <span><p>Corporation CEO, books author.</p></span>
</div>
</div>

<div class="home-events">
<h2>Upcoming Events:</h2>
<div class="upcoming-events-wrapper">
  <div class="event-container">
    <div class="date">
      <p>06</p>
      <span><p>JUN</p></span>
    </div>
    <div class="event-description">
      <p>Sed et persipiatis unde omnis iste natus</p>
      <span
        ><p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </p></span
      >
    </div>
  </div>
  <div class="event-container">
    <div class="date">
      <p>06</p>
      <span><p>JUN</p></span>
    </div>
    <div class="event-description">
      <p>Sed et persipiatis unde omnis iste natus</p>
      <span
        ><p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </p></span
      >
    </div>
  </div>
  <div class="event-container">
    <div class="date">
      <p>06</p>
      <span><p>JUN</p></span>
    </div>
    <div class="event-description">
      <p>Sed et persipiatis unde omnis iste natus</p>
      <span
        ><p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </p></span
      >
    </div>
  </div>
  <div class="event-container">
    <div class="date">
      <p>06</p>
      <span><p>JUN</p></span>
    </div>
    <div class="event-description">
      <p>Sed et persipiatis unde omnis iste natus</p>
      <span
        ><p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </p>
      </span>
    </div>
  </div>
  <div class="event-container">
    <div class="date">
      <p>06</p>
      <span><p>JUN</p></span>
    </div>
    <div class="event-description">
      <p>Sed et persipiatis unde omnis iste natus</p>
      <span
        ><p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </p>
      </span>
    </div>
  </div>
</div>
</div>`

var aboutContent = `<div class="about-container">
<div class="about-wrapper">
  <div class="about-header">
    <div class="about-header-img">
      <h1>Our History:</h1>
    </div>
  </div>
  <div class="about-history">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
      est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
      velit, sed quia non numquam eius modi tempora incidunt ut labore
      et dolore magnam aliquam quaerat voluptatem.
    </p>
  </div>
</div>
</div>`;

var galleryContent = `<div class="gallery-container">
<div class="gallery-content-wrapper">
  <h1>Gallery:</h1>
  <div class="gallery-row first-gallery-row">
    <div class="gallery-img gallery-img1"></div>
    <div class="gallery-img  gallery-img2"></div>
    <div class="gallery-img  gallery-img3"></div>
  </div>
  <div class="gallery-row second-gallery-row">
    <div class="gallery-img gallery-img4"></div>
    <div class="gallery-img gallery-img5"></div>
  </div>
</div>
</div>`;

//This function is being called from the app.js and it has the page name
export function modelPageName(pgName) {
    if (pgName == "homeContent") {
        $("nav .links a").removeClass("black-text").addClass("white-text");
        $("nav .nav-wrapper").removeClass("black-border").addClass("white-border");
        $("nav .nav-wrapper .logo .nav-logo").removeClass("black-logo").addClass("white-logo");
        $("nav .nav-wrapper label").removeClass("black-text").addClass("white-text");
    } else {
        $("nav .links a").removeClass("white-text").addClass("black-text");
        $("nav .nav-wrapper").removeClass("white-border").addClass("black-border");
        $("nav .nav-wrapper .logo .nav-logo").removeClass("white-logo").addClass("black-logo");
        $("nav .nav-wrapper label").removeClass("white-text").addClass("black-text");
    }

    try {
        eval(pgName);
        //Sends to View (index.html)
        $("#app").html(eval(pgName));
    } catch (e) {
        console.log("hello ", e);
    }
}