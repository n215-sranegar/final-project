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

var aboutContent = ``;

//This function is being called from the app.js and it has the page name
export function modelPageName(pgName) {
    try {
        eval(pgName);
        $("#app").html(eval(pgName));
    } catch (e) {
        console.log("hello ", e);
    }
}