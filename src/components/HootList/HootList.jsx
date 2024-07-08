import { Link } from "react-router-dom";
import styles from "./HootList.module.css";
import Icon from "../Icon/Icon";
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo";

function HootList(props) {
  return (
    <main className={styles.container}>
      {props.hoots.map((hoot) => (
        <Link
          className="m-2 inline-block"
          key={hoot._id}
          to={`/hoots/${hoot._id}`}
        >
          <article>
            <header>
              <div>
                <h2>{hoot.title}</h2>
                <Icon category={hoot.category} />
              </div>
              <AuthorInfo content={hoot} />
            </header>
            <p>{hoot.text}</p>
          </article>
        </Link>
      ))}
    </main>
  );
}

export default HootList;
