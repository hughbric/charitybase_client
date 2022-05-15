import 'tailwindcss/tailwind.css';
import MainLayout from '@/layouts/MainLayout';

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
