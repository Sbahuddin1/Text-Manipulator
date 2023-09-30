export default function Alert(p) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "40px" }}>
      {p.alert && (
        <div
          className={`alert alert-${p.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {capitalize(p.alert.type)}:{p.alert.message}
        </div>
      )}
    </div>
  );
}
