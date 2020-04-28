import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
  //   <html>
  // <head>
  //   <title>Dapur Sekedar&mdash;Takeaway delivery di Jakarta</title>
  //   <meta name="viewport" content="width=device-width, initial-scale=1" />
  //   <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300&display=swap" rel="stylesheet">
  //   <style>
  //     html, body {
  //       background-color: #f6ee55;
  //       font-family: Crimson Pro, serif;
  //       font-size: larger;
  //       max-width: 24rem;
  //       margin: 0 auto;
  //     }
  //     .intro {
  //       text-align: center;
  //     }
  //     .menu-item {
  //       display: flex;
  //       justify-content: space-between;
  //       margin-bottom: 0.5rem;
  //     }
  //     button {
  //       background: none;
  //       border: 2px solid black;
  //       font-size: larger;
  //       font-weight: bold;
  //       font-family: Crimson Pro;
  //       cursor: pointer;
  //     }
  //   </style>
  // </head>

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="intro">
      <img src="./logo.jpg" alt="" width="200" />
      <h1>Dapur Sekedar</h1>
      Sekedar dapur, memasak sayur mayur<br />
      Makanan enak dan sehat, harga tapi merakyat
    </div>
    <div style={{marginTop:'1rem',textAlign:'center'}}>
      <button>Pesan</button>
    </div>
    <div class="menu">
      <h2>Menu</h2>
      <div class="menu-item">
        <div>Nasi goreng</div>
        <div>Rp. 15.000</div>
      </div>
      <div class="menu-item">
        <div>Rendang ayam</div>
        <div>Rp. 10.000</div>
      </div>
      <div class="menu-item">
        <div>Soto ayam</div>
        <div>Rp. 10.000</div>
      </div>
      <div class="menu-item">
        <div>Nasi uduk</div>
        <div>Rp. 10.000</div>
      </div>
      <div class="menu-item">
        <div>Tempe orek</div>
        <div>Rp. 10.000</div>
      </div>
      <div class="menu-item">
        <div>Kangkung tumis</div>
        <div>Rp. 10.000</div>
      </div>
      <div class="menu-item">
        <div>Semur</div>
        <div>Rp. 10.000</div>
      </div>
      <div class="menu-item">
        <div>Perkedel</div>
        <div>Rp. 10.000</div>
      </div>
      <div class="menu-item">
        <div>Bakwan</div>
        <div>Rp. 10.000</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
