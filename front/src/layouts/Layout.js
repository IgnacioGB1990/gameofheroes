import React from "react";
import { Header } from "./Header";
import { useUser } from "../../lib/auth.api";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  const user = useUser();
  return (
    <>
      {/* {user && <h3>Hi {user.username}, are you ready for another match?</h3>} */}
      <Header />
      <section className="container">{children}</section>
      <Footer />
    </>
  );
};
