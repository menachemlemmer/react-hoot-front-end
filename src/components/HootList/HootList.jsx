import { Link } from "react-router-dom";

function HootList(props) {
  return (
    <main>
      {props.hoots.map((hoot) => (
        <Link
          className="m-2 inline-block"
          key={hoot._id}
          to={`/hoots/${hoot._id}`}
        >
          <article className="space-y-2 p-2">
            <header>
              <h2 className="text-2xl">{hoot.title}</h2>
              <p className="text-sm">
                {hoot.author.username} posted on{" "}
                {new Date(hoot.createdAt).toLocaleDateString()}
              </p>
            </header>
            <p>{hoot.text}</p>
          </article>
        </Link>
      ))}
    </main>
  );
}

export default HootList;
