import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    button.remover {
        color: #FFFFFF;
        margin-top:20px;
        background-color: #ff0000;
        border-radius: 10px;
        padding: 5px 10px;
        border: none;
        transition: 0.2s;

        &:hover {
            background-color: #ff000060;
            cursor: pointer;
        }
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`