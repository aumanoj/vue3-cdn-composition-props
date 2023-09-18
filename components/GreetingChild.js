/* Child component */
const GreetingChild = {
  props: {
    greeting: String,
  },
  template: `
    <div class="pl-2">
      <p>Child Component</p>
      <h1>{{ greeting }}</h1>
      <greeting-grand-child :greeting="greeting"></greeting-grand-child>
    </div>
  `,
};
export default GreetingChild