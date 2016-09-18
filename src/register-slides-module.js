function getLeftIndex(total, active) {
  return (total + (active - 1)) % total
}

function getRightIndex(total, active) {
  return (active + 1) % total
}

function updateAnimation(animations, index, animation) {
  return animations.map((old, i) => {
    if (index === i) {
      if (typeof animation === 'string') return {...old, type: animation}
      return animation
    }
    return old
  })
}

function updateAnimationDirection(state, direction) {
  const re = /(\-{2}[\w]+\-[\w]+)?$/
  const fn = suffix => () => {
    return suffix
  }
  let activeSuffix
  if (direction === 'prev') {
    // cares about active slide and left slide
    const leftIndex = getLeftIndex(state.total, state.active)
    const leftSuffix = '--in-left'
    console.log(state.total, state.active)
    const leftAnimation = state.animations[leftIndex].type.replace(re, fn(leftSuffix))
    state.animations = updateAnimation(state.animations, leftIndex, leftAnimation)
    activeSuffix = '--out-right'
  } else if (direction === 'next') {
    // cares about active slide and right slide
    const rightIndex = getRightIndex(state.total, state.active)
    const rightSuffix = '--in-right'
    const rightAnimation = state.animations[rightIndex].type.replace(re, fn(rightSuffix))
    state.animations = updateAnimation(state.animations, rightIndex, rightAnimation)
    activeSuffix = '--out-left'
  }
  const activeAnimation = state.animations[state.active].type.replace(re, fn(activeSuffix))
  state.animations = updateAnimation(state.animations, state.active, activeAnimation)
  return state.animations
}

export default store => {
  store.registerModule('slides', {
    state: {
      active: 0,
      total: 0,
      animations: []
    },
    mutations: {
      'slides/NEXT'(state) {
        const next = (state.active + 1) % state.total
        state.animations = updateAnimationDirection(state, 'next')
        state.active = next
      },
      'slides/PREV'(state) {
        const prev = (state.total + (state.active - 1)) % state.total
        state.animations = updateAnimationDirection(state, 'prev')
        state.active = prev
      },
      'slides/TOTAL'(state, total) {
        state.total = total
        state.animations = new Array(total).fill({type: 'slide', direction: 'x'})
      },
      'slides/UPDATE_ANIMATION'(state, {index, animation}) {
        state.animations = updateAnimation(state.animations, index, animation)
      }
    }
  })
}
