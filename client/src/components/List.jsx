import React from 'react';
import ListIngredient from './ListIngredient.jsx';
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

const List = (props) => {
  const {meal, ingredients} = props;

  return(
    <table className="test1">
      <Accordion>
        <AccordionSummary></AccordionSummary>
      <tbody>
        {ingredients.map((ingredient, i) =>
          <ListIngredient
            key={i}
            ingredient={ingredient}
          />
        )}
      </tbody>
      </Accordion>
    </table>
  )
};

export default List;