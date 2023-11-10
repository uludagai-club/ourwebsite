fetch("./data/galery/year2023.json")
  .then((response) => response.json())
  .then((json) => {
    let eventsDiv = document.querySelector(
      "#yirmiuc > div > div > div.row.portfolio-items"
    );
    for (let e of json.photos) {
      let tagsHTML = "";
      for (const t of e.tags) {
        tagsHTML += `<li>
        <span>${t}</span>
        </li>`;
      }
      eventsDiv.insertAdjacentHTML(
        "beforeend",
        `
        <div class="col-md-${
          e.type === "medium" ? "12" : "6"
        } scroll-animation" data-animation="fade_from_bottom">
        <div class="portfolio-item portfolio-half${
          e.type === "medium" ? "full" : "half"
        }">
            <div class="portfolio-item-inner">
            <a href="data/events/${e.imageURL}" data-lightbox="example-1">
                <img src="data/events/${e.imageURL}" alt="Portfolio">
            </a>

            <ul class="portfolio-categories">
                ${tagsHTML}
            </ul>
            </div>
            <h2><a href="${e.link}">${e.name}</a></h2>
        </div>
        </div>
        `
      );
    }
  });

  fetch("./data/galery/year2022.json")
  .then((response) => response.json())
  .then((json) => {
    let eventsDiv = document.querySelector(
      "#yirmiiki > div > div > div.row.portfolio-items"
    );
    for (let e of json.photos) {
      let tagsHTML = "";
      for (const t of e.tags) {
        tagsHTML += `<li>
        <span>${t}</span>
        </li>`;
      }
      eventsDiv.insertAdjacentHTML(
        "beforeend",
        `
        <div class="col-md-${
          e.type === "medium" ? "12" : "6"
        } scroll-animation" data-animation="fade_from_bottom">
        <div class="portfolio-item portfolio-half${
          e.type === "medium" ? "full" : "half"
        }">
            <div class="portfolio-item-inner">
            <a href="data/events/${e.imageURL}" data-lightbox="example-1">
                <img src="data/events/${e.imageURL}" alt="Portfolio">
            </a>

            <ul class="portfolio-categories">
                ${tagsHTML}
            </ul>
            </div>
            <h2><a href="${e.link}">${e.name}</a></h2>
        </div>
        </div>
        `
      );
    }
  });

  fetch("./data/galery/year2021.json")
  .then((response) => response.json())
  .then((json) => {
    let eventsDiv = document.querySelector(
      "#yirmibir > div > div > div.row.portfolio-items"
    );
    for (let e of json.photos) {
      let tagsHTML = "";
      for (const t of e.tags) {
        tagsHTML += `<li>
        <span>${t}</span>
        </li>`;
      }
      eventsDiv.insertAdjacentHTML(
        "beforeend",
        `
        <div class="col-md-${
          e.type === "medium" ? "12" : "6"
        } scroll-animation" data-animation="fade_from_bottom">
        <div class="portfolio-item portfolio-half${
          e.type === "medium" ? "full" : "half"
        }">
            <div class="portfolio-item-inner">
            <a href="data/events/${e.imageURL}" data-lightbox="example-1">
                <img src="data/events/${e.imageURL}" alt="Portfolio">
            </a>

            <ul class="portfolio-categories">
                ${tagsHTML}
            </ul>
            </div>
            <h2><a href="${e.link}">${e.name}</a></h2>
        </div>
        </div>
        `
      );
    }
  });