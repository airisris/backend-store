// import the Movie model
const Product = require("../models/product");

async function getProducts(category) {
  // create an empty container for filter
  let filter = {};
  // if category exists, then only add it into the filter container
  if (category) {
    filter.category = category;
  }

  // load the products data from MongoDB
  return await Product.find(filter).sort({ _id: -1 });
}

async function getProduct(id) {
  // load the product data based on id
  return await Product.findById(id);
}

async function addProduct(name, description, price, category) {
  // create new product
  const newProduct = new Product({
    name, 
    description, 
    price, 
    category,
  });
  // save the new product into MongoDB
  await newProduct.save(); // clicking the save button
  return newProduct;
}

async function updateProduct(id, name, description, price, category) {
  return await Product.findByIdAndUpdate(
    id,
    {
      name: name,
      description: description,
      price: price,
      category: category,
    },
    {
      new: true,
    }
  );
}

async function deleteProduct(id) {
  // delete the product
  return await Product.findByIdAndDelete(id);
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
