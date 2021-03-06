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
<a href="#blog1"><div class="event-container">
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
  </div></a>
  <a href="#blog2"><div class="event-container">
    <div class="date">
      <p>30</p>
      <span><p>JUL</p></span>
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
  </div></a>
  <a href="#blog3"><div class="event-container">
    <div class="date">
      <p>30</p>
      <span><p>AUG</p></span>
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
  </div></a>
  <a href="#blog4"><div class="event-container">
    <div class="date">
      <p>23</p>
      <span><p>NOV</p></span>
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
  </div></a>
  <a href="#blog5"><div class="event-container">
    <div class="date">
      <p>23</p>
      <span><p>DEC</p></span>
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
  </div></a>
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
    <a href="#gallery1"><div class="gallery-img gallery-img1"></div></a>
    <a href="#gallery2"><div class="gallery-img gallery-img2"></div></a>
    <a href="#gallery3"><div class="gallery-img gallery-img3"></div></a>
  </div>
  <div class="gallery-row second-gallery-row">
    <a href="#gallery4"><div class="gallery-img gallery-img4"></div></a>
    <a href="#gallery5"><div class="gallery-img gallery-img5"></div></a>
  </div>
</div>
</div>`;

var gallery1Content = `<div class="gal-container">
<div class="gal-content">
  <div class="gal-header gal-header-1">
    <h1>1.</h1>
    <h2>food festival</h2>
  </div>
  <div class="gal-description">
    <p class="left-gal-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p class="right-gal-p">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>
</div>`;

var gallery2Content = `<div class="gal-container">
<div class="gal-content">
  <div class="gal-header gal-header-2">
    <h1>2.</h1>
    <h2>dee jay</h2>
  </div>
  <div class="gal-description">
    <p class="left-gal-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p class="right-gal-p">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>
</div>`;

var gallery3Content = `<div class="gal-container">
<div class="gal-content">
  <div class="gal-header gal-header-3">
    <h1>3.</h1>
    <h2>speech</h2>
  </div>
  <div class="gal-description">
    <p class="left-gal-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p class="right-gal-p">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>
</div>`;

var gallery4Content = `<div class="gal-container">
<div class="gal-content">
  <div class="gal-header gal-header-4">
    <h1>4.</h1>
    <h2>open foodfest</h2>
  </div>
  <div class="gal-description">
    <p class="left-gal-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p class="right-gal-p">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>
</div>`;

var gallery5Content = `<div class="gal-container">
<div class="gal-content">
  <div class="gal-header gal-header-5">
    <h1>5.</h1>
    <h2>international</h2>
  </div>
  <div class="gal-description">
    <p class="left-gal-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p class="right-gal-p">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>
</div>`;

var blogContent = `  <div class="blog-page-container">
<div class="blog-content-wrapper">
  <h1>Blog:</h1>
  <div class="row">
    <div class="blog-container">
      <div class="blog-date">
        <p>06</p>
        <span><p>JUN</p></span>
      </div>

      <div class="blog-right-content">
        <a href="#blog1"><div class="blog-img"></div></a>
        <p>Sed et persipiatis unde omnis iste natus</p>
        <span
          ><p>
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p></span
        >
      </div>
    </div>
    <div class="blog-container">
      <div class="blog-date">
        <p>30</p>
        <span><p>JUL</p></span>
      </div>
      <div class="blog-right-content">
      <a href="#blog2"><div class="blog-img"></div></a>
        <p>Sed et persipiatis unde omnis iste natus</p>
        <span
          ><p>
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p></span
        >
      </div>
    </div>
  </div>
  <div class="row">
    <div class="blog-container">
       <div class="blog-date">
        <p>30</p>
        <span><p>AUG</p></span>
      </div>
      <div class="blog-right-content">
      <a href="#blog3"><div class="blog-img"></div></a>
        <p>Sed et persipiatis unde omnis iste natus</p>
        <span
          ><p>
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p></span
        >
      </div>
    </div>
    <div class="blog-container">
      <div class="blog-date">
        <p>23</p>
        <span><p>NOV</p></span>
      </div>
      <div class="blog-right-content">
      <a href="#blog4"><div class="blog-img"></div></a>
        <p>Sed et persipiatis unde omnis iste natus</p>
        <span
          ><p>
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p></span
        >
      </div>
    </div>
  </div>
  <div class="row">
    <div class="blog-container">
      <div class="blog-date">
        <p>23</p>
        <span><p>DEC</p></span>
      </div>
      <div class="blog-right-content">
      <a href="#blog5"><div class="blog-img"></div></a>
        <p>Sed et persipiatis unde omnis iste natus</p>
        <span
          ><p>
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p></span
        >
      </div>
    </div>
    <div class="blog-container last-container">
    <div class="blog-date">
      <p>23</p>
      <span><p>DEC</p></span>
    </div>
    <div class="blog-right-content">
      <div class="blog-img"></div>
      <p>Sed et persipiatis unde omnis iste natus</p>
      <span
        ><p>
          Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo.
        </p></span
      >
    </div>
  </div>
  </div>
</div>
</div>`

var blog1Content = ` <div class="blog-story-page">
<div class="blog-story-wrapper">
  <div class="blog-story-header">
    <div class="story-date-wrapper">
      <p>06</p>
      <span><p>JUN</p></span>
    </div>
  </div>
  <div class="blog-story-text-wrapper">
  <h1>Header #1:</h1>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  <h1>Header #2:</h1>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>
</div>`

var blog2Content = ` <div class="blog-story-page">
<div class="blog-story-wrapper">
  <div class="blog-story-header">
    <div class="story-date-wrapper">
      <p>30</p>
      <span><p>JUL</p></span>
    </div>
  </div>
  <div class="blog-story-text-wrapper">
  <h1>Header #1:</h1>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  <h1>Header #2:</h1>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>
</div>`

var blog3Content = ` <div class="blog-story-page">
<div class="blog-story-wrapper">
  <div class="blog-story-header">
    <div class="story-date-wrapper">
      <p>30</p>
      <span><p>AUG</p></span>
    </div>
  </div>
  <div class="blog-story-text-wrapper">
  <h1>Header #1:</h1>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  <h1>Header #2:</h1>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>
</div>`

var blog4Content = ` <div class="blog-story-page">
<div class="blog-story-wrapper">
  <div class="blog-story-header">
    <div class="story-date-wrapper">
      <p>23</p>
      <span><p>NOV</p></span>
    </div>
  </div>
  <div class="blog-story-text-wrapper">
  <h1>Header #1:</h1>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  <h1>Header #2:</h1>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>
</div>`

var blog5Content = ` <div class="blog-story-page">
<div class="blog-story-wrapper">
  <div class="blog-story-header">
    <div class="story-date-wrapper">
      <p>23</p>
      <span><p>DEC</p></span>
    </div>
  </div>
  <div class="blog-story-text-wrapper">
  <h1>Header #1:</h1>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  <h1>Header #2:</h1>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>
</div>`

var contactContent = `  <div class="contact-page">
<div class="contact-page-wrapper">
  <h1>Contact Us:</h1>
  <div class="contact-content-container">
    <div class="form">
      <input type="text" placeholder="Your name...">
      <input type="text" placeholder="Email address...">
      <input type="text" placeholder="Company...">
      <textarea name="" id="" cols="30" rows="10" placeholder="Message..."></textarea>
      <button>Send Message</button>
    </div>
    <div class="map">
      <div class="map-img"></div>
    </div>
  </div>
</div>
</div>`

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