import techStackData from "../data/techStackData";

export default function TechIcons() {
  return (
    <div className="tech-stack-container">
      {techStackData.map(({ name, icon }) => (
        <img src={`/tech-stack-icons/${icon}`} alt={`${name} icon.`} />
      ))}
    </div>
  );
}
