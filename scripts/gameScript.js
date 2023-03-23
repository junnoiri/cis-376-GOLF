$(function () {
  const games = [
    {
      title: "#1",
      link: "https://bcoan2.github.io/cuddly-telegram-echo/",
      repo: "https://github.com/bcoan2/cuddly-telegram-echo",
      author: "Brody Coan",
    },
    {
      title: "#2",
      link: "https://jacksonthompson1.github.io/jt-lab-delta/",
      repo: "https://github.com/jacksonthompson1/jt-lab-delta",
      author: "William Thompson",
    },
    {
      title: "#3",
      link: "https://westonhumphries.github.io/bookish-octo-fishstick-Golf/",
      repo: "https://github.com/kaibrysouthern/special-palm-tree-echo",
      author: "Weston Humphries",
    },
    {
      title: "#4",
      link: "https://kaibrysouthern.github.io/psychic-octo-adventure-delta/",
      repo: "https://github.com/kaibrysouthern/psychic-octo-adventure-delta",
      author: "Kaibry Southern",
    },
    {
      title: "#5",
      link: "https://vikasnehra1.github.io/CharlieLab/",
      repo: "https://github.com/VikAsNeHrA1/CharlieLab",
      author: "Vikas Nehra",
    },
    {
      title: "#6",
      link: "https://mithrandiryeet.github.io/foxtrot/",
      repo: "https://github.com/mithrandiryeet/foxtrot",
      author: "William Wiggins",
    },
    {
      title: "#7",
      link: "https://github.com/anhnguyen148/echolab",
      repo: "https://anhnguyen148.github.io/echolab/",
      author: "Tram Nguyen",
    },
    {
      title: "#8",
      link: "https://gagethekidd.github.io/jerky-chicken-charlie/",
      repo: "https://github.com/gagethekidd/jerky-chicken-charlie",
      author: "Gage Mathis",
    },
    {
      title: "#9",
      link: "https://amannawaria12.github.io/Echo_lab/",
      repo: "https://github.com/amannawaria12/Echo_lab",
      author: "Aman Nawaria",
    },
    {
      title: "#10",
      link: "https://jconkle5.github.io/loose-juice-charlie/",
      repo: "https://github.com/Jconkle5/loose-juice-charlie",
      author: "Jason Conkle",
    },
    {
      title: "#11",
      link: "https://phenicieaaron.github.io/upgraded-tribble-echo/",
      repo: "https://github.com/phenicieaaron/upgraded-tribble-echo",
      author: "Aaron Phenicie",
    },
    {
      title: "#12",
      link: "https://connorlbrown.github.io/Epsilon-Echo/",
      repo: "https://github.com/ConnorLBrown/bingbong-charlie",
      author: "Connor Brown",
    },
    {
      title: "#13",
      link: "https://junnoiri.github.io/cis-376-CHARLIE-lab/",
      repo: "https://github.com/junnoiri/cis-376-CHARLIE-lab",
      author: "Junnosuke Noiri",
    },
  ];
  // iterate over the JSON array
  $.each(games, function (index, item) {
    console.log("Game Title: " + item.title);
    console.log("Game URL: " + item.link);
    console.log("Game Author: " + item.author);

    const el = `<div class="card">\
      <div class="card-body"> \
        <h5 class="card-title">${item.title}</h5> \
        <p class="app-link">\
          Here is the link: <a href="${item.link}" target="_blank">GAME</a> \
        </p>\
        <p class="repo-link">\
        Here is the repo: <a href="${item.repo}" target="_blank">REPO</a>
      </p>\
        <p class="maker-name">Create by: ${item.author} </p> \
      </div>\
    </div>`;

    console.log(el);

    $("#card-container").append(el);
  });
});
