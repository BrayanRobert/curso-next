// FAQScreen.js
import Footer from '../../components/patterns/Footer';
import Link from '../../components/Link';
import { theme } from '../../theme/theme';
import { Box, Text } from '../../theme/components';

export default function FAQScreen() {
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral["050"]
      }}
    >
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          maxWidth:theme.space.xcontainer_xl,
          marginHorizontal: "auto",
          paddingHorizontal: {
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
          paddingVertical:{
            xs: theme.space.x16,
            lg: theme.space.x20,
          },
        }}
      >
        <Box 
          styleSheet={{
            display: "grid",
            gridTemplateColumns: {
              lg: "repeat(3,minmax(0,1fr))",
            },
            gap: {
              lg: theme.space.x8,
            }
          }}
        >
          <Box>
            <Text
              as="h2"
              styleSheet={{
                textVariant:theme.typography.variants.heading2,
                color:theme.colors.neutral[900],
              }}
            >
            História do Batman
            </Text>
            <Text
              as="p"
              styleSheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              Desenvolvido por Brayan Robert:{' '}
              <Link
                href="https://www.linkedin.com/in/brayan-robert-5b4b69203/"
                styleSheet={{
                  color: theme.colors.primary[400],
                  hover: {
                    color: theme.colors.primary[300],
                  },
                }}
              >
                clique aqui para acessar o linkedIn
              </Link>
            </Text>

            <Text
              as="p"
              styleSheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              <Link
                href="/"
                styleSheet={{
                  color: theme.colors.primary[400],
                  fontWeight: '500',
                  hover: {
                    color: theme.colors.primary[300],
                  },
                }}
              >
                Voltar para home
              </Link>
            </Text>
          </Box>
          <Box
            styleSheet={{
              marginTop: {
                xs: theme.space.x12,
                lg: theme.space.x0,
              },
              gridColumn: {
                lg: "span 2 / span 2;",
              }
            }}
          >          
            <Box as="dl">
              {
                <Box
                  
                  styleSheet={{
                    marginBottom: theme.space.x12,
                  }}
                >
                  <Text
                    as="dt"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading4,
                      color: theme.colors.neutral[900],
                    }}
                  >
                    Quem é Batman?
                  </Text>
                  <Text
                    as="dd"
                    styleSheet={{
                      marginTop: theme.space.x2,
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral[500],
                    }}
                  >
                    Bruce Wayne é um bilionário americano, magnata de negócios, filantropo e dono da corporação Wayne Enterprises. Sua história teve início após testemunhar o assassinato de seus pais ainda quando criança, o que o fez jurar vingança contra os criminosos e treinar todos os dias sozinho, além de criar um personagem baseado em um morcego para combater o crime. Foi aí que surgiu Batman, o super-herói da cidade de Gotham.
                  </Text>
                  <Text
                    as="dt"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading4,
                      color: theme.colors.neutral[900],
                    }}
                  >
                    Como ele combate o crime?
                  </Text>
                  <Text
                    as="dd"
                    styleSheet={{
                      marginTop: theme.space.x2,
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral[500],
                    }}
                  >
                    Apesar de não ter superpoderes, Batman faz uso de seu intelecto, conhecimento em artes marciais, destreza física e habilidades de detetive. Mesmo tendo uma grande variedade de vilões como inimigos, incluindo o grande destaque, Coringa, Batman é ajudado por vários personagens incluindo o mordomo Alfred Pennyworth, o comissário de polícia Jim Gordon e outros aliados como Robin.
                  </Text>
                  <Text
                    as="dt"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading4,
                      color: theme.colors.neutral[900],
                    }}
                  >
                    Como Batman se mostra na sociedade?
                  </Text>
                  <Text
                    as="dd"
                    styleSheet={{
                      marginTop: theme.space.x2,
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral[500],
                    }}
                  >
                    Bruce Wayne mostra-se à sociedade como um playboy irresponsável e superficial rico, porém ele também é conhecido por contribuir para a caridade através da Fundação Wayne para ajudar vítimas de crimes e impedir a entrada no crime de jovens. Essa personalidade foi criada para que as pessoas não desconfiassem de seu alter ego.

                    Enquanto Bruce Wayne é despreocupado e irresponsável, Batman é frio, determinado e implacável. Além do uniforme e da máscara, quando Batman, Wayne altera sua voz para ficar cada vez mais irreconhecível!
                  </Text>
                  
                </Box>
                
              }
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer /> 
    </Box>
  )
}

FAQScreen.defaultProps = {
  faqs: [],
};