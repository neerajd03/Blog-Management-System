const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // Ensure this key is set in your .env file
});

exports.generateAIContent = async (title, category) => {
    try {
        const prompt = `Write a blog about "${title}" in the ${category} category. Include an SEO title and a meta description.`;

        const response = await openai.chat.completions.create({
            model: 'gpt-4', // Ensure you're using the correct model
            messages: [{ role: "system", content: prompt }],
            max_tokens: 500
        });

        return {
            content: response.choices[0].message.content.trim(),
            seoTitle: `SEO title for ${title}`,
            seoDescription: `SEO description for ${title}`
        };
    } catch (error) {
        console.error("OpenAI Error:", error);
        return {
            content: "Content generation failed.",
            seoTitle: "SEO title not available",
            seoDescription: "SEO description not available"
        };
    }
};
