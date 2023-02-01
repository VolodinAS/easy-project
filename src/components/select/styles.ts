import { StylesConfig } from 'react-select';

import theme from '../../theme';


export const selectStyles: StylesConfig = {
    control: (provided, state) => ({
        ...provided,
        cursor: 'pointer',
        minHeight: '56px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.color.purple,
        borderRadius: '4px',
        borderBottomLeftRadius: state.menuIsOpen ? '0' : '4px',
        borderBottomRightRadius: state.menuIsOpen ? '0' : '4px',
        boxShadow: 'none',
        '&:hover': {
            borderColor: theme.color.purple,
            boxShadow: 'none',
        },
    }),
    option: (provided, state) => ({
        ...provided,
        fontSize: '16px',
        color: '#000',
        backgroundColor: '#fff',
        padding: '8px 16px',
        cursor: 'pointer',
        '&:focus': {
            backgroundColor: '#fff',
        },
    }),
    input: (provided, state) => ({
        ...provided,
        width: '0',
        '& input': {
            width: '0',
        },
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        minHeight: '56px',
        padding: '16px',
    }),
    singleValue: (provided, state) => ({
        ...provided,
        minHeight: '56px',
        margin: '0',
        padding: '0',
    }),
    placeholder(base, state) {
        return {
            ...base,
        };
    },
    indicatorSeparator(base, state) {
        return {
            ...base,
            display: 'none',
        };
    },
    menu: (provided, state) => ({
        ...provided,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.color.purple,
        borderTopWidth: '0',
        margin: '0',
        borderRadius: '0',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        zIndex: '10',
        boxShadow: 'none',
    }),
    menuList: (provided, state) => ({
        ...provided,
        padding: '8px 0',
        borderRadius: '0',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
    }),
    multiValue: (provided, state) => ({
        ...provided,
        backgroundColor: theme.color.lightPurple,
    }),
};
