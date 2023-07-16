import sprite from 'assets/sprite.svg';

export default function Logo({size, fill='var(--accent)', stroke='var(--bg-color)'}) {
    return <svg width={size} height={size} fill={fill} stroke={stroke}>
            <use href={`${sprite}#icon-footer-logo`}></use>    
        </svg>
        
};