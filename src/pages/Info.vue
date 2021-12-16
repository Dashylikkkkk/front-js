<template>
  <div id="info">
    <InfoCard/>
    <FormCard/>
  </div>
</template>

<script>
import FormCard from '@/components/FormCard.vue'
import InfoCard from '@/components/InfoCard.vue'

export default {
  name: "Info",
  props: {
    msg: String,
  },  
  components:{
    FormCard, InfoCard
  }
};
</script>


