export const config = {
    runtime: 'nodejs',
}

export default async function handler(req, res) {
    const query = req.query.q || 'technology'

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
    )}&language=en&pageSize=20`

    try {
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': process.env.NEWS_API_KEY,
            },
        })

        if (!response.ok) {
            const text = await response.text()
            return res.status(response.status).json({ error: text })
        }

        const data = await response.json()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            error: 'Server error',
            message: error.message,
        })
    }
}
