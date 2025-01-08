import React from "react";
import { IComment } from "../database/blogSchema";

type CommentProps = {
    comment: IComment;
  };
  
  const Comment: React.FC<CommentProps> = ({ comment }) => {
    const parsedDate = new Date(comment.date);
    const formattedTime = isNaN(parsedDate.getTime())
      ? "Invalid Date"
      : parsedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
  
    return (
      <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
        <h4 style={{ marginBottom: "5px", fontWeight: "bold" }}>{comment.user}</h4>
        <p style={{ fontSize: "0.9rem", color: "#888" }}>{formattedTime}</p>
        <p>{comment.comment}</p>
      </div>
    );
  };
  
  export default Comment;