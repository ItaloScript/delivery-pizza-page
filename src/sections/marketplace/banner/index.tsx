import {
  Title,
  StoreInfoContainer,
  ContainerFoodImages,
  BannerContainer,
  Description,
  TomatoImage,
  TomatoShadowImage,
  PizzaImage,
  CrocGroupImage,
  PepinoImage,
  MushroomImage
} from './styles';

export default function BannerMarketPlace() {

  return <BannerContainer>
    <StoreInfoContainer>
      <Title variant='h3'>
        Delivery em Curitiba
      </Title>
      <Description variant="body2">
        Se você decidir relaxar ou tiver convidados inesperados, ligue para nós. Garantimos <br />
        que suas férias sejam confortáveis, agradáveis e deliciosas.
      </Description>
    </StoreInfoContainer>
    <ContainerFoodImages>
      <CrocGroupImage
        src="/assets/marketplace/banner/Group_15.png"
      />

      <PizzaImage src="/assets/marketplace/banner/pizza.png" />

      <TomatoShadowImage
        src="/assets/marketplace/banner/tomato-shadow.svg"
      />

      <TomatoImage src="/assets/marketplace/banner/tomato.png" />

      <PepinoImage src="/assets/marketplace/banner/pepino.png" />

      <MushroomImage src="/assets/marketplace/banner/mushroom.png" />

      <img src="/assets/marketplace/banner/Group2.svg"
        width={200}
        style={{
          position: 'absolute',
          marginRight: -1050,
          bottom: 20,
        }}
      />


    </ContainerFoodImages>
  </BannerContainer>
}