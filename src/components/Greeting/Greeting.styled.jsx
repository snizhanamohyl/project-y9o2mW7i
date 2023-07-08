import styled from 'styled-components';

// export const WelcomeWrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   width: 100vw;
//   height: 100vh;
//   justify-content: center;
//   align-items: center;
//   background-image: url('${bgMob}'),
//     linear-gradient(
//       180deg,
//       rgba(0, 0, 0, 0.6) 46.3%,
//       rgba(0, 0, 0, 0.35) 72.75%,
//       rgba(0, 0, 0, 0) 100%
//     );
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;

//   @media (min-device-pixel-ratio: 2),
//     (min-resolution: 192dpi),
//     (min-resolution: 2dppx) {
//     background-image: url('${bgMobRetina}'),
//       linear-gradient(
//         180deg,
//         rgba(0, 0, 0, 0.6) 46.3%,
//         rgba(0, 0, 0, 0.35) 72.75%,
//         rgba(0, 0, 0, 0) 100%
//       );
//   }

//   @media screen and (min-width: 768px) {
//     background-image: url('${bgTab}'),
//       linear-gradient(
//         180deg,
//         rgba(0, 0, 0, 0.6) 46.3%,
//         rgba(0, 0, 0, 0.35) 72.75%,
//         rgba(0, 0, 0, 0) 100%
//       );

//     @media (min-device-pixel-ratio: 2),
//       (min-resolution: 192dpi),
//       (min-resolution: 2dppx) {
//       background-image: url('${bgTabRetina}'),
//         linear-gradient(
//           180deg,
//           rgba(0, 0, 0, 0.6) 46.3%,
//           rgba(0, 0, 0, 0.35) 72.75%,
//           rgba(0, 0, 0, 0) 100%
//         );
//     }
//   }

//   @media screen and (min-width: 1200px) {
//     background-image: url('${bgDesk}'),
//       linear-gradient(
//         180deg,
//         rgba(0, 0, 0, 0.6) 46.3%,
//         rgba(0, 0, 0, 0.35) 72.75%,
//         rgba(0, 0, 0, 0) 100%
//       );

//     @media (min-device-pixel-ratio: 2),
//       (min-resolution: 192dpi),
//       (min-resolution: 2dppx) {
//       background-image: url('${bgDeskRetina}'),
//         linear-gradient(
//           180deg,
//           rgba(0, 0, 0, 0.6) 46.3%,
//           rgba(0, 0, 0, 0.35) 72.75%,
//           rgba(0, 0, 0, 0) 100%
//         );
//     }
//   }
// `;


export const Logo = styled.img`
  width: 54px;
  height: 54px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`;


export const StyledTitle = styled.h1`
  color: #fafafa;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
  margin: 0 0 14px 0;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    letter-spacing: -0.56px;
  }
`;

// export const StyledText = styled.p`
//     color: #fafafa;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 18px;
//     text-align: center;
//     letter-spacing: -0.02em;
//     margin-bottom: 44px;
//     padding: 0 35px;

// @media screen and (min-width: 768px) {
//     font-size: 18px;
//     line-height: 24px;
//     margin-bottom: 42px;
//     padding: 0 134px;
// }

// @media screen and (min-width: 1440px) {
//     margin-bottom: 40px;
//     padding: 0 448px;
// }
// `;