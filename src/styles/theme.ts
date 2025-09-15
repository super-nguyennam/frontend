export const theme = {
    dark: {
        colors: {
            background: '#0a0f1c',
            foreground: '#eeeeee',

            card: '#232323',
            cardForeground: '#eeeeee',

            popover: '#232323',
            popoverForeground: '#eeeeee',

            primary: '#d946ef',
            primaryForeground: '#ffffff',

            secondary: '#232323',
            secondaryForeground: '#eeeeee',

            muted: '#232323',
            mutedForeground: '#808080',

            accent: '#d946ef',
            accentForeground: '#ffffff',

            destructive: '#ef4444',
            destructiveForeground: '#fef2f2',

            border: '#333333',
            input: '#232323',
            ring: '#d946ef',

            sidebar: {
            background: '#232323',
            foreground: '#eeeeee',
            primary: '#d946ef',
            primaryForeground: '#ffffff',
            accent: '#333333',
            accentForeground: '#eeeeee',
            border: '#333333',
            ring: '#d946ef',
            },

            gray: {
            900: '#111111',
            800: '#232323',
            700: '#757575',
            },

            text: {
            primary: '#EEEEEE',
            secondary: 'rgba(238, 238, 238, 0.75)',
            muted: 'rgba(238, 238, 238, 0.50)',
            },
        },
    },

    borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
    },

    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
    },

    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
    },

    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
    },

    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
    },

    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },

    animations: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
    },

    keyframes: {
        'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
        },
    },
};

export type Theme = typeof theme;
