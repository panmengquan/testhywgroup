<template>
  <div viewClass class="title-border" :style="viewClass">
    <div class="border-view">
      <span class="title" :style="titleClass">{{ txt }}</span>
      <span class="border-line" :style="borderClass" />
    </div>
  </div>
</template>

<script>
export default {
  name:'ScaleTitle',
  props: {
    viewClass: {
      type: String,
      default: ''
    },
    titleClass: {
      type: String,
      default: ''
    },
    borderClass: {
      type: String,
      default: ''
    },
    txt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css" scoped >
  .title-border {
    display: flex;
    justify-content: flex-start;
  }
  .border-view{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .border-line {
    width: 100%;
    height: 10px;
    background-color:  rgba(255, 151, 77, 0.6);
  }
  .title {
    font-weight: 600;
    font-size:18px;color:#0A2A4D;
    margin-bottom: -10px;
    line-height: 25px;
    z-index: 99;
  }
</style>
