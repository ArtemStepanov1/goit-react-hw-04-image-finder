import { ColorRing } from  'react-loader-spinner'
import { LoaderWrapper } from "./Loader.styled";

export const Loader = () => {
    return(
        <LoaderWrapper>
            <ColorRing
                height="30vh"
                width="30vw"
                ariaLabel="blocks-loading"
                colors={['#3f51b5', '#fcd703', '#3f51b5', '#fcd703', '#3f51b5']}
            />
        </LoaderWrapper>
    )
}