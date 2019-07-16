export default {
  data () {
    return {
      width: 0,
    };
  },
  mounted() {
    window.addEventListener("resize", this.getWidth);

    this.getWidth();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWidth);
  },
  methods: {
    getWidth() {
      this.$nextTick(() => {
        this.width = this.$refs.container.clientWidth;
      });
    },
  }
};