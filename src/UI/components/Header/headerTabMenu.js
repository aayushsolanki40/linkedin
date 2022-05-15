import { setMenuTabIndex } from '../../features/header/MenuTabIndex';
import { useDispatch } from 'react-redux'


const ChangeHeaderMenu = (tabname="") =>{
    const dispatch = useDispatch();
    dispatch(setMenuTabIndex(tabname));
};

export {ChangeHeaderMenu}