import { IMenuIcon } from "./typing";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
export const listMenu: IMenuIcon[] = [
    {
        menuName:"Dashboard",
        Icon: DashboardIcon
    },
    {
        menuName:"Profile",
        Icon: AccountCircleIcon
    },
    {
        menuName:"Setting",
        Icon: SettingsIcon
    },
    {
        menuName:"Sign Out",
        Icon: LogoutIcon
    },
]