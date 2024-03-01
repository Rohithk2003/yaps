import { getTVSubtitles } from '../../../../lib/opensubtitles'
export default async function handler(req, res) {
  const { id,episode,season } = req.query
  try {
    const url = getTVSubtitles(id,episode,season)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': '',
        'Api-Key': 'T9bkK4GY38DZsKykArc5ybmjVCkzDHSj',
      },
    })
    const data = await response.json()
    res.status(200).json({
      results: data.data,
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
