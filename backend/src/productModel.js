import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("product", ProductSchema);

export default Product;
