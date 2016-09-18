import {
  Presentation,
  Slide,
  Title,
  SubTitle
} from '../../../src'

export default {
  name: 'app',
  render(h) {
    return (
      <Presentation>
        <Slide>
          <Title>A quick intro to Vue-Slides!</Title>
          <SubTitle>..and this is made with vue-slides too</SubTitle>
          <p>hello world</p>
        </Slide>
        <Slide align="left-center" animation="rotate-down">
          <Title>Align control: left-center</Title>
          <p>You can pass prop <code>align="X-Y"</code> to control the slide align direction!</p>
        </Slide>
        <Slide align="right-center">
          <Title>Align control: right-center</Title>
          <p>You can pass prop <code>align="X-Y"</code> to control the slide align direction!</p>
        </Slide>
        <Slide align="center-top">
          <Title>Align control: center-top</Title>
          <p>You can pass prop <code>align="X-Y"</code> to control the slide align direction!</p>
        </Slide>

      </Presentation>
    )
  }
}

