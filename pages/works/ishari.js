import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Kitab ISHARI NU <Badge>Portofolio Projek-</Badge>
      </Title>
      <P>Aplikasi mendengarkan dan membaca shalawat ISHARI NU.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website, Progressive Web Apps (PWA)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Laravel, Inertia, Vite, TailwindCss</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/MrSaan/e-commerce">Source Github</Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/homepage.png" alt="ecommerce" />
      <WorkImage src="/images/works/muhud.png" alt="ecommerce" />
      <WorkImage src="/images/works/pimpinan.png" alt="ecommerce" />
      <WorkImage src="/images/works/lagu.png" alt="ecommerce" />
      <WorkImage src="/images/works/love.png" alt="ecommerce" />
      <WorkImage src="/images/works/muhud mobile.png" alt="ecommerce" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
