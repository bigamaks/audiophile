import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    price: v.number(),
    description: v.string(),
    image: v.string(),
    category: v.string(),
    isNew: v.optional(v.boolean()), // Added optional fields
    features: v.optional(v.string()),
    inTheBox: v.optional(v.array(v.object({
      quantity: v.number(),
      item: v.string()
    }))),
    createdAt: v.number(), 
  })
  .index("by_category", ["category"]) 
});