import { Wrapper } from "./SharedContainer.styled";

export default function SharedContainer({children, isBg}) {
    return <Wrapper $isBg={isBg}>{children}</Wrapper>
}