import { styled } from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  position: relative;

  .circle_1_cs,
  .circle_2_cs,
  .circle_3_cs {
    position: absolute;
    background-color: #d9aa77;
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

  @media screen and (max-width: 1024px) {
    .circle_1_cs {
      width: 400px;
      height: 400px;
      left: 290px;
    }
    .img_bag_cs,
    .img_glass_cs,
    .img_hat_cs,
    .img_shoe_cs {
      width: 20px;
    }
  }
`;

export default ImageContainer;
