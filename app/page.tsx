import ThormeClient from './ThormeClient'
import WinnerModal from './modals/winner/WinnerModal';

export default function Home() {

  const palavra = 'areia';





  return (
    <>
      <ThormeClient />
      <WinnerModal />
    </>
  );
}
