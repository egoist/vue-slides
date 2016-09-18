import './style'

export default {
  name: 'slide',
  props: {
    align: {
      type: String,
      default: 'center'
    },
    animation: String
  },
  mounted() {
    if (this.animation) {
      const index = parseInt(this.$el.parentNode.getAttribute('data-index'), 10)
      this.$store.commit('slides/UPDATE_ANIMATION', {
        index,
        animation: this.animation
      })
    }
  },
  render(h) {
    return (
      <div class={['slide', `slide-${this.align}`]}>
        {this.$slots.default}
      </div>
    )
  }
}
