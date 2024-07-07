import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthedUserContext } from "../../App";
import { Link } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";
import * as hootService from "../../services/hootService";

const HootDetails = (props) => {
  const [hoot, setHoot] = useState(null);
  const user = useContext(AuthedUserContext);
  const { hootId } = useParams();

  useEffect(() => {
    const fetchHoot = async () => {
      const hootData = await hootService.show(hootId);
      setHoot(hootData);
    };
    fetchHoot();
  }, [hootId]);

  const handleAddComment = async (commentFormData) => {
    const newComment = await hootService.createComment(hootId, commentFormData);
    setHoot({ ...hoot, comments: [...hoot.comments, newComment] });
  };

  if (!hoot) return <main>Loading...</main>;
  return (
    <main className="m-2 space-y-2 p-2">
      <header>
        <p>{hoot.category.toUpperCase()}</p>
        <h1 className="text-2xl">{hoot.title}</h1>
        <p className="text-sm">
          {hoot.author.username} posted on
          {new Date(hoot.createdAt).toLocaleDateString()}
        </p>
      </header>
      <p>{hoot.text}</p>
      {hoot.author._id === user._id && (
        <>
          <Link to={`/hoots/${hootId}/edit`}>Edit</Link>
          <button onClick={() => props.handleDeleteHoot(hootId)}>Delete</button>
        </>
      )}
      <section>
        <h2>Comments</h2>
        <CommentForm handleAddComment={handleAddComment} />

        {!hoot.comments.length && <p>There are no comments.</p>}

        {hoot.comments.map((comment) => (
          <article key={comment._id}>
            <header>
              <p>
                {comment.author.username} posted on
                {new Date(comment.createdAt).toLocaleDateString()}
              </p>
            </header>
            <p>{comment.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default HootDetails;
