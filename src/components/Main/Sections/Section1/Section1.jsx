import "./section1.scss";

export const Section1 = (props) => {
  const { solutions } = props.data;

  return (
    <section className="solution">
      <h2>3 Easy Steps and Get Your Solution</h2>
      <div className="solution-list">
        <ul>
          {solutions.map((item) => (
            <Item data={item} key={item.h3} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const Item = ({ data }) => {
  const { img, h3, p, id } = data;
  return (
    <li>
      <div className={`item item-${id}`}>
        <img src={img} alt="section1" />
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </li>
  );
};
