import './style.scss'

import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

export default function PageLayout({ classes = '', children }) {
  return (
    <>
      <Navbar />
      <div className={'main ' + classes}>{children}</div>
      <Footer />
    </>
  )
}
