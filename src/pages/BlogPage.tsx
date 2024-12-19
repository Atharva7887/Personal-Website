import Navbar from '../components/navigation/Navbarblog';
import BlogContent from '../components/blog/BlogContent';
import Footer from '../components/blog/BlogFooter';
import { BlogBackground } from '../components/backgrounds/BlogBackground';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative pt-24 pb-20">
        <BlogBackground />
        <BlogContent />
      </main>
      <Footer />
    </div>
  );
}