import Head from "next/head";

export default function ChatPage() {
  return (
    <>
      <Head>
        <script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          async
          type="text/javascript"
        ></script>
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-pink-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-pink-600">
          Talk to Your AI Girlfriend 💬🎤
        </h1>
        <div className="w-full max-w-2xl">
          <elevenlabs-convai agent-id="agent_01jyp6xnr8e7rrkdw5khw7fev2"></elevenlabs-convai>
        </div>
      </main>
    </>
  );
}
