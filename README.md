# vue-slides

[![NPM version](https://img.shields.io/npm/v/vue-slides.svg?style=flat-square)](https://npmjs.com/package/vue-slides) [![NPM downloads](https://img.shields.io/npm/dm/vue-slides.svg?style=flat-square)](https://npmjs.com/package/vue-slides) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-slides/master.svg?style=flat-square)](https://circleci.com/gh/egoist/vue-slides)

<details><summary>Table of Contents</summary>

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
- [Command-Line Tool](#command-line-tool)
- [Contributing](#contributing)
- [License](#license)

<!-- tocstop -->

</details>

## Install

This project is **under heavily development**, for a quick preview you can visit: http://vs.surge.sh

```bash
# vue-slides needs vue and vuex
$ npm install --save vue vuex
$ npm install --save vue-slides
```

## Usage

Vue-Slides use Vuex to manage states, so you should bind the `slides module` to your existing vuex store before getting started.

```js
// in your store.js
import Vue from 'vue'
import Vuex from 'vuex'
import {registerSlidesModule} from 'vue-slides'

Vue.use(Vuex)

const store = new Vuex.Store()
registerSlidesModule(store)

export default store
```

Then write the actual slides:

```js
// app.js
import {
  Presentation,
  Slide,
  Title,
  SubTitle
} from 'vue-slides'

export default {
  name: 'my-presentation',
  render(h) {
    return (
      <Presentation>
        <Slide>
          <Title>My Superb Presentation</Title>
          <SubTitle>such slides, very neat!</SubTitle>
        </Slide>
      </Presentation>
    )
  }
}
```

Render the slides in browser:

```js
import App from './app'

new Vue({
  el: '#app'
  render: h => h(App)
})
```

## Command-Line Tool

You can write JSX or HTML or even Markdown to generate beautiful slides, coming soon...

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
