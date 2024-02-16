import './style.scss'

export default function Button({ btnClass, text }) {
  return <button className={btnClass}>{text}</button>
}
