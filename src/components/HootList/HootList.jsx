function HootList(props) {
  return (
    <main>
      {props.hoots.map((hoot) => (
        <p key={hoot._id}>{hoot.title}</p>
      ))}
    </main>
  );
}

export default HootList;
