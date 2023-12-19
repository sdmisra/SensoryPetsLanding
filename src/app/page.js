import Header from "./components/Header"
import Footer from "./components/Footer"
import HeroSection from "./components/Hero/HeroSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <HeroSection />
      <Footer />
    </main>
  )
}
