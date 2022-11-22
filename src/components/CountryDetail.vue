<template>
  <div class="container details">
    <button v-on:click="back()" class="btn shadow-sm align-middle">
      <b-icon-arrow-left /> &nbsp; Back &nbsp;
    </button>
    <div class="container row">
      <img
        class="col-md-6 mb-4 img-fluid w-100 h-auto p-0 m-0"
        v-bind:src="this.country.flags.svg"
      />
      <div class="col-sm-1" />
      <div class="col-sm-5">
        <h2 v-text="this.country.name.official"></h2>
        <div class="row">
          <ul class="col list-unstyled">
            <li class="py-3">
              <b>Native Name:</b>
              {{
                this.country.name.nativeName[
                  Object.keys(this.country.name.nativeName)[
                    Object.keys(this.country.name.nativeName).length - 1
                  ]
                ].official
              }}
            </li>
            <li class="py-3">
              <b>Population:</b> {{ this.country.population }}
            </li>
            <li class="py-3"><b>Region:</b> {{ this.country.region }}</li>
            <li class="py-3">
              <b>Sub Region:</b> {{ this.country.subregion }}
            </li>
            <li class="py-3"><b>Capital:</b> {{ this.country.capital[0] }}</li>
          </ul>
          <ul class="col list-unstyled">
            <!-- <li class="py-3">
                <b>Top Level Domain:</b> {{ this.country.topLevelDomain }}
              </li> -->
            <li class="py-3">
              <b>Currencies:</b>
              {{ Object.values(this.country.currencies)[0].symbol }}
              (
              {{ Object.values(this.country.currencies)[0].name }}
              )
            </li>
            <li class="py-3">
              <b>Languages:</b>
              {{ Object.values(this.country.languages) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    // nativeName() {
    //   var nameKey = Object.keys(this.country.name.nativeName);
    //   nameKey = nameKey[nameKey.length - 1];
    //   return this.country.name.nativeName[nameKey].official;
    // },

    async borderDetails(nbr) {
      console.log("In fetch border details");

      this.link =
        "https://restcountries.eu/rest/v3.1/alpha/" + nbr.toLowerCase();
      const response = await this.axios.get(this.link);
      console.log(response);
      this.$country.setCountry(response.data);
      console.log(this.country.name.nativeName.length);
      this.$router.push({
        name: "country",
        params: { countryInfo: response.data.name.common },
      });
    },
    back() {
      this.$router.replace("/");
    },
  },

  props: {
    country: Object,
  },
};
</script>
