import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export const TodoItem = ({ todo, fetchCurrentTodoDetails }) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: 800,
        justifyContent: "space-between",
        flexDirection: "column",
        margin: "10px",
        borderRadius:"10px",
        height:"160px"
      }}
    >
      <CardContent>
        
        <Typography variant="h5" color={"text.secondary"} fontSize={18}  >
          {todo.id}. {todo.todo}.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          onClick={() => {
            fetchCurrentTodoDetails(todo.id);
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
