export function Loader({ txt = "Loading, please wait..." }) {
  return (
    <section className="loader-container">
      <div>
        <p>{txt}</p>
      </div>
    </section>
  );
}
