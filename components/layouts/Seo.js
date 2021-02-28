import React from 'react'
import Head from 'next/head';

const Seo = ({title, keywords, description}) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Aymane Lassfar" />
      <title>{title}</title>
    </Head>
  )
}

Seo.defaultProps = {
  title: 'Proshop by Lassfar',
  description: 'Proshop is lassfar\'s e-commerce app',
  keywords: 'Proshop Morocco'
}

export default Seo
