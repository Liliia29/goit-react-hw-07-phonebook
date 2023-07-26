import { Input } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Input
      type="text"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value.trim()))}
    />
  );
};
