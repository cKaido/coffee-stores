import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>Footer</footer>
    </div>
  );
}

export default MyApp;
