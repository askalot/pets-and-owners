# What is demonstrated

* Setup greenfield project with `create-react-app` & `react-router-dom`
  If this we ere a more complex project, I'd have set it up with `Next.js` instead
* Routing with React Router
* Base (render only) components - these would belong in seperate repo with Storybook if the base components would be shared
* Page (composite) components
* SASS, and CSS Custom Properties for DRY-er CSS
* React Context for shared state management:
  This project didn't need a more complex solution like Redux,
  and I found React Context to be a simpler solution for sharing state
  without too much prop drill-down.
* Testing with (React) Testing Library
  The tests cover end-user, and developers who'd consume the components.

  Thereby being more resilient to changes and less likely to:
  * generate false positives or
  * generate false negatives
  * break because internals of component changed
* Keeping secrets in `.env` - for practicality the value is already set, usually I'd only include a sample and instructions on how to setup secrets
* Installing, importing and wrapping a third-party library (FontAwesome) in custom-component so as to make it easier to replace without a lot of code change
* Accessibility: the code is semantic, prefering to use simpler HTML to solve the problem first, and has a Lighthouse score of 100% or both screens (this is not a great measure, but one that is demonstrable), the colours used are all also tested for acceptable WCAG 2.0 AA contrast ratios
* A keen eye for design with simple components that do one thing well, while looking good.
* Alternate ways of organising code:
  * Styles in component directory (this could be in a seperate styles dir alternatively)
  * Tests in a `__tests__` directory (this could be in the same dir as component, which means if component is removed this file woudln't be missed)

# What needs more research

* React Context testing 
* React Router testing
* Splitting services (API consumers) into seperate module


# What additional features could be addead

* E2E (end-to-end) tests with Cypress (including Routes)
* Static testing with ESLint, Prettier, TypeScript
* Snapshot tests with Jest
* Use Storybook
* Use React Hooks
