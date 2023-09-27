export default function Log({ info }) {
  return (
    <div className="log-instance">
      <h3>{info.action}</h3>
      <p>{info.text}</p>
    </div>
  );
}
