db.products.insertMany([
    {
        name: "Gaming Laptop",
        price: 75000,
        category: "electronics",
        stock: 15,
        discount: 10,
        tags: ["gaming", "laptop", "electronics"]
    },
    {
        name: "Smartphone",
        price: 25000,
        category: "electronics",
        stock: 8,
        discount: 15,
        tags: ["phone", "android", "electronics"]
    },
    {
        name: "Wireless Mouse",
        price: 800,
        category: "accessories",
        stock: 50,
        discount: 5,
        tags: ["mouse", "computer", "electronics"]
    },
    {
        name: "Mechanical Keyboard",
        price: 3500,
        category: "accessories",
        stock: 20,
        discount: 12,
        tags: ["keyboard", "gaming", "computer"]
    },
    {
        name: "LED Monitor",
        price: 12000,
        category: "electronics",
        stock: 5,
        discount: 18,
        tags: ["monitor", "display", "electronics"]
    },
    {
        name: "Office Chair",
        price: 6000,
        category: "furniture",
        stock: 0,
        discount: 20,
        tags: ["chair", "office", "furniture"]
    },
    {
        name: "Gaming Headset",
        price: 4500,
        category: "electronics",
        stock: 12,
        discount: 25,
        tags: ["gaming", "audio", "electronics"]
    }
])


db.orders.insertMany([
    {
        user: "Rahul Sharma",
        totalAmount: 80000,
        status: "delivered",
        orderDate: new Date("2025-02-10")
    },
    {
        user: "Priya Singh",
        totalAmount: 3000,
        status: "pending",
        orderDate: new Date("2025-03-01")
    },
    {
        user: "Amit Verma",
        totalAmount: 15000,
        status: "cancelled",
        orderDate: new Date("2024-12-15")
    },
    {
        user: "Rahul Sharma",
        totalAmount: 4500,
        status: "delivered",
        orderDate: new Date("2025-01-20")
    },
    {
        user: "Sneha Gupta",
        totalAmount: 1200,
        status: "pending",
        orderDate: new Date("2025-03-05")
    }
])