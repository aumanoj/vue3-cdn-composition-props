/* includes components */
import Counter from './components/Counter.js'
import GreetingParent from './components/GreetingParent.js'
import GreetingChild from './components/GreetingChild.js'
import GreetingGrandChild from './components/GreetingGrandChild.js'
/* init app  */
const app = Vue.createApp({
    setup() {
      const greetingMessage = 'Greeting from parent app component'
      return {
        greetingMessage,
      }
    }
  })
  
  /* Register component here */
  app.component('counter', Counter)
  app.component('greeting-parent', GreetingParent)
  app.component('greeting-child', GreetingChild)
  app.component('greeting-grand-child', GreetingGrandChild)

  app.mount('#app')