import { Box, Typography } from "@mui/material";
import { CategoryTab, CategoryTabs, ContainerSection, ProductsContainer } from "./styles";
import { ProductCard } from "./product-card";
import { useProducts } from "@/context/products";
import { useState } from "react";
import getPriceBRL from "@/functions/getPriceBRL";

export default function Products() {

  const { products, toggleFilterByFavorite } = useProducts()

  const [valueTab, setValueTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
    toggleFilterByFavorite()
  };

  return <ContainerSection>
    <Typography
      variant="h3"
      fontWeight={600}
    >
      Produtos
    </Typography>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <CategoryTabs value={valueTab} onChange={handleChange} textColor="primary" indicatorColor="primary" variant="fullWidth">
        <CategoryTab label="Todos" />
        <CategoryTab label="Favoritos" />
      </CategoryTabs>
    </Box>

    <ProductsContainer>
      {
        products.map((product) => {

          const lastFavoritedUpdate = product.lastFavoritedUpdate ? new Date(product.lastFavoritedUpdate) : undefined
          const updateFavoriteText = product?.favorited ? 'Favoritado ' : 'Desfavoritado '
          const updateFavoriteDate = lastFavoritedUpdate?.toLocaleDateString()
          const updateFavoriteTime = lastFavoritedUpdate?.toLocaleString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
          })

          return (
            <ProductCard.Item key={product.id} isFavorited={product.favorited}>
              <ProductCard.CountdownUpdate
                updatedAt={lastFavoritedUpdate?.getTime()}
              />
              <ProductCard.Photo src={product.image} />
              <ProductCard.Title>
                {product.title}
              </ProductCard.Title>
              <ProductCard.Description>
                {product.description}
              </ProductCard.Description>

              {
                product?.lastFavoritedUpdate && <ProductCard.UpdatedAtMutedText >
                  {updateFavoriteText} em {updateFavoriteDate} - {updateFavoriteTime}
                </ProductCard.UpdatedAtMutedText>
              }
              <ProductCard.Price>
                {getPriceBRL(product.price)}
              </ProductCard.Price>
              <ProductCard.FavoriteButton productId={product.id} />
            </ProductCard.Item>
          )
        })
      }
    </ProductsContainer>
  </ContainerSection>
}