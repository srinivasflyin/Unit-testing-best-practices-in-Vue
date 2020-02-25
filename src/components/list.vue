<template>
 <div>
   <div v-for="item in items" :key="item.name">
      <img :src="getImgUrl(item.imgUrl)" :alt="item.name"/>
      <span>{{item.name}}</span>
  </div>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import {} from '../shared/classesAndInterfaces'
@Component
export default class List extends Vue {
    @Prop() public items!: object []
    getImgUrl(imageUrl: string): string {
        return require(`../assets/hotelImages/${imageUrl}`)
    }
}
</script>