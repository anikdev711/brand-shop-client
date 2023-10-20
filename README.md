Website name: AutoMotorz Wizdom
Website category: Automobile [category-2]
Website live link (firebase): 
Website alternative live link (netlify):
Website server side link (if requires):

Website features: 

The category of the website is Automotive, which is category 2. React Router, Firebase authentication system, Node, Express, and MongoDB databases are used.
* There is a navbar includes logo, website name, home, add product, my cart and login button. The user can toggle between login and registration when clicking the login button. When users login or register, their profile photo, name, and logout are shown in the navbar. When user clicks on logout button then log out occurs. The footer includes website name and logo and social links. These are common for all pages.
* The home page has a total of six sections. Navbar, banner, brands, why choose us section, app section, and footer There are a total of six famous automobile brands: Toyota, Ford, BMW, Mercedes-Benz, Tesla, and Honda. When the user clicks on a brand card, it will redirect to the brand details page.
* The brand details page has an advertisement slider and products. When the user clicks on the product details button, it will redirect to the product details route. It is a private route. The product details page has details of the product and an add-to cart button. When the add to cart button is clicked, this product data will be stored in the database.
* My cart is also a private route. On this page, the user can see all of his cart products. There is a delete button by which products will be deleted from the database and my cart.
* Adding products is a private route. On this page, users can add products after logging in. There is a form of product information. These details are stored in a database and displayed on the brand details page according to the brand name.
* When the user clicks on the update button for product details, then it will redirect to the update product route, and the user can see the default information about the product and can change the information as well.
* The most interesting thing is that there is a dark mode button on the home page. When the user clicks, it will toggle between dark and light modes. This is just for the home page.
* A Firebase authentication system has been implemented on this website. Users have to register to visit the private route pages. Email passwords and Google Sign-in-based authentication have been implemented on this website. For email password authentication, the password must have more than six characters, at least one capital letter, and at least one special character. If the email and password are not matched while logging in, then it will display a login error.