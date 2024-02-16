import Hero from '../../components/hero'
import './style.scss'
import Features from '../../container/features'
import PageLayout from '../../layout/pageLayout'

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Features />
    </PageLayout>
  )
}
