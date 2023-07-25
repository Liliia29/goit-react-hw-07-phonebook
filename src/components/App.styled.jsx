import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 700px;
    margin: 50px auto 10px;
    padding: 20px;
    background-color: azure;
    border-radius: 15px;
    border: 2px solid black;
`;

export const Title = styled.h1`
    margin-bottom: 25px;
    font-size: 32px;
    text-align: center;
    color: black;
`;

export const ContactsTitle = styled.p`
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    color: black;
`;
export const FilterTitle = styled.p`
    margin-bottom: 3px;
    font-size: 18px;
   
    text-align: center;
    color: black;
`;

export const NoContacts = styled.p`
        color: black;
`;