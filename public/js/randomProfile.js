var randomProfile = new Vue({
  el: '#randomUsers',
  data: {
    peopleList: []
  },
  methods: {
    fetchPerson(){
      fetch('https://randomuser.me/api/?inc=name,location,dob,email,picture')
      .then(response => response.json())
      // .then(json => randomProfile.users = json.results[0]);
      .then(function(json) {randomProfile.peopleList = json.results[0];
      console.log(randomProfile.peopleList);})
    }
  },
  created() {
    this.fetchPerson();
  }
});
