
import Slider, { SliderThumb} from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { Context } from '../context/Context';


const CreditSlider = styled(Slider)(({ theme }) => ({
  color: '#9747FF',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    width: 22,
    height: 22,
    backgroundColor: '#9747FF',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(151, 71, 255, 0.16)',
    },
    '& .Credit-bar': {
        content: '""',
        width: 10,
        height: 10,
        backgroundColor: '#fff',
        borderRadius: '50%',
       
      }
  },
  '& .MuiSlider-track': {
    height: 6,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 6,
  },
}));

interface CreditThumbComponentProps extends React.HTMLAttributes<unknown> {}

function CreditThumbComponent(props: CreditThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="Credit-bar" />
    </SliderThumb>
  );
}

export default function CustomCreditSlider() {
  // Accessing context to set the price
  const { setPrice } = useContext(Context);

  // Event handler for slider change
  const handleChange = (event: Event, value:any) => {
    setPrice(value); // Set the price to the new value of the slider
  };

  return (
    // Slider component with custom marks
    <CreditSlider
        slots={{ thumb: CreditThumbComponent }}
        aria-label="Custom marks"
      defaultValue={10}
      onChange={handleChange} // Call the handleChange function when the slider value changes
      step={5}
      min={5}
      max={30}
      />
  );
}
