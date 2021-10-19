import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Karla:wght@400;700&display=swap');
    
    * {
        padding: 0;
        margin: 0;
        border: 0;
        
        box-sizing: border-box;
    }
    
    ul {
        list-style: none;
    }

    button,
    input {
        outline: none;
    }

    button {
        cursor: pointer;

        transition: filter 0.3s ease;
        
        &:hover {
            filter: brightness(0.9);
        }
    }

    a {
        text-decoration: none;
    }
`;