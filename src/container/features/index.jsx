import './style.scss'
import iconChat from './icon-chat.png'
import iconMoney from './icon-money.png'
import iconSecurity from './icon-security.png'
import Feature from '../../components/feature'

export default function Features() {
  const features = [
    {
      icon: iconChat,
      title: 'You are our #1 priority',
      description:
        'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      icon: iconMoney,
      title: 'More savings means higher rates',
      description:
        'The more you save with us, the higher your interest rate will be!',
    },
    {
      icon: iconSecurity,
      title: 'Security you can trust',
      description:
        'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ]

  return (
    <section className='features'>
      {features.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  )
}
