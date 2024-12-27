// Lecture 13

# Types of test a developer can do: - Unit Testing - Integration Testing - End to End Testing (e2e)

# Unit Testing is testing of a particular component.

# Integration testing is testing the integration of change in multiple components as part of an action.

# End to end testing involves testing right from when the user lands on the page till the user exits the page.

# React Testing Library is built on top of DOM esting Library. React Testing Library uses Jest behind the scenes and Jest uses Babel behind the scenes.

# Setting up testing in our app:

    # Install React Testing Library
    # Installed Jest
    # Installed Babel dependencies
    # Configure Babel
    # COnfigure parcel file to disable default babel transiplation
    # Jest Configuration (npx jest --init)
    # Install jsdom

# Files that will be considered for test

    # Files in dunder __tests__
    # eg1. Header.text.js
    # eg2. Header.test.ts
    # eg3. Header.spec.js/ts
    # eg4. Header.spect.js/ts

<!-- babel.config.js file code -
module.exports = { presets: [["@babel/preset-env", { targets: { node: "current" } }]], }; -->
