import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
