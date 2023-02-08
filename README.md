# DashNex test project for candidates

This project is a small shop with three pages and backend API.

Fork this project, update it according to the test requirements and then submit a Pull Request back to the initial repository.

## Your task would be (common for Full-stack and Frontend developers) to implement:
1. Fetch the list of available products from the API and show it on 'products-list' page. Each product should contain: image, title, price. No pagination needed.
2. Fetch the information about the single product and show it on the 'product' page when the product is chosen.

* the URL should contain product ID
* each product should contain: image, title, description, price.
* there should be an ability to add product to the card (the number of products to add should be defined by user)

3. Use backend API to add/remove/view/update products in the cart and show them on the 'cart' page.

- the page should show all products added to the cart with images, number of products, price per product, total cost.
- user should be able update the number of products or remove them

## Extra tasks for Frontend Developer role:
4. Write at least one more unit test for every page.
5. Write e2e tests to test adding product to the cart from the `products-list` page and viewing the cart content.
6. Add SSR support with Angular Universal.

## Requirements:
1. The UI is not very important, you can use any UI library or write styles by yourself (SCSS is preferred). At the same time pages shouldn't look broken.
2. The content of the cart should be saved to the backend and loaded from the backend every time shop is opened
3. The transition between pages should be without page reload.
4. `product-list` and `product` pages should contain the link to the `cart` page and display the number of the positions in the cart and the total cost.

## Useful commands

- Install all the dependencies by `npm i`
- To start the dev server run `ng serve`
- To run tests run `ng test` or `ng e2e`
- To build the project run `ng build`