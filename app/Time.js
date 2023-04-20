export default function Time({ time }) {
  return (
    <span className="tabular-nums">
      {time.toLocaleTimeString(undefined, {
        second: "2-digit",
        formatMatcher: "best fit",
        hour: "numeric",
        minute: "2-digit",
      })}
    </span>
  );
}
