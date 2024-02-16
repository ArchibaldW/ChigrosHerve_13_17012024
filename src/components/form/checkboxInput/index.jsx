import './style.scss'

export default function CheckboxInput({ id, label }) {
  return (
    <div className='input-remember'>
      <input type='checkbox' id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
