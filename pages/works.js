import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/ecommerce_1.png'
import thumbWalknote from '../public/images/works/ishari_1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ecommerce" title="E-Commerce" thumbnail={thumbInkdrop}>
            Aplikasi toko baju online + terintegrasi dengan payment gateway dan manajemen email
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="ishari"
            title="kitab shalawat ISHARI NU"
            thumbnail={thumbWalknote}
          >
            Aplikasi membaca dan mendengarkan shalawat ISHARI NU
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
