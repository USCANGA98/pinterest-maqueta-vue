<template>
  <iframe
    style="border-radius: 20px"
    :src="urlVideo"
    height="515"
    width="236"
    frameborder="0"
    scrolling="no"
  ></iframe>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  props: {
    urlVideo: {
      type: String,
      default: function () {
        return "";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>