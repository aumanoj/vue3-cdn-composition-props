/* Inside parent component calling child component with props */

const GreetingParent = {
  props: {
    message: String,
  },
  template: `
    <div class="pl-2">
      <p>Parent Component</p>
      <h1>{{ message }}</h1>
      <greeting-child :greeting="message"></greeting-child>
    </div>
  `,
}

export default GreetingParent

  