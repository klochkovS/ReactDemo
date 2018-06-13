import { v4 } from 'uuid';
import C from './constants';


export const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString(),
});

export const removeColor = id => ({
  type: C.REMOVE_COLOR,
  id,
});

export const reteColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating,
});

export const sortColors = sortedBy =>
  (sortedBy === 'rating') ?
    ({
      type: C.SORT_COLORS,
      sortBy: 'SORTED_BY_RATING',
    }) :
    (sortedBy === 'title') ?
      ({
        type: C.SORT_COLORS,
        sortBy: 'SORTED_BY_TITLE',
      }) :
      ({
        type: C.SORT_COLORS,
        sortBy: 'SORTED_BY_DATE',
      })