export default function Button(props) {
  const { name, loginEvent } = props;
  return (
    <button
      className="w-100 btn btn-lg btn-primary"
      onClick={() => loginEvent()}
    >
      {name}
    </button>
  );
}
