TWALUMBA MWEEMBA 
PARTNER: AGNESS KALABA

PAGE DESCRIPTIONS
index.html is the home page with basic info and linked pages.
services.html highlights possible services to be considered for a sample website
contact.html provides a contact form for users to fill if they wanted to reach me.

Selectors:
   Class Selectors (`.navbar`, `.logo`, `.nav-links`, etc.): These are used to style specific elements in the HTML with classes.
   Element Selectors (`header`, `footer`, `img`, etc.): Directly styles HTML elements like `header`, `footer`, etc.
  

Flexbox and Grid Layout:
   Flexbox:
     Used in the `.navbar` and `.nav-links` for layout alignment and spacing.
      The `display: flex;` rule is used to lay out items in a flexible container.
     `justify-content: space-between;` ensures that elements (e.g., logo and nav links) are spaced out.
     `align-items: center;` centers items vertically.
   Grid:
      The `.services-container` and `.content` sections use CSS Grid to create responsive layouts.
      `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` creates responsive columns for `.services-container`, adapting the layout based on the screen size.
      In `.content`, `grid-template-columns: repeat(2, 1fr);` creates a 2-column layout that switches to a 1-column layout on smaller screens via media queries.

Media Queries:
   Purpose:Media queries make the design responsive, adjusting the layout and styling based on the screen width.
   Breakpoints:
     For large tablets and laptops (`max-width: 1024px`), the `.content` grid switches to a single column.
     For tablets (`max-width: 768px`), the `.nav-links` stack vertically by changing `flex-direction` to `column`.
     For mobile phones (`max-width: 480px`), the navbar elements stack vertically, and the `.logo` gets a margin below it for spacing.
  
Animations:
   Keyframes:A `@keyframes` animation called `fadeIn` is applied to elements like `.box` in the `.content` section. It transitions the element from opacity 0 to 1 while moving it up from 20px to 0px.
   Transition: Smooth transitions are applied to interactive elements (e.g., navbar links, form inputs, and buttons) to change properties like `background-color`, `transform`, and `box-shadow` with a timing function.

   The submit button (`.submit-btn`) has a hover effect that changes its background color and applies a slight scaling effect (`transform: scale(1.05)`) for interactivity.

Focus Effects:
   The form input and textarea fields get a focus animation that changes their border color and applies a box shadow when clicked, enhancing the form's accessibility and user interaction.

Summary of Features Used:
 Selectors (Class, Element, Pseudo-classes)
Flexbox for navbar and navigation links alignment
CSS Grid for responsive container layouts
Media Queries  for adapting the layout to different screen sizes
CSS Animations with `@keyframes` and `transition` for smooth effects
as at 10th apil 205, i have added a scripts file, a real time clock on the home page, a change theme button, some faq questions and answers and a list of users fetched from an API.