import "./Statistics.css";

export default function Statistics() {

  const stats = [
    { number: "50+", label: "Members" },
    // { number: "15+", label: "Branches" },
    { number: "10+", label: "Projects" },
    { number: "10+", label: "Years" },
  ];

  return (
    <section className="stats">
      <div className="stats-container">

        {stats.map((item) => (
          <div
            className="stat"
            key={item.label}
          >
            <h2>{item.number}</h2>
            <p>{item.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
}