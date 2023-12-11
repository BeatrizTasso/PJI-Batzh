import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categories.css'
import { BsHouseDoorFill, BsFillHouseFill, BsFillPuzzleFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai';
import { GiFlowerPot, GiClothes } from 'react-icons/gi';
import { TiSortAlphabetically } from 'react-icons/ti';
import { MdPhoneAndroid } from 'react-icons/md'

function CategoriesNav() {
    return (
        <div className="container" id="categories">
            <h1>Categorias</h1>
            <Link to="/categories/all">
                <Button variant="dark" id="all"><TiSortAlphabetically />All</Button>{' '}
            </Link>
            <Link to="/categories/properties">
                <Button variant="dark" id="properties"><GiFlowerPot />Doces</Button>{' '}
            </Link>
            <Link to="/categories/auto">
                <Button variant="dark" id="auto"><AiFillCar />Salgados</Button>{' '}
            </Link>
            <Link to="/categories/home">
                <Button variant="dark" id="home"><BsFillHouseFill />Acessórios</Button>{' '}
            </Link>
            <Link to="/categories/clothes">
                <Button variant="dark" id="clothes"><GiClothes />Roupas</Button>{' '}
            </Link>
            <Link to="/categories/toys">
                <Button variant="dark" id="toys"><BsFillPuzzleFill />Brinquedos</Button>{' '}
            </Link>
        </div>
    )
}

export default CategoriesNav;