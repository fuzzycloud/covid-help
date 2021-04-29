import dynamic from 'next/dynamic';

const App = dynamic(() => import('../components/AppShell'), {
  ssr: false,
});
// import AppShell from '../components/AppShell'
export default function Index() {
  return <App />
}
