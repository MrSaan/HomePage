import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Surabaya!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            M. Amar Firmansyah
          </Heading>
          <p>Website Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/me_2.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Amar adalah Software Engineer berbasis di Surabaya, Jawa Timur. Tertarik dengan membuat produk, mulai dari merencanakan dan mendesain hingga memecahkan masalah kehidupan nyata dengan kode. dasar kemampuan manajemen dan pengalaman menulis kode memberikan kepercayaan saya untuk bekerja dalam tim dengan memberikan dukungan yang berharga bagi perusahaan.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Lahir di Surabaya, Jawa Timur, Indoneisa
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Menyelesaikan Pendidikan Sekolah Menengah Kejuruan di Surabaya, di SMKN 1 Surabaya mengambil jurusan Rekayasa Perangkat Lunak (RPL). lulus dengan nilai yang baik setelah menyelesaikan LSP (Lembaga Sertifikasi Profesi) RPL / Software Engineer
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Magang di Campus Impian, ITS Surabaya sebagai website developer. Membuat Aplikasi surat masuk dan keluar mahasiswa fakultas informatika.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Lulus dari perguruan tinggi &apos;Sarjana Sosia&apos;.
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Seni, Musik,{' '}
          Playing Games,{' '}
          <Link href="https://www.instagram.com/amar_firmansyah_/" target="_blank">
            Photography
          </Link>
          , Membaca
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/MrSaan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @MrSaan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/M_AmarF" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @M_AmarF
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/amar_firmansyah_/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @.amar_firmansyah
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
