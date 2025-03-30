const Blog = require('../models/blogModel');
const { generateAIContent } = require('../utils/openaiService');

exports.createBlog = async (req, res) => {
    try {
        const { title, author, category, summary, content } = req.body;
        const slug = title.toLowerCase().replace(/ /g, '-');
        
        const blog = new Blog({ title, slug, author, category, summary, content });
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Error creating blog' });
    }
};

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blogs' });
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ error: 'Blog not found' });
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blog' });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!blog) return res.status(404).json({ error: 'Blog not found' });
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Error updating blog' });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) return res.status(404).json({ error: 'Blog not found' });
        res.json({ message: 'Blog deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting blog' });
    }
};

exports.generateContent = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ error: 'Blog not found' });

        const { content, seoTitle, seoDescription } = await generateAIContent(blog.title, blog.category);

        blog.content = content;
        blog.seoTitle = seoTitle;
        blog.seoDescription = seoDescription;
        await blog.save();

        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Error generating content' });
    }
};
