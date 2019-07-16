export default {
  data () {
    return {
      ref: null,
      isVisible: false,
      position: {},
      tooltip: '',
    };
  },
  methods: {
    showTooltip (event, rect, value) {
      const {clientX, clientY} = event;
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const position = {};

      if (x < rect.width / 2) {
        position.left = `${x}px`;
        position.right = `auto`;
      } else {
        position.left = `auto`;
        position.right = `${rect.width - x}px`;
      }

      if (y < rect.height / 2) {
        position.top = `${y}px`;
        position.bottom = `auto`;
      } else {
        position.top = `auto`;
        position.bottom = `${rect.height - y}px`;
      }

      this.isVisible = true;
      this.tooltip = value;
      this.position = position;
    },
    hideTooltip () {
      this.isVisible = false;
    },
    getPosition() {
      return { ...this.position };
    },
  },
};