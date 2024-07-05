import request from "supertest";
import app from "./index.js";
import { expect } from "chai";
import { db } from "./db.js";
import sinon from "sinon";

describe("GET /products", async () => {

    it("should respond with a valid array of products", async () => {
        
        const mockProducts = [
            { id: 1, product: "Product 1", quantity: 15 }, 
            { id: 2, product: "Product 2", quantity: 20 }
        ];

        //const queryStub = sinon.stub(db, "query");
        //queryStub.withArgs("SELECT * FROM list").resolves([mockProducts]);

        const res = await request(app).get("/products");

        expect(res.body).to.deep.equal(mockProducts);
        //queryStub.restore();
    });

});  


describe("POST /products", async () => {

    it("should insert a new product into the list", async () => {

        const newProduct = {
            product: "New Product",
            quantity: 15
        };

        const queryStub = sinon.stub(db, "query");

        queryStub.withArgs(
            "INSERT INTO list (product, quantity) VALUES (?, ?)",
            [newProduct.product, newProduct.quantity]
        ).resolves({ insertId: newProduct.id });

        const res = await request(app).post("/products").send(newProduct);

        expect(res.status).to.equal(201);
        expect(res.body).to.deep.equal({ product: newProduct.product, quantity: newProduct.quantity });
        queryStub.restore();
    });
});

describe("DELETE /products/:id", async () => {

    it("should delete an existing product from the list", async () => {
        
        const productIdToDelete = 100;

        const queryStub = sinon.stub(db, "query");

        queryStub.withArgs(
            "DELETE FROM list WHERE id = ?", 
            [productIdToDelete]
            ).resolves({ affectedRows: 1 }); 
        
        const res = await request(app).delete(`/products/${productIdToDelete}`);
        
        expect(res.status).to.equal(204);
        queryStub.restore();

    });
});





// Finaliza el proceso después de las pruebas
after(function () {
    process.exit(0); 
});