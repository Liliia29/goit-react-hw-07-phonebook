import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    column-gap: 10px;
    color: black;
`;

export const Button = styled.button`
    min-width: 90px;
    padding: 6px 12px;
    
    font-family: inherit;
    font-size: 16px;

    margin: 0;
    margin-left: auto;

    background-color: white;
    border: 2px solid black;
    border-radius: 4px;
    cursor: pointer;
`;

export const NoContacts = styled.p`
    color: white;
`;