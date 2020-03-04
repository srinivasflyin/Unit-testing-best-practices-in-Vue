# Unit testing best practices in vue with Type Script


## Unit Test Your First Vue.js Component

In Build Your First Vue.js Component i made a sample vue project which renders the list of hotels and filtering of hotels. We’ve covered many fundamental concepts to help you create more complex Vue.js components. Yet, there’s one crucial point you need to build bulletproof components you can use in production: unit testing.

## Why unit test a component?
Unit tests are a crucial part of continuous integration. They make your code a lot more reliable by focusing on small, isolated entities and making sure they always behave as expected. You can confidently iterate on your project without fear of breaking things.

Unit tests aren’t limited to scripts. Anything we can test in isolation is unit testable, as long as you respect a few good practices like single-responsibility, predictability and loose coupling.

As reusable entities of our app, Vue.js components are great candidates for unit testing. We’ll test the one we made as a single unit with various inputs and user interactions, and make sure it always behaves as we expect.

## Before we start

Vue CLI 3 was released, and Vue Test Utils, the official Vue.js unit testing utility library, has matured to beta version. In the first tutorial, we used webpack-simple, a prototyping template that doesn’t include testing features. For all those reasons, the simplest thing to do is to wipe the slate clean and migrate the project from the tutorial to a more recent Vue.js install.

Note: make sure you install Node.js before going further.

`
npm install
`

Then, run the project:

`
npm run serve
`
## Vue Test Utils & Jest

In this tutorial , we’ll use Vue Test Utils, the official Vue.js testing toolkit, along with Jest, a JavaScript test runner backed by Facebook.

Vue Test Utils lets you mount Vue components in isolation and simulate user interactions. It has all the necessary utilities to test single-file components, including those using Vue Router or Vuex.

Jest is a full-featured test runner that requires almost no configuration. It also provides a built-in assertion library.

Using Vue CLI 3 (which I used to generate the boilerplate) allows you to pick your favorite test runner, and sets it up for you. If you want to use another test runner (like Mocha), install Vue CLI 3 and generate your own starter project. Then, you can migrate the source files from my boilerplate right in it.


## What should we test?

In this tutorial we focus on the Vue components, events by using the @emit. 

This is also the official recommendation from the Vue Test Utils guides. Therefore, we’ll only test what we can access from the outside of the component:
user interactions
props changes
We won’t directly test computed properties, methods or hooks. These will be implicitly tested by testing the public interface.

Setting up a spec file

Like with regular tests, each component has a spec file which describes all tests we want to run.

Specs are JavaScript files. By convention, they have the same name as the components they’re testing, plus a .spec suffix.

Go ahead and create a test/unit/list.spec.ts file.

          import { shallowMount } from '@vue/test-utils'
          import List from '../../src/components/list.vue'
          import hotelsData from '../../src/shared/hotelsDummyData'
          describe('testing list component', () => {
              let wrapper;
              beforeEach(()=>{
                  wrapper = shallowMount(List, {
                      propsData: {
                          items: hotelsData
                      }
                  })
              })

              it('should register list component', () => {
                  expect(wrapper.props().items.length).toBe(17)
              })
          })
Here we are passing props data as the array of hotels which will be taking from the json data defined in the hotelsDummyData.
The list component takes the props data and iterates using v-for built-in Vue directive to display the hotes.
ShallowMount is used to create  a Wrapper that contains the mounted and rendered Vue component, but with stubbed child components.
Refer the official doc https://vue-test-utils.vuejs.org/api/#shallowmount.
