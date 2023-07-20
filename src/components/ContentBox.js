import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ContentBox({
  data,
  removeItem,
  setCurrent,
  contentID,
  setCurrentcontent,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ padding: "36px" }}>
      <CardHeader
        action={
          <>
            <IconButton
              sx={{
                borderRadius: "10px",
                padding: "5px",
                width: "32px",
                height: "28px",
                backgroundColor: "#0052FF",
                margin: "0px 16px",
              }}
              onClick={() => {
                setCurrent(contentID);
                setCurrentcontent(-1);
              }}
            >
              <EditIcon sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton
              sx={{
                borderRadius: "10px",
                padding: "5px",
                width: "32px",
                height: "28px",
                backgroundColor: "#F23B3B",
              }}
              onClick={() => {
                setCurrentcontent(-1);
                removeItem(contentID);
              }}
            >
              <DeleteIcon sx={{ color: "#fff" }} />
            </IconButton>
          </>
        }
        title={data}
        className="card-header1"
      />
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and
          set aside for 10 minutes.
        </Typography>
        <Typography paragraph>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
          over medium-high heat. Add chicken, shrimp and chorizo, and cook,
          stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
          shrimp to a large plate and set aside, leaving chicken and chorizo in
          the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
          pepper, and cook, stirring often until thickened and fragrant, about
          10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth;
          bring to a boil.
        </Typography>
        <Typography paragraph>
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is
          absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
          shrimp and mussels, tucking them down into the rice, and cook again
          without stirring, until mussels have opened and rice is just tender, 5
          to 7 minutes more. (Discard any mussels that don&apos;t open.)
        </Typography>
        <Typography>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </CardContent>
    </Card>
  );
}
