import type {} from '@mui/lab/themeAugmentation';

import { CSSProperties } from 'react';
import { createStyled } from '@mui/system';
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	interface Palette {
		customBackground: {
			light?: CSSProperties['color'];
		};
	}
	interface PaletteOptions {
		customBackground: {
			light?: CSSProperties['color'];
		};
	}

	interface TypographyVariants {
		body3: CSSProperties;
	}
	interface TypographyVariantsOptions {
		body3?: CSSProperties;
	}
}

export const Colors = {
	PRIMARY: '#000000',
	SECONDARY: '#ffffff',
};

export const Fonts = {
	BebasNeue: 'Bebas Neue',
};

export const Transition = {
	Default: 'all 0.5s ease 0s',
};

const DefaultTheme = createTheme({
	palette: {
		primary: {
			main: Colors.PRIMARY,
		},
		secondary: {
			main: Colors.SECONDARY,
		},
		background: {
			default: Colors.PRIMARY,
		},
		customBackground: {
			light: Colors.PRIMARY,
		},
	},
	typography: {
		fontSize: 16,
		h1: {
			fontWeight: 400,
			fontSize: '5rem',
		},
		h2: {
			fontWeight: 400,
			fontSize: '2.5rem',
		},
		h3: {
			fontWeight: 400,
			fontSize: '2rem',
		},
		h4: {
			fontWeight: 400,
			fontSize: '1.75rem',
		},
		h5: {
			fontWeight: 400,
			fontSize: '1.5rem',
		},
		h6: {
			fontWeight: 400,
			fontSize: '1.25rem',
		},
		body1: {
			fontSize: '1.125rem',
		},
		body2: {
			fontSize: '1rem',
		},
		fontFamily: 'inherit',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					color: Colors.PRIMARY,
					fontFamily: Fonts.BebasNeue,
				},
			},
		},
		MuiPopover: {
			styleOverrides: {
				paper: {
					background: Colors.SECONDARY,
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 0,
				},
			},
		},
	},
});

export const CustomStyled = createStyled({
	defaultTheme: DefaultTheme,
});

export default DefaultTheme;
