import './App.css';
import Content from './components/Content';
import SenderChat from './components/SenderChat';
import RecieverChat from './components/RecieverChat';
import Payment from './components/Payment';
import Images from './components/Images';
import Header from './components/Header';
import InputMessage from './components/InputMessage';

function App() {
  return (
    <div className='app'>
      <div className="mobile-app">
        <div className="mobile-view-chat">
          <Header/>
          <div className="body">
            <RecieverChat chatContent="That sounds great. I’d be happy with that."/>
            <RecieverChat chatContent="Could you send over some pictures of your dog, please?"/>
            <Images/>
            <SenderChat chatContent="Here are a few pictures. She’s a happy girl!" className="sender-1"/>
            <SenderChat chatContent="Can you make it?" className="sender-2"/>
            <RecieverChat chatContent="She looks so happy! The time we discussed works. How long shall I take her out for?" className="reciever-3"/>
            <Payment {...{payContent:"30 minute walk", amount:"$29", className:"payment-1"}}/>
            <Payment {...{payContent:"1 hour walk", amount:"$49", className:"payment-2" }}/>
            <InputMessage/>
          </div>
        </div>
      </div>
      <Content/>
    </div>
  );
}

export default App;
