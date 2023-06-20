import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import { Grid } from '@mui/material'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart:(id:number) => void
}

const CartPage = ({
    productsInCart,
    removeProductFromCart,
}: Props) => {
    return (
        <div>
            <Grid container spacing={4}>
            <CartProductList productsInCart={productsInCart} 
            CartItem={CartProductListItemExtended}
            removeProductFromCart={removeProductFromCart}
            />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
