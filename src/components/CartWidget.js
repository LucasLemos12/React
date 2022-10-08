import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
function CartWidget(){
    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faBell}/>
            <span>0</span>
        </div>
    )
}

export default CartWidget;
