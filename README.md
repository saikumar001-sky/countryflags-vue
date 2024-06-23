# CountryFlags-vue
A Vue 3 component library built with Vite to display country flags by ISO 2 or ISO 3 codes. This library provides customizable flags with different sizes and an option to make the flags rounded.

## Installation

Use the package manager NPM to install package

```bash
npm i countryflags-vue
```

## Importing in main.js
Import the CountryFlags component and its styles in your main.js file:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import CountryFlags from 'countryflags-vue';
import 'countryflags-vue/dist/style.css';

const app = createApp(App);
app.component('country-flag', CountryFlags);
app.mount('#app');
```
## Using the Component
In your Vue components, use the country-flag component as follows:

```vue
 <div>
    <!-- Big rounded flag for India -->
    <country-flag country="IN" size="big" rounded></country-flag>

    <!-- Normal flag for the United States -->
    <country-flag country="USA" size="normal"></country-flag>

    <!-- Small rounded flag for the United Kingdom -->
    <country-flag country="GB" size="small" rounded></country-flag>
  </div>
```
## Props
The country-flag component accepts the following props:

#### country: String - ISO-2 or ISO-3 code of the country (e.g., "IN" for India, "USA" for the United States, "GB" for the United Kingdom).
#### size: String - Size of the flag. Available options are:
- big
- normal
- small
#### rounded: Boolean - If present, the flag will have rounded corners.
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
## 🚀 About Me
I'm a Vue js Frontend Developer...
🚀[GitHub Repository](https://github.com/saikumar001-sky/countryflags-vue)