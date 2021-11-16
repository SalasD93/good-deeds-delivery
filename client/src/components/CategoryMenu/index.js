import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  let categoryItems = 0;
  for (let i = 0; i< categories.length; i++) {
    categoryItems++
  }
  let word = '';
  switch (categoryItems) {
    case 1:
      word = 'one'
      break;
    case 2:
      word = 'two'
      break;
    case 3:
      word = 'three'
      break;
    case 4:
      word = 'four'
      break;
    case 5:
      word = 'five'
      break;
    case 6:
      word = 'six'
      break;
    case 7:
      word = 'seven'
      break;
    case 8:
      word = 'eight'
      break;
    case 9:
      word = 'nine'
      break;
    case 10:
      word = 'ten'
      break;
    default:
      break;
  }

  return (
    <div>
      <h2>Choose a Category:</h2>
      <div className={`${word} ui buttons`}>
      {categories.map((item) => (
        <button className="ui button"
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
      </div>
    </div>
  );
}

export default CategoryMenu;