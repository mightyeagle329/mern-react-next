import PropTypes from 'prop-types'
import Head from 'next/head'

export default function PageTitle({title}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
}