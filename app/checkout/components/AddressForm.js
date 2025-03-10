import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid2 from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useStateContext } from '@/context/StateContext';
import { calculateShipping, createOrder } from '@/lib/actions';
import { createSession } from '@/lib/stripe';

const FormGrid = styled(Grid2)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [address1, setAddress1] = React.useState('')
  const [address2, setAddress2] = React.useState('')
  const [city, setCity] = React.useState('')
  const [state, setState] = React.useState('')
  const [zip, setZip] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [shippingCost, setShippingCost] = React.useState(0)


  const { cartItems, totalPrice, finalTotalPrice, setFinalTotalPrice, setRecipient, recipient, setOrderId, orderId } = useStateContext()

  const handleNext = async () => {

    let recObject = {
      name: firstName + " " + lastName,
      address1: address1,
      address2: address2,
      city: city,
      state_code: state,
      zip: zip,
      country_code: country,
    }
    const shippingCost = await calculateShipping(cartItems, recObject)
    setRecipient(recObject)
    setShippingCost(shippingCost.data[0].rate);
    setFinalTotalPrice(totalPrice + parseFloat(shippingCost.data[0].rate))
  };

  const handlePayment = async () => {
    const order = await createOrder(recipient, cartItems)
    console.log(order.data.id);
    const response = await createSession(finalTotalPrice, order.data.id);
    const url = response.data.url

    if (url) {
      window.location.href = url
    }
  }


  return (
    <Grid2 container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          type="name"
          placeholder="John"
          autoComplete="first name"
          required
          size="small"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="last-name" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          type="last-name"
          placeholder="Snow"
          autoComplete="last name"
          required
          size="small"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1" required>
          Address line 1
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          size="small"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address2">Address line 2</FormLabel>
        <OutlinedInput
          id="address2"
          name="address2"
          type="address2"
          placeholder="Apartment, suite, unit, etc. (optional)"
          autoComplete="shipping address-line2"
          required
          size="small"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder="New York"
          autoComplete="City"
          required
          size="small"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="state" required>
          State
        </FormLabel>
        <OutlinedInput
          id="state"
          name="state"
          type="state"
          placeholder="NY"
          autoComplete="State"
          required
          size="small"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <OutlinedInput
          id="zip"
          name="zip"
          type="zip"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          size="small"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="country"
          placeholder="United States"
          autoComplete="shipping country"
          required
          size="small"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        {shippingCost > 0 && (
          <div>
            <p>
              Shipping: ${shippingCost}
            </p>
            <p className='font-bold text-lg'>
              Final Total: ${finalTotalPrice}
            </p>
          </div>
        )}
      </FormGrid>
      {shippingCost > 0 ? <Button
        variant="contained"
        endIcon={<ChevronRightRoundedIcon />}
        onClick={handlePayment}
        sx={{ width: { xs: '100%', sm: 'fit-content' } }}
      >
        {'Continue to Payment'}
      </Button>
        :
        <Button
          variant="contained"
          endIcon={<ChevronRightRoundedIcon />}
          onClick={handleNext}
          sx={{ width: { xs: '100%', sm: 'fit-content' } }}
        >
          {'Calculate Shipping'}
        </Button>

      }

    </Grid2>
  );
}
