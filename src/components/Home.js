import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Cards from "./Cards"


export default function Home() {
  return (
    <div>
      <Header />
      <Search />
      <Cards />
      <Footer />
    </div>
  )
}
