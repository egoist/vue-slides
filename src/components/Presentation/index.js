import './style'
import './animations/bounce'
import './animations/slide-x'
import './animations/rotate'

export default {
  name: 'presentation',
  created() {
    document.addEventListener('keydown', e => {
      if (e.code === 'ArrowRight') {
        this.$store.commit('slides/NEXT')
      } else if (e.code === 'ArrowLeft') {
        this.$store.commit('slides/PREV')
      }
    }, false)
  },
  beforeMount() {
    this.$store.commit('slides/TOTAL', this.$slots.default.length)
  },
  render(h) {
    const total = this.$slots.default.length
    const {active, animations} = this.$store.state.slides
    const indicatorWidth = `${((active + 1) / total) * 100}%`
    return (
      <div class="presentation">
        <div class="slides-indicator" data-tip={`${active + 1}/${total}`} style={{width: indicatorWidth}}></div>
        {this.$slots.default.map((slide, index) => {
          return (
            <transition name={animations[index].type}>
              <div data-index={index} class="slide-wrapper" v-show={index === active}>{slide}</div>
            </transition>
          )
        })}
      </div>
    )
  }
}
