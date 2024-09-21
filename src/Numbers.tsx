function Numbers({ count }: { count: number }) {
  return (
    <div className="Numbers">
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>{i}</span>
      ))}
    </div>
  );
}

export default Numbers;
