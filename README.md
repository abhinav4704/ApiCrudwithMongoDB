Product Management API
A RESTful API for managing products, built with Express and MongoDB. This API provides endpoints to create, read, update, and delete products.

API Endpoints
GET /api/products
Fetch all products.

Response:

200 OK - Array of products
GET /api/products/
Fetch a product by its ID.

Parameters:

id (path parameter) - The ID of the product to fetch
Response:

200 OK - Product object
404 Not Found - If the product is not found
POST /api/products
Insert a new product.
Response:

201 Created - Newly created product object
500 Internal Server Error - If there is a validation error



PUT /api/products/
Update an existing product.

Parameters:

id (path parameter) - The ID of the product to update
Request Body:
Response:

200 OK - Updated product object
404 Not Found - If the product is not found
500 Internal Server Error - If there is a validation error
DELETE /api/products/
Delete a product.

Parameters:

id (path parameter) - The ID of the product to delete
Response:

200 OK - Success message
404 Not Found - If the product is not found
500 Internal Server Error - If an error occurs
