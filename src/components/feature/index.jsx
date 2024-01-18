import './style.scss';

export default function Feature({ icon, title, description }) {
  return (
    <div className="feature-item">
      <img
        src={icon}
        alt={description}
        className="feature-icon"
      />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
