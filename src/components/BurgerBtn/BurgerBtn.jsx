import { Btn } from "./BurgerBtn.styled";

export default function BurgerBtn() {
    return <Btn>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 14H24.5M3.5 7H24.5M3.5 21H17.5" stroke="#22252A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </Btn>
}