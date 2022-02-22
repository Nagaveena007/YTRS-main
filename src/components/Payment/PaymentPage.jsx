import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {},
});

export default function PaymentPage({ dish }) {
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
            <Typography className={classes.heading}>Ingredients</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="black">
              {/*  <p>
                {ingredients.items}
                {ingredients.quantity}
                {ingredients.unit}
              </p> */}
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
            <Typography className={classes.heading}>Comments</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              {/*  {dish.comments[0].comment} */}
              {dish.comments.map((recipe, i) => (
                <p>{recipe.comment}</p>
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
            <Typography className={classes.heading}>Reviews</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              If you forget to put an aria-label on the nested action, the label
              of the action will also be included in the label of the parent
              button that controls the accordion expansion.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
