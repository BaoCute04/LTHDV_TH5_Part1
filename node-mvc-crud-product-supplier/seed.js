const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected for seeding..."))
    .catch(err => console.log(err));

async function seed() {
    try {
        // Xóa dữ liệu cũ
        await Supplier.deleteMany({});
        await Product.deleteMany({});

        // Tạo supplier mẫu
        const suppliers = await Supplier.insertMany([
            { name: "Supplier A", address: "123 Street, Hanoi", phone: "0901112233" },
            { name: "Supplier B", address: "456 Road, HCM", phone: "0902223344" },
            { name: "Supplier C", address: "789 Avenue, Da Nang", phone: "0903334455" }
        ]);

        console.log("Suppliers seeded:", suppliers);

        // Tạo product mẫu (liên kết với supplier)
        const products = await Product.insertMany([
            { name: "iPhone 14", price: 20000, quantity: 10, supplierId: suppliers[0]._id },
            { name: "Laptop Dell XPS", price: 30000, quantity: 5, supplierId: suppliers[1]._id },
            { name: "AirPods Pro", price: 5000, quantity: 20, supplierId: suppliers[0]._id },
            { name: "Samsung Galaxy S23", price: 18000, quantity: 8, supplierId: suppliers[2]._id }
        ]);

        console.log("Products seeded:", products);
    } catch (err) {
        console.error("Seeding error:", err);
    } finally {
        mongoose.connection.close();
    }
}

seed();