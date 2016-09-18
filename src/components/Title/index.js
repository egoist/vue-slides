import './style'

export default {
  name: 'title',
  render(h) {
    return (
      <h1 class="slide-title">{this.$slots.default}</h1>
    )
  }
}
