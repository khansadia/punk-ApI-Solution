# punk-ApI-Solution

# Exercise Punk API solution with React

**This solution not just only contain an actual solution proposal but also information about Sass, asynchronous JS, state management, hooks and react specific routing**

<details>
<summary>Table of content</summary>

- [Sass](#sass)

  - [Sass or SCSS?](#sass-or-scss)
  - [Nesting](#nesting)
  - [Variables](#variables)
  - [@use](#use)
    - [Basic Syntax](#basic-syntax)
    - [Namespace and Scoping](#namespace-and-scoping)
  - [@forward](#forward)
  - [@mixin and @include](#mixin-and-include)

  </details>

## Sass

Sass _( Syntactically Awesome Stylesheets )_ is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It adds functionality to CSS, making stylesheets more maintainable and easier to write. SassScript is the scripting language itself, and it comes in two syntax formats: Sass and SCSS.

When using vite.js, there are no extra configurations we have to do in order to use Sass, or other pre-processors, like less. It has already built-in support for it. We do however need the install the pre-processer itself.

[Official Sass Docs](https://sass-lang.com/)

```bash
# .scss and .sass
npm install -D sass
```

[Back to top](#exercise-punk-api-solution-with-react)

### Sass or SCSS?

- **Sass Syntax:** Uses indentation and line breaks instead of curly braces and semicolons.

```scss
body
  font:
    family: Arial, sans-serif
    size: 16px

```

- **SCSS Syntax:** Uses the same syntax as traditional CSS with curly braces and semicolons.

```scss
body {
  font: {
    family: Arial, sans-serif;
    size: 16px;
  }
}
```

**Key differences**

1. Syntax

The primary difference lies in the syntax. Sass uses indentation and line breaks for nesting and separation, while SCSS uses traditional CSS syntax with curly braces and semicolons.

2. Terminators

`Sass` uses indentation to indicate nesting, and there are no semicolons or braces to terminate statements or blocks. `SCSS` uses semicolons to terminate statements and curly braces to define blocks, just like in `CSS`.

3. Ease of Adoption

`SCSS` is more widely adopted and used, especially in larger projects or teams where familiarity with `CSS` is a significant consideration.
`Sass` syntax might be preferred by some developers who appreciate its brevity and cleaner appearance, but it has a steeper learning curve.

4. File extensions

   - `Sass` files have the `.sass` extension.
   - `SCSS` files have the `.scss` extension.

5. Compatibility

`SCSS` is more compatible with existing `CSS` syntax. You can take a valid `CSS` file and change the file extension to `.scss` to start using `SCSS` immediately. `Sass` syntax requires a more significant departure from `CSS`, and existing `CSS` files may need more modifications to be valid `Sass`.

[Back to top](#exercise-punk-api-solution-with-react)

### Nesting

Sass nesting is a feature that allows you to write more concise and readable styles by nesting selectors within one another.

Her is an example:

```scss
.header {
  background-color: blue;
  padding-block: 0.5rem;

  h1 {
    color: black;
    text-align: center;
  }

  .navbar {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 1rem;

    .link {
      color: white;
      cursor: pointer;
    }
  }
```

When this is compiled to CSS it will look like this:

```css
.header {
  background-color: blue;
  padding-block: 0.5rem;
}

.header h1 {
  color: black;
  text-align: center;
}

.header .navbar {
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.header .navbar .link {
  color: white;
  cursor: pointer;
}
```

Sass nesting creates a visual hierarchy that matches your HTML structure. This can make your styles more organized and easier to understand.

Just remember, while nesting can be convenient, it's essential to avoid excessive nesting, also known as deep nesting. Deep nesting can lead to overly specific and hard-to-maintain styles. It's generally recommended to keep nesting levels shallow to maintain clarity.

```scss
nav {
  ul {
    li {
      a {
        // ...styles...
      }
    }
  }
}
```

[Back to top](#exercise-punk-api-solution-with-react)

### Variables

Sass variables are used to store and reuse values throughout your stylesheets. They make it easy to manage and update consistent values, such as colors, font sizes, and spacing, in a central location.

```scss
$primary-color: #3498db;
$font-size: 16px;

body {
  background-color: $primary-color;
  font-size: $font-size;
}
```

Sass variables have global scope by default, meaning you can access them from anywhere in your stylesheet. However, if you define a variable within a nested block, it will have a more limited scope.

```scss
$primary-color: #3498db;

body {
  $font-size: 16px;
  font-size: $font-size; // Valid, $font-size is defined in the same scope

  a {
    color: $primary-color; // Valid, $primary-color is accessible in nested scopes
  }
}

p {
  font-size: $font-size; // Invalid, $font-size is not accessible outside the body block
}
```

**Benefits of Sass Variables**

1. Consistency: Easily maintain consistent values across your stylesheets.

2. Readability: Provide meaningful names for values, making your code more readable.

3. Maintenance: Update a value in a single place, and it reflects throughout the stylesheet.

4. Reuse: Use variables to store and reuse complex values, such as gradients or multiple box-shadow values.

[Back to top](#exercise-punk-api-solution-with-react)

### @use

The `@use` rule in Sass is a modern replacement for the older `@import` rule. It introduces several improvements, including better scoping, namespace management, and avoidance of global styles pollution.

#### Basic Syntax

```scss
// SCSS syntax
@use "path/to/module";

// SCSS syntax with alias
@use "path/to/module" as alias;
```

[Back to top](#exercise-punk-api-solution-with-react)

#### Namespace and Scoping

One of the key features of `@use` is improved scoping and namespace management. Each module included with `@use` has its own namespace, and variables, mixins, and functions are not automatically globally available.

_\_variables.scss_

```css
$primary-color: #3498db;
```

_main.scss_

```scss
@use "variables";

body {
  background-color: variables.$primary-color; // Accessing variable with the namespace
}
```

**or**

_main.scss_

```scss
@use "variables" as *;

body {
  background-color: $primary-color; // Accessing variable without the namespace using asterix.
}
```

In this example, the variable $primary-color is accessed with the namespace variables. This prevents potential naming conflicts with variables from other modules. If you are sure on your namings then you could use the asterix to avoid the need of the namespace variable.

If we would like to use the variables inside the `variables.css` in other files, we can easily just use the `@use` keyword in those places as well. Sass will prevent double inclusion by default and the actual variable will only ever be injected ones in your compiled CSS-file in the end.

[Back to top](#exercise-punk-api-solution-with-react)

### @forward

[Back to top](#exercise-punk-api-solution-with-react)

### @mixin and @include

[Back to top](#exercise-punk-api-solution-with-react)
