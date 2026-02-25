import "@/styles/globals.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

import styles from "../styles/Home.module.scss";
import fonts from "@/styles/fonts";
import { ToastContainer } from "react-toastify";
import Layout from "@/components/layout/layout";
import { CartProvider } from "@/context/CartContext";
import FloatingCartButton from "@/components/cart/FloatingCartButton";
import CartDrawer from "@/components/cart/CartDrawer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1100,
      once: false,
    });
  }, []);

  useEffect(() => {
    Router.events.on("routeChangeStart", (...params) => {
      NProgress.start(params);
    });
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);
    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []);

  return (
    <main className={`${styles.main}`}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer position="bottom-right" />
        </Layout>
        <FloatingCartButton />
        <CartDrawer />
      </CartProvider>
    </main>
  );
}
