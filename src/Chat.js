import React, { useState, useEffect } from 'react';
import './Chat.css';
import firebase from 'firebase';
import { useParams } from 'react-router-dom';
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import db from './firebase';
// import database from './firebase';

import Message from './Message';
import ChatInput from './ChatInput';

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  //   const ref = database.ref('chat');
  //   const data = {
  //     name: 'mahmoud and ayan and carmen ',
  //     love: '100% hopefully ',
  //   };
  //   ref.push(data);

  useEffect(() => {
    // console.log(roomId);
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data())),
      );
  }, [roomId]);

  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__headerLeft'>
          <h4 className='chat__channelName'>
            <strong> #{roomDetails?.name} </strong>
            {/* <strong>#general</strong> */}
            <StarBorderOutlined />
          </h4>
        </div>

        <div className='chat__headerRight'>
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>

      <div className='chat__messages'>
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
};

export default Chat;
