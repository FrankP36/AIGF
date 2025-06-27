import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.paypal.com/sdk/js?client-id=ATu5-pUyxPXu8w9MIcPrLRbBUsKnN7-rK3VThNv6fznsulCgvVdAWA8GSQK91Jlh-vstzkfabe-CooSK&currency=USD"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
