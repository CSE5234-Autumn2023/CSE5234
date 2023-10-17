# Project Overview
This is an enterprise web project.

# NOTE
- For post requests when sending a json with order items etc, send it in the request body.
- If you are only sending one word in the request params for example to search for an item id or name, just use a query string.
  You can see examples of how to use each in the api already.
- Also downloading and using Postman is a really easy way to test all of these requests before we start using them with the frontend,
  if you need help just text and I can send some pictures on how to use it.

# Things to do
- Fix API URLs to match lab documentation
- Create a Microservice with Web APIs that manages inventory of items that your company sells.
  - Refactor the presentation tier from the previous lab to use the inventory-management
    service to obtain and display items available for sale

 Nick
- Update JSON mock products in api to include inventory information such as quantity in inventory rather than quantity in cart
- Create a microservice with Web APIs that will handle and process customer order. The
requirements are
  - The order-processing microservice will interact with inventory-management service to
    check if the quantity requested by the customer is available to sell. If enough quantity
    exists in the warehouse, the order-processing microservice will return a valid
    confirmation number. If any item is not available in sufficient quantity, an error code
    will be returned to the caller.
  - OPTIONAL – return available quantity to presentation tier, so that it can prompt the user
  accordingly, and give them a choice to select fewer items.
- At the end of this lab, there should be nothing hardcoded in the presentation tier.
 

Paul
- ~~Update presentation tier order state to better store cart data~~
- Create a Microservice with Web APIs that manages inventory of items that your company sells.
  - ~~The inventory-management microservice will support a GET method which will return all
    the items available in the inventory (warehouse). This API will return data in JSON
    format. The available items can be hard coded within the microservice.~~
  - ~~The microservice will support a GET method which will return all the items available in
    the inventory (warehouse) for a given item Id and/or name, in JSON format~~
- Create a microservice with Web APIs that will handle and process customer order. The
requirements are
  - ~~The order-processing microservice will support a POST method which will accept a
    customer order in JSON format. The order will contain list of items, payment details, and
    requested shipping information. ALL DONE EXCEPT NEED TO INCLUDE PAYMENT DETAILS AND SHIPPING.
    /postOrder ALREADY ACCEPTS A LIST OF ITEMS~~
