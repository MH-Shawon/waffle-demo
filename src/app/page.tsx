import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CustomerReviews from "@/components/CustomerReviews";
import Gallery from "@/components/Gallery";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SignatureCardsStack from "@/components/SignatureCardsStack";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[350px]"></div>
      <Hero />
      <SignatureCardsStack />
      <Container>
        <Menu />
      </Container>
      <Container>
        <CustomerReviews />
      </Container>
      <Container>
        <Gallery />
      </Container>
      <Container>
        <Branches />
      </Container>
      <Footer />
    </main>
  );
}
