import FullWidthPage from './FullWidthPage';
import { PropsWithChildren } from 'react';

interface LayoutProps {}

export default function Layout({
	children,
}: PropsWithChildren<{}> & LayoutProps) {
	return <FullWidthPage>{children}</FullWidthPage>;
}
