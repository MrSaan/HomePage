import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        E-Commerce <Badge>Portofolio Projek-</Badge>
      </Title>
      <P>
        Aplikasi toko baju online. <br />
        terintegrasi dengan Midtrans sebagai alat pembayaran. terintegrasi
        dengan Mailchimp untuk manajemen email. responsive terhadap mobile
        device / tablet
        <Link href="https://drive.google.com/file/d/1vonVRSV8lUtESLZ0EYTwWppuXhHDGnaz/view?usp=sharing">
          lebih lanjut
        </Link>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Laravel, Livewire, TailwindCss, Docker</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/MrSaan/e-commerce">
            Aplikasi belanja online
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ecommerce_1.png" alt="ecommerce" />
      <WorkImage src="/images/works/ecom_6.png" alt="ecommerce" />
      <WorkImage src="/images/works/ecom_2.png" alt="ecommerce" />
      <WorkImage src="/images/works/ecom_3.png" alt="ecommerce" />
      <WorkImage src="/images/works/ecom_4.png" alt="ecommerce" />
      <WorkImage src="/images/works/ecom_5.png" alt="ecommerce" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
