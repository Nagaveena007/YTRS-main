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
            <Typography color="textSecondary">{dish.method}</Typography>
          </AccordionDetails>
          {/*    {dish.map((d, i) => (
            <AccordionDetails>
              <Typography color="textSecondary">{d.method}</Typography>
            </AccordionDetails>
          ))} */}
          {/*   <AccordionDetails className="d-flex flex-column">
            <Typography color="textSecondary">
              1- Whisk together 2 eggs and 2 tablespoons of granulated sugar.
            </Typography>
            <Typography color="textSecondary">
              2-Add 200 ml of milk, 1 + ¼ cup of all-purpose flour, 2 tsp of
              baking powder and 2 tsp vanilla powder. Beat until you have a
              smooth batter.
            </Typography>
            <Typography color="textSecondary">
              3- Heat a lightly oiled non-stick frying pan over a medium heat.
            </Typography>
            <Typography color="textSecondary">
              4- Gently pour about 1 tbsp of batter onto the hot pan.
            </Typography>
            <Typography color="textSecondary">
              5- Wait until the bubbles form on the surface and once they start
              popping, flip the pancake over and cook until both sides are
              golden.
            </Typography>
            <Typography color="textSecondary">
              6- Repeat until all the batter is used up. 7- Once both sides are
              golden, transfer to a serving plate! 8- Hope you enjoy!
            </Typography>
          </AccordionDetails> */}
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
