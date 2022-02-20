import { Card } from "react-bootstrap";
import "../Food/Food.css";
const Food = ({ recipes, changeRecipe, recipesSelected }) => (
  <Card
    className={
      recipesSelected?.id === recipes.id ? "border-thick mt-3" : "mt-3"
    }
    onClick={() => changeRecipe(recipes)}
    style={{ cursor: "pointer" }}
  >
    <Card.Body className="d-flex">
      <img className="book-image" src={recipes.imageUrl} alt="book cover" />
      <div>
        <Card.Text className="font-weight-bold">{recipes.title}</Card.Text>
        <p>{recipes.price}</p>
      </div>
    </Card.Body>
  </Card>
);

export default Food;
