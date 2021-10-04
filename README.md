# slick-side-menu

## Description

<p align="center">
  <img src="https://user-images.githubusercontent.com/59962729/135835927-9c02449d-b309-4a2d-b0b2-d4005dd1b3c2.png">
</p>

A navigation drawer that has a boolean property that states if it's open or closed. When open, an overlay displays and a click on it hides the menu. 
## Installation
```bash
npm i @slickteam/slick-side-menu
```

## Usage

- **Html vanilla**

```html
<script type="module">
  import '@slickteam/slick-side-menu';
</script>

<slick-side-menu></slick-side-menu>
```

- **Vue.js**

```html
<template>
    <slick-side-menu
        :avatar="image"
    ></slick-side-menu>
</template>

<script>
import '@slickteam/slick-side-menu';
import image from './path/to/image/file'

export default {
  name: 'TestPage', 
  data() {
      return {
          image: image,
      }
  },
}
</script>

<style scoped>
/* Put CSS */
</style>

```

### Template

``` html
    <slick-side-menu
      open
      title="Menu title"
      user
      username="Michel Laboule"
      avatar="importImageHere"
      items="[]"
      color="#FFF"
      background="#f97316"
    ></slick-side-menu>
```
### Properties

Name                | Type               | Description
---                 | ---                | ---
`open`              | Boolean            | Shows the menu when true
`title`             | String             | Define text content of the menu title
`user`              | Boolean            | Shows the user section when true
`username`          | String             | Define user section name
`avatar`            | File               | The user section avatar's image
`items`             | Array              | An array of items that defines the menu. Structure must be => [ title = 'My title', to = '/MyHrefLink', icon = 'should be filled with the "d" property of a path tag from a svg tag']
`color`             | String             | Hex color
`background`        | String             | Hex color

### Events

Name            | Description
---             | ---
`slick-logout`  | The event emitted when the logout button is clicked in the user section.

## Development

### Demoing with Storybook

To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```
