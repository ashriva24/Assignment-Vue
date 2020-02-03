

var apiURL = 'https://api.thecatapi.com/v1/images/search?category_ids=15&limit=10'

new Vue ({

el:'#assignment',
data:{
  catList: null
},

created:function () {
  this.fetchData();
},

methods: {
  fetchData: function () {
    var self = this
    if (navigator.userAgent.indexOf('PhantomJS') > -1) {
      // use mocks in e2e to avoid dependency on network / authentication
      setTimeout(function () {
        self.catList = window.MOCKS[self.currentBranch]
      }, 0)
    } else {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', apiURL)
      xhr.onload = function () {
        self.catList = JSON.parse(xhr.responseText);        
      }
      xhr.send()
    }
  }
}

})
