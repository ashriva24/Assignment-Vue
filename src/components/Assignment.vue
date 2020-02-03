<template>
<div id="Assignment" class="container col-md-8">
  <div class="row">
    <H2>Dashboard</H2>
  </div>
  <div class="row">
    <select class="dropdown" v-model="selectedCategory" @change="getCatByCategory(selectedCategory)">
      <option value= "0">Select Category</option>
       <option v-bind:key="category.id" :value="category.id" v-for="category in categoryList">{{category.name}}</option>
    </select>
  </div>
  <div class="row top-margin">
    <div v-bind:key="catDetail.id" v-for="catDetail in catList" class="div-row" >
        <img :src="catDetail.url" alt="cat image" class="img-box" />
    </div>
  </div>
</div>
</Template>
<script>
import axios from 'axios'
export default {
  name: 'Assignment',
  data () {
    return {
      catList: null,
      categoryList: null,
      selectedCategory: '0'
    }
  },
  mounted () {
    this.getRandom(),
    this.getAllCategory()
  },
  methods: {
        getRandom () { axios
          .get('https://api.thecatapi.com/v1/images/search')
          .then(response => (this.catList = response.data))
        },
        getCatByCategory (value) {
       if(value != "0"){
           axios
          .get('https://api.thecatapi.com/v1/images/search?category_ids='+ value +'&limit=10')
          .then(response => (this.catList = response.data));
          }else
          {
          axios
           .get('https://api.thecatapi.com/v1/images/search')
           .then(response => (this.catList = response.data))          
          }

        },
        getAllCategory () { axios
          .get('https://api.thecatapi.com/v1/categories')
          .then(response => (this.categoryList = response.data))
        }
      }
}
</script>
<style>
.img-box {
    float: left;
    width: 100px;
    height: 100px;
    background-size: cover;
}

.div-row{
  display:inline-block;
  width:100%;
  margin-bottom:2px;
}

.top-margin{
  margin-top:10px;
}

</style>
