import React from "react";
import { MemoryRouter } from "react-router-dom";
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps
} from 'react-router-dom';
import {StaticRouter} from 'react-router-dom/server'

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
    (props, ref) => <RouterLink ref={ref} to="/" {...props} role={undefined} />,
);
export default function Router(props: { children?: React.ReactNode }) {
    const { children } = props;
    if (typeof window === 'undefined') {
        return <StaticRouter location="/">{children}</StaticRouter>;
    }

    return <MemoryRouter>{children}</MemoryRouter>;
}