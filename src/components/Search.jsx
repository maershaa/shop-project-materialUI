import { TextField } from '@mui/material';

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField //компонент для ввода текста типа input
      label="Search" // устанавливаем метку для текстового поля
      variant="outlined" // устанавливаем вариант оформления текстового поля
      fullWidth // устанавливаем ширину текстового поля на всю доступную ширину
      sx={{ mb: '1.5rem' }} // устанавливаем стили с помощью SX prop, в данном случае, отступ снизу
      type="search"
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;
