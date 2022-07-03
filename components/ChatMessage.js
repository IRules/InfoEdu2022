import React from 'react';
import styles from '../styles/ChatMessage.module.css';

function ChatMessage(props) {
  return (
    <div className={styles.chatMessage}>
      <span data-testid="tail-in" data-icon="tail-in">
        <svg viewBox="0 0 8 13" width="8" height="13">
          <path
            opacity=".13"
            fill="#9fa2a8"
            d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
          ></path>
          <path
            fill="#9fa2a8"
            d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
          ></path>
        </svg>
      </span>
      <div className={styles.chatMessage__bubble}>
        <div className={styles.chatMessage__bubbleTitle}>{props.name}</div>
        {props.text}
      </div>
    </div>
  );
}

export default ChatMessage;
