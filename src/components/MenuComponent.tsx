import {
    Box,
    Divider,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material'
import { listMenu } from '../MenuItem';
import { userInfo } from '../typing.reduce';
import { Link as RouterLink } from 'react-router-dom'
import { useAppDispatch } from '../redux/hook';
import { signOut } from '../redux/action/user.action';
type Props = {
    userInfo: userInfo
}

function MenuComponent({ userInfo }: Props) {
    const dispatch = useAppDispatch()
    return (
        <Box bgcolor={'#203040'} height={'100%'}>
            <Toolbar />
            <Divider sx={{
                color: "#fff"
            }} />
            {
                listMenu.map((menu, index) => {
                    return <List key={menu.menuName}>
                        {menu.menuName.replace(/\s/g, '').toLowerCase() === 'signout'
                            ? <Link onClick={() => dispatch<any>(signOut())}>
                                <ListItemButton sx={{
                                    color: "secondary.contrastText"
                                }}>
                                    <ListItemIcon>
                                        <menu.Icon
                                            sx={{
                                                fontSize: "1.8rem",
                                                color: "secondary.contrastText"
                                            }} />
                                    </ListItemIcon>
                                    <ListItemText primary={menu.menuName} />
                                </ListItemButton>
                            </Link>
                            :
                            <Link component={RouterLink} to={`/${menu.menuName.replace(/^\s+|\s+$/gm, '').toLowerCase()}`}>
                                <ListItemButton sx={{
                                    color: "secondary.contrastText"
                                }}>
                                    <ListItemIcon>
                                        <menu.Icon
                                            sx={{
                                                fontSize: "1.8rem",
                                                color: "secondary.contrastText"
                                            }} />
                                    </ListItemIcon>
                                    <ListItemText primary={menu.menuName} />
                                </ListItemButton>
                            </Link>
                        }

                    </List>
                }
                )
            }
        </Box>
    )
}

export default MenuComponent