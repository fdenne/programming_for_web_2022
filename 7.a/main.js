Vue.createApp({
    data() {
      return {
        plants: [
          {
           commonName: "Pink Princess Philodendron",
           botanicalName: "Philodendron erubescens 'pink princess'",
           image: "img/ppp.jpeg",
           collected: "yes"
          }, {
            commonName: "Thai Constellation",
            botanicalName: "Monstera Deliciosa Thai Constellation",
            image: "img/tc.jpeg",
            collected: "no"
          }, {
            commonName: "Philodendron 'Jungle Boogie'",
            botanicalName: "Philodendron Narrow",
            image: "img/jb.jpeg",
            collected: "no"
          }, {
            commonName: "Owl Eye Peperomia",
            botanicalName: "Peperomia polybotrya",
            image: "img/pep.jpeg",
            collected: "yes"
          }, {
            commonName: "Marble Queen Pothos",
            botanicalName: "Epipremnum aureum 'marble queen'",
            image: "img/mqp.jpeg",
            collected: "yes"
          }
      ]
      }
    }
}).mount("#plantsApp")
