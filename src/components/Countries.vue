<template>
  <div id="countries-container" class="container-fluid px-5 mt-5">
    <div class="row">
      <div
        class="col-sm-6 col-md-6 col-lg-3 px-4 py-5"
        v-for="(country, idx) in countries"
        v-bind:key="idx"
      >
        <div class="shadow country">
          <img
            class="img h-auto"
            style="border-radius: 20px 20px 0px 0px"
            v-bind:src="country.flags.svg"
            v-on:click="details(country)"
          />

          <div class="pt-4 pl-4">
            <h4>{{ country.name.official }}</h4>
            <p class="pb-2 pt-3 mb-5">
              Population: {{ country.population }} <br />
              Region: {{ country.region }}<br />
              Captial: {{ country.capital }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    details(country) {
      console.log(country);
      this.$country.setCountry(country);
      this.$router.push({
        name: "country",
        params: { countryInfo: country.name.common },
      });
    },
  },

  props: {
    countries: Array,
  },
};
</script>
