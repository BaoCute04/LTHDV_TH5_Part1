const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Product Supplier API",
            version: "1.0.0",
            description: "API quản lý sản phẩm và nhà cung cấp"
        },
        servers: [{
            url: "http://localhost:3000/api"
        }]
    },
    apis: ["./routes/*.js"], // nơi chứa mô tả API bằng JSDoc
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };