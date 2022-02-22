import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {},
});

export default function Reviews({ dish }) {
  const classes = useStyles();

  return (
    <>
      <div className={`mt-5 `}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <h5>Ingredients</h5>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="black">
              {dish.ingredients.map((recipe, i) => (
                <>
                  <p>
                    {recipe.items}- {recipe.quantity}
                    {recipe.unit}
                  </p>
                </>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions3-content"
            id="additional-actions3-header"
          >
            <h5>Method</h5>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes. Heat oil in a (14- to 16-inch)
              paella pan or a large, deep skillet over medium-high heat. Add
              chicken, shrimp and chorizo, and cook, stirring occasionally until
              lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate
              and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper,
              and cook, stirring often until thickened and fragrant, about 10
              minutes. Add saffron broth and remaining 4 1/2 cups chicken broth;
              bring to a boil. Add rice and stir very gently to distribute. Top
              with artichokes and peppers, and cook without stirring, until most
              of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down
              into the rice, and cook again without stirring, until mussels have
              opened and rice is just tender, 5 to 7 minutes more. (Discard any
              mussels that don’t open.) Set aside off of the heat to let rest
              for 10 minutes, and then serve.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions2-content"
            id="additional-actions2-header"
          >
            <h5>Comments</h5>
          </AccordionSummary>
          <AccordionDetails>
            <Typography /* color="textSecondary" */>
              {/*  {dish.comments[0].comment} */}

              {dish.comments.map((recipe, i) => (
                <>
                  <Rating name="simple-controlled" value={recipe.rating} />
                  <p>{recipe.comment}</p>
                </>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
