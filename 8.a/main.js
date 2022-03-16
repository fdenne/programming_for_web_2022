Vue.createApp({
    data() {
      return {
        newPlantObj: {
          commonName: " ",
           botanicalName: " ",
           image: " ",
           collected: " ",
        },
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
          },
      ]
    }
  },
      methods: {
        submitHandler: () => {
          console.log("submitted");
          vm.plants = vm.plants.concat(vm.newPlantObj);
          vm.resetForm();
        },
        resetForm: () => {
          vm.newPlantObj = {
            commonName: " ",
           botanicalName: " ",
           image: " ",
           collected: " ",
          };
        },
        deleteItem: item => {
          vm.plants = vm.plants.filter(plant => {
            return plant !== item;
          })
        }
        }
}).mount("#plantsApp")
