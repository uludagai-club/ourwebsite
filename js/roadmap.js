fetch("./data/roadmaps.json")
.then((response) => response.json())
.then((json) => {
  let roadmapsDiv = document.querySelector(
    "#announcements > div > div > div.services-items"
  );
  for (let p of json.roadmaps) {
    roadmapsDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="service-item scroll-animation" data-animation="fade_from_bottom">
      <h2><a href = "#${p.name}">${p.name}</a></h2>
  </div>`
    );
  }
});

fetch("./data/roadmaps.json")
.then((response) => response.json())
.then((json) => {
  let roadmapsDiv2 = document.querySelector(
    "#roadmaps > div > div > div.services-items"
  );
  for (let p of json.roadmaps) {
    roadmapsDiv2.insertAdjacentHTML(
      "beforeend",
      `<div class="service-item scroll-animation" data-animation="fade_from_bottom" id="${p.name}">
      <span class="date"><h1>${p.name}</h2></span>
  </div>`
    );

    for(let i = 0; i < p.topics.length ; i++){
      roadmapsDiv2.insertAdjacentHTML(
        "beforeend",
        `
        <div class="roadmap-item scroll-animation" data-level="A">
          <span class="ana_b"aslik><h5>${p.topics[i].topic}</h5></span>
        </div>
        `
      );
      for(let j = 0; j < p.topics[i].subtopics.length ; j++){
        roadmapsDiv2.insertAdjacentHTML(
          "beforeend",
          `
          <div class="topic-item scroll-animation" data-level="B">
            <span class="level-title">${p.topics[i].subtopics[j].title}</span>
          </div> 
          `
        );
      }
    }    
  }
});
