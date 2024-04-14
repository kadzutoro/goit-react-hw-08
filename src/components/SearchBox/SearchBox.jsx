import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SearchBox = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value))
  }

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: '#000000',
        light: '#333333',
        dark: '#000000',
        contrastText: '#ffd700',
      },
      secondary: {
        main: '#ffd700',
        light: '#fff59d',
        dark: '#c7a500',
        contrastText: '#000000',
      },
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
    <div className={css.container}>
      <TextField
  id="standard-basic"
  label="Search"
  variant="standard"
  size="normal"
  value={value}
  onChange={handleChange}
  fullWidth
/>
    </div>
    </ThemeProvider>
  )
}

export default SearchBox;