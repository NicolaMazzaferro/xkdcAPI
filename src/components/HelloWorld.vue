<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="text-center text-danger my-5">Albo</h1>
      <div class="card" style="width: 18rem;">
        <div class="col-12">
          <img class="card-img-top" :src="img" alt="Card image cap">
          <div class="card-body">
            <p class="mb-0 text-center">{{ comicData.day }}/{{ comicData.month }}/{{ comicData.year }}</p>
            <h5 class="card-title text-center p-3">{{ comicData.safe_title }}</h5>
            <p class="card-text">{{ comicData.alt }}</p>
            <div class="row justify-content-between">
              <div class="col-4">
                <button @click="loadPreviousComic" class="btn btn-primary"> &lt; </button>
              </div>
              <div class="col-4">
                <p>N° {{ comicData.num }}</p>
              </div>
              <div class="col-4">
                <button @click="loadNextComic" class="btn btn-primary"> > </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proxyUrl: 'https://cors-anywhere.herokuapp.com/',
      currentComicNum: 100,
      img: '',
      response: null
    }
  },
  computed: {
    comicData() {
      if (this.response) {
        return {
          day: this.response.data.day,
          month: this.response.data.month,
          year: this.response.data.year,
          num: this.response.data.num,
          safe_title: this.response.data.safe_title,
          alt: this.response.data.alt,
          link: `https://xkcd.com/${this.response.data.num}/`
        }
      }
      return {};
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.targetUrl = `https://xkcd.com/${this.currentComicNum}/info.0.json`;

      this.axios.get(this.proxyUrl + this.targetUrl)
      .then(response => {
        this.img = response.data.img;
        this.response = response;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },
    loadPreviousComic() {
      this.currentComicNum -= 1;
      this.getData();
    },
    loadNextComic() {
      this.currentComicNum += 1;
      this.getData();
    }
  }
}
</script>

<style>

</style>
