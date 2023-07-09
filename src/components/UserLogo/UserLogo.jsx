import { Avatar, AvatarImg, UserName, UserWrap } from "./UserLogo.styled";

export default function UserLogo() {
    const avatarSize = window.innerWidth < 768 ? '34px' : '44px';

    return <UserWrap>
        <Avatar>
            <AvatarImg src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt="Olena" width={avatarSize} height={ avatarSize } />
        </Avatar>
        <UserName>Olena</UserName>
    </UserWrap>
}