/* Grand Child component */
const GreetingGrandChild = {
  props: {
    greeting: String,
    required: false
  },
  template: `
    <div  class="pl-2">
      <p>Grand Child Component</p>
      <h1>{{ greeting }}</h1>
    </div>
  `,
}
    
export default GreetingGrandChild