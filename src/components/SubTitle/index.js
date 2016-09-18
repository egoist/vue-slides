import './style'

export default {
  name: 'sub-title',
  render(h) {
    return (
      <h2 class="slide-subtitle">{this.$slots.default}</h2>
    )
  }
}
