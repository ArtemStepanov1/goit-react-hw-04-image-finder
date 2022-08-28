import {
    LoadMoreBtnEl,
    LoadMoreWrapper
} from "./LoadMoreBtn.styled"

export const LoadMoreBtn = ({ onShowMore }) => {
    return(
        <LoadMoreWrapper>
            <LoadMoreBtnEl type="submit" onClick={onShowMore}>
                <span >Load more</span>
            </LoadMoreBtnEl>
        </LoadMoreWrapper>
    )
}