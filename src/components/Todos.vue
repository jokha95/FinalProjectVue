<script>
import { toRefs, reactive } from "vue";

export default {
  // methods: {
  //   details(country) {
  //     console.log(country);
  //     this.$country.setCountry(country);
  //     this.$router.push({
  //       name: "country",
  //       params: { countryInfo: country.name.common },
  //     });
  //   },
  // },
  name: "App",

  setup() {
    const state = reactive({
      countriesName: {},
      countries: "",
    });

    console.log(state.countries);

    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.data[1].flag);
        state.countriesName = data.data;
      });

    //   methods: {
    // async fetchByName() {
    //   if (this.country_name === "") {
    //     this.mycountries = this.allCountries;
    //   } else {
    //     try {
    //       const response = await this.axios.get(
    //         "https://restcountries.com/v3.1/name/" + this.country_name
    //       );
    //       this.mycountries = response.data;
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   }
    // },

    // debounceInput: _.debounce(function () {
    //   this.fetchByName();
    // }, 400),

    return {
      // country_name: "",

      ...toRefs(state),
    };
  },
};
</script>

<template>
  <header>
    <h1>Countries API</h1>
  </header>
  <div>
    <div id="filters" class="container-fluid px-5">
      <div class="row">
        <div class="input-group col-5">
          <span class="input-group-append">
            <button
              class="btn border-right-0 border shadow-none"
              style="border-radius: 5px 0px 0px 5px"
              type="button"
            >
              <b-icon-search />
            </button>
          </span>
          <input
            class="form-control border-left-0 border shadow-none"
            type="search"
            placeholder="Search for a country"
            style="border-radius: 0px 5px 5px 0px"
            id="example-search-input"
            v-on:input="debounceInput"
            v-model="country_name"
          />
        </div>
      </div>
    </div>
  </div>
  <section class="countries">
    <div
      class="countries-wrapper"
      v-for="(countries, idx) in countriesName"
      :key="idx"
    >
      <div class="card">
        <img :src="countries.flag" v-on:click="details(country)" />
        <!-- <RouterLink :to="{ name: 'detil' }">detil<br /></RouterLink> -->

        <div class="card-body">
          <h2>{{ countries.name }}</h2>
          <p>Alpha-2 code: {{ countries.iso2 }}</p>
          <p>Alpha-3 code: {{ countries.iso3 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  text-align: center;
  font-size: 4vmin;
}

.countries {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  height: 250px;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0 0 13px 0px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  overflow: hidden;
  margin: 0.85rem;
}

.card:hover {
  height: 280px;
}

.card img {
  width: 302px;
  height: 189px;
  border-radius: 16px;
  transition: 0.5s;
}

.card:hover img {
  border-radius: 16px 16px 0 0;
}

.card .card-body {
  padding: 0.5rem 0.85rem 1rem;
  height: 0;
}

.card .card-body h2 {
  margin: 0.5rem 0;
  font-size: 0.85rem;
  color: hsl(240, 27%, 39%);
  letter-spacing: 3px;
}

.card .card-body p {
  text-align: justify;
  font-size: 0.9rem;
  line-height: 25px;
}
</style>
