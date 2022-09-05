import { ProductsProvider } from "src/Context/ContextProducts";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <ProductsProvider>
      <Component {...pageProps}/>
    </ProductsProvider>
    )
}

export default MyApp;
