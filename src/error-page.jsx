import { useRouteError } from "react-router-dom";
import styled from 'styled-components';
import ImageManu from "./images/2822506.png";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <DivErro id="error-page">
            <ImageErro src={ImageManu} alt="Manutenção" width="500px" />
            <div>
                <h1>Oops!</h1>
                <p>Desculpe, essa aréa está em manutenção ou ocorreu um erro. <br/>Tente novemente mais tarde!</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </DivErro>
    );
}

const DivErro = styled.div`
position: fixed;
display: flex;
-webkit-box-align: center;
-webkit-box-pack: center;
justify-content: center;
flex-direction: column;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
align-items: center;
text-align: center;
`;

const ImageErro = styled.img`
    mix-blend-mode: screen;
    background: transparent;
`;
