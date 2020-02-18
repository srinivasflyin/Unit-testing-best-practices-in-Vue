<template>
  <div>
    <form>
      Countries
      <div class="form-check form-check-inline" v-for="country in countries" :key="country.name">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          :value="country.name"
          v-model="filters.countries"
          @change="getSelectedCountry"
        />
        <label class="form-check-label" for="inlineCheckbox1">{{country.name}}</label>
      </div>Cities
      <div class="form-check" v-for="city in cities" :key="city.id">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          :value="city.name"
          v-model="filters.cities"
          @change="getSelectedCity"
        />
        <label class="form-check-label" for="inlineCheckbox2">{{city.name}}</label>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class Filters extends Vue {
  public countries: object[] = [];
  public cities: object[] = [];
  public filters = {countries: [], cities: []};
  constructor() {
    super();
    this.countries = [
      { name: "Austrailia", id: 1 },
      { name: "United arab emirates", id: 2 },
      { name: "United states of america", id: 3 }
    ];
    this.cities = [
      { name: "perth", id: 1 },
      { name: "dubai", id: 2 },
      { name: "dollas", id: 3 }
    ];
    this.filters['countries'] =  []
    this.filters['cities'] = []
  }
  @Emit('update:filter')
    updateFilter() {
     return this.filters
    }

  getSelectedCountry () {
    this.updateFilter()
  }
  getSelectedCity() {
    this.updateFilter()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
