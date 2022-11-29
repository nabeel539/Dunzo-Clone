import React from 'react';
import AppDownload from '../components/app-download';
import Footer from '../components/footer';
import Header from '../components/header';
import MainFold from '../components/mainfold';
import TopPicks from '../components/top-picks';


const Home= () => {
  return (
    <div className='homepage'>
    <Header/>
    <MainFold/>
    <TopPicks/>
    <AppDownload/>
    <Footer/>
    </div>
  );
};

export default Home;