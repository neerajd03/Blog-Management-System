const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    category: { type: String, required: true, enum: ['technology', 'health', 'lifestyle', 'education', 'entertainment'] },
    content: { type: String, default: '' },
    summary: { type: String, required: true },
    tags: [{ type: String }],
    status: { type: String, required: true, enum: ['draft', 'published', 'archived'], default: 'draft' },
    featuredImage: { type: String },
    views: { type: Number, default: 0 },
    seoTitle: { type: String },
    seoDescription: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
