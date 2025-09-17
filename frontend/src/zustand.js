import axios from "axios";
import { create } from "zustand";

const ProductStore = create((set) => ({
  product: [],
  setProduct: (product) => set({ product }),

  createProduct: async (newProduct) => {
    const res = await axios.post("/api/product", newProduct, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    set((state) => ({ product: [...state.product, res.data] }));
    return { success: true, message: "Created Successfully" };
  },

  fetchProduct: async () => {
    const res = await axios.get("/api/product");
    set({ product: res.data });
  },

  DeleteProduct: async (pid) => {
    await axios.delete(`/api/product/${pid}`);
    set((state) => ({
      product: state.product.filter((product) => product._id !== pid),
    }));
    return { success: true, message: "Deleted Successfully" };
  },

  UpdateProduct: async (p_id, uProduct) => {
    const res = await axios.put(`/api/product/${p_id}`, uProduct, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    set((state) => ({
      product: state.product.map((product) =>
        product._id === p_id ? res.data : product,
      ),
    }));
    return { success: true, message: "Updated Successfully" };
  },
}));

export default ProductStore;
