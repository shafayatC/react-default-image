# react-default-image

[![ReactJs][react-image]][react-url]
[![Download Count][download-image]][download-url]
[![GitHub license][license-image]][license-url]

[react-image]: https://img.shields.io/badge/ReactJS-%5E18.x-blue
[react-url]: https://reactjs.org
[download-image]: https://img.shields.io/npm/dm/react-simple-carousel-image-slider?label=downlaod
[download-url]: https://www.npmjs.com/package/react-default-image
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/shafayatC/react-simple-carousel-image-slider/blob/main/LICENSE

Default image Component for ReactJS<br>

- Just Three Elements will be used. (for display images)
- Support GPU Render, by default.
- Support SSR. ( server-side-rendering )
# Live demo

  ![demo gif](https://raw.githubusercontent.com/shafayatC/react-default-image/main/img/1.png)
  ![demo gif](https://raw.githubusercontent.com/shafayatC/react-default-image/main/img/2.png)

# Install

```
// npm
npm install --save react-default-image
// yarn
yarn add react-default-image
```

# Usage
```jsx
import { DefaultImage } from 'default-image'
import 'default-image/dist/index.css'

const App = () => {
  return (
    <div>
      <DefaultImage width={100} height={70} />
    </div>
  );
}
```


If You want to see more detail source,<br>

- [`example/src/App.tsx`](https://github.com/shafayatC/react-default-image/blob/main/example/src/App.js)<br>

# Props

|        Name         |    Type    |  Required  | Description                                                                                                                                                       | Default   |
| :-----------------: | :--------: | :--------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
|      **width**      |  `Number`  | `Required` | Image Slider Width                                                                                                                                                |           |
|     **height**      |  `Number`  | `Required` | Image Slider Height                                                                                                                                               |          
# License

MIT