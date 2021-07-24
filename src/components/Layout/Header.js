import { Fragment } from "react";
import luffy from '../../assets/b2.jpg';
import classes from './Header.moduel.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{

    return(
        <Fragment>
            <header className="header">
                <h1>Bella </h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className="main-image">
                <img src={luffy} alt="Lyffy"/>
            </div>
        </Fragment>
    )
}


export default Header;