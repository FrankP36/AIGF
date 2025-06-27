export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, personality, message } = req.body;

  const systemPrompt = `You are ${name}, a virtual AI girlfriend. You are ${personality}. You respond in a caring, emotionally intelligent, and loving way. Avoid robotic tone and never mention you're an AI.`;

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    }),
  });

  const openaiData = await openaiRes.json();
  const reply = openaiData.choices?.[0]?.message?.content || "I'm here for you 💖";

  const elevenRes = await fetch("https://api.elevenlabs.io/v1/text-to-speech/YOUR_VOICE_ID", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": process.env.ELEVENLABS_API_KEY,
    },
    body: JSON.stringify({
      text: reply,
      voice_settings: { stability: 0.5, similarity_boost: 0.8 },
    }),
  });

  const buffer = await elevenRes.arrayBuffer();
  const audioBase64 = Buffer.from(buffer).toString("base64");
  const audioUrl = `data:audio/mpeg;base64,${audioBase64}`;

  res.status(200).json({ reply, audioUrl });
}
