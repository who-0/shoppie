import { styled } from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  position: relative;

  .circle_1_cs,
  .circle_2_cs,
  .circle_3_cs {
    position: absolute;
    background-color: #f79f79;
    border-radius: 100%;
    z-index: 1;
  }

  .circle_1_cs {
    top: -246px;
    left: 371px;
    width: 500px;
    height: 500px;
    transform-origin: center;
    animation: circle1 2s alternate infinite ease-in;
  }
  @keyframes circle1 {
    to {
      transform: scale(0.8);
    }
    from {
      transform: scale(1);
    }
  }
  .circle_2_cs {
    top: 176px;
    left: 299px;
    width: 89px;
    height: 89px;
    animation: circle2 2.2s alternate infinite ease-in;
  }

  @keyframes circle2 {
    to {
      top: 140px;
      left: 350px;
    }
    from {
      top: 176px;
      left: 299px;
    }
  }

  .circle_3_cs {
    top: -232px;
    left: 299px;
    width: 61px;
    height: 61px;
    animation: circle3 2.5s alternate infinite ease-in;
  }

  @keyframes circle3 {
    to {
      top: -183px;
      left: 355px;
    }
    from {
      top: -232px;
      left: 299px;
    }
  }

  .img_bag_cs,
  .img_glass_cs,
  .img_hat_cs,
  .img_shoe_cs {
    position: absolute;
  }

  .img_shoe_cs {
    top: -173px;
    left: 417px;
    z-index: 2;
  }

  .img_glass_cs {
    top: -228px;
    left: 558px;
    z-index: 4;
  }

  .img_hat_cs {
    top: -38px;
    left: 600px;
    z-index: 5;
  }

  .img_bag_cs {
    top: -15px;
    left: 471px;
    z-index: 3;
  }

  @media screen and (max-width: 1025px) {
    .circle_1_cs {
      width: 400px;
      height: 400px;
      left: 260px;
    }
    .circle_2_cs {
      top: 117px;
      left: 234px;
      width: 70px;
      height: 70px;
      animation: circle2 2.2s alternate infinite ease-in;
    }

    @keyframes circle2 {
      to {
        top: 82px;
        left: 254px;
      }
      from {
        top: 117px;
        left: 234px;
      }
    }

    .circle_3_cs {
      top: -228px;
      left: 231px;
      width: 50px;
      height: 50px;
      animation: circle3 2.5s alternate infinite ease-in;
    }

    @keyframes circle3 {
      to {
        top: -203px;
        left: 274px;
      }
      from {
        top: -228px;
        left: 231px;
      }
    }
    .img_bag_cs,
    .img_glass_cs,
    .img_hat_cs,
    .img_shoe_cs {
      width: 150px;
    }
    .img_bag_cs {
      top: -72px;
      left: 340px;
    }
    .img_glass_cs {
      top: -255px;
      left: 459px;
    }
    .img_hat_cs {
      top: -117px;
      left: 463px;
    }
    .img_shoe_cs {
      top: -212px;
      left: 341px;
    }
  }

  @media screen and (max-width: 769px) {
    .circle_1_cs {
      width: 370px;
      height: 370px;
      top: -182px;
      left: 101px;
    }
    .circle_2_cs {
      top: 145px;
      left: 47px;
      width: 65px;
      height: 65px;
      animation: circle2 2.2s alternate infinite ease-in;
    }

    @keyframes circle2 {
      to {
        top: 108px;
        left: 97px;
      }
      from {
        top: 145px;
        left: 47px;
      }
    }

    .circle_3_cs {
      top: -195px;
      left: 109px;
      width: 45px;
      height: 45px;
      animation: circle3 2.5s alternate infinite ease-in;
    }

    @keyframes circle3 {
      to {
        top: -180px;
        left: 128px;
      }
      from {
        top: -195px;
        left: 109px;
      }
    }
    .img_bag_cs,
    .img_glass_cs,
    .img_hat_cs,
    .img_shoe_cs {
      width: 150px;
    }
    .img_bag_cs {
      top: -72px;
      left: 164px;
    }
    .img_glass_cs {
      top: -227px;
      left: 261px;
    }
    .img_hat_cs {
      top: -101px;
      left: 281px;
    }
    .img_shoe_cs {
      top: -194px;
      left: 149px;
    }
  }

  @media screen and (max-width: 426px) {
    margin-bottom: 70%;
    .circle_1_cs {
      width: 290px;
      height: 290px;
      top: -30px;
      left: 76px;
    }
    .circle_2_cs {
      top: 228px;
      left: 38px;
      width: 55px;
      height: 55px;
      animation: circle2 2.2s alternate infinite ease-in;
    }

    @keyframes circle2 {
      to {
        top: 211px;
        left: 81px;
      }
      from {
        top: 228px;
        left: 38px;
      }
    }

    .circle_3_cs {
      top: -23px;
      left: 354px;
      width: 35px;
      height: 35px;
      animation: circle3 2.5s alternate infinite ease-in;
    }

    @keyframes circle3 {
      to {
        top: 6px;
        left: 334px;
      }
      from {
        top: -23px;
        left: 354px;
      }
    }
    .img_bag_cs,
    .img_glass_cs,
    .img_hat_cs,
    .img_shoe_cs {
      width: 120px;
    }
    .img_bag_cs {
      top: 38px;
      left: 108px;
    }
    .img_glass_cs {
      top: -79px;
      left: 203px;
    }
    .img_hat_cs {
      top: 35px;
      left: 188px;
    }
    .img_shoe_cs {
      top: -70px;
      left: 117px;
    }
  }
  @media screen and (max-width: 376px) {
    margin-bottom: 80%;
    .circle_1_cs {
      width: 260px;
      height: 260px;
      top: -1px;
      left: 65px;
    }
    .circle_2_cs {
      top: 228px;
      left: 38px;
      width: 45px;
      height: 45px;
      animation: circle2 2.2s alternate infinite ease-in;
    }

    @keyframes circle2 {
      to {
        top: 211px;
        left: 81px;
      }
      from {
        top: 228px;
        left: 38px;
      }
    }

    .circle_3_cs {
      top: -23px;
      left: 295px;
      width: 25px;
      height: 25px;
      animation: circle3 2.5s alternate infinite ease-in;
    }

    @keyframes circle3 {
      to {
        top: 6px;
        left: 270px;
      }
      from {
        top: -23px;
        left: 295px;
      }
    }
    .img_bag_cs,
    .img_glass_cs,
    .img_hat_cs,
    .img_shoe_cs {
      width: 100px;
    }
    .img_bag_cs {
      top: 45px;
      left: 108px;
    }
    .img_glass_cs {
      top: -65px;
      left: 191px;
    }
    .img_hat_cs {
      top: 45px;
      left: 188px;
    }
    .img_shoe_cs {
      top: -50px;
      left: 107px;
    }
  }

  @media screen and (max-width: 321px) {
    margin-bottom: 88%;
    .circle_1_cs {
      width: 230px;
      height: 230px;
      top: -1px;
      left: 46px;
    }
    .circle_2_cs {
      top: 228px;
      left: 38px;
      width: 45px;
      height: 45px;
      animation: circle2 2.2s alternate infinite ease-in;
    }

    @keyframes circle2 {
      to {
        top: 211px;
        left: 81px;
      }
      from {
        top: 228px;
        left: 38px;
      }
    }

    .circle_3_cs {
      top: -23px;
      left: 256px;
      width: 25px;
      height: 25px;
      animation: circle3 2.5s alternate infinite ease-in;
    }

    @keyframes circle3 {
      to {
        top: 0px;
        left: 200px;
      }
      from {
        top: -23px;
        left: 256px;
      }
    }
    .img_bag_cs,
    .img_glass_cs,
    .img_hat_cs,
    .img_shoe_cs {
      width: 100px;
    }
    .img_bag_cs {
      top: 35px;
      left: 75px;
    }
    .img_glass_cs {
      top: -65px;
      left: 141px;
    }
    .img_hat_cs {
      top: 35px;
      left: 138px;
    }
    .img_shoe_cs {
      top: -50px;
      left: 70px;
    }
  }
`;

export default ImageContainer;
