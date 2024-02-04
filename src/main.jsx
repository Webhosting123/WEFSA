import React from "react";
import HomePage from "./components/home/home";
import GoTop from "./components/gototop/gototop";
import Whatsapp from "./components/whatsapp/whatsapp";

export default function Main() {
  return (
    <section>
      <Whatsapp />
      <GoTop />
      <HomePage />
    </section>
  );
}
