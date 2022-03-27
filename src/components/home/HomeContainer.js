import React from 'react'
import Header from "../Header";
import Footer from "../Footer";
import Search from "./Search";
import Cards from "./Cards"


export default function Home() {
  return (
    <div>
      Home Page
      <Header />
      <Search />
      <Cards />
      <Footer />
    </div>
  )
}
