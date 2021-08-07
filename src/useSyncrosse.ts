import { useEffect, useState } from 'react';
import { Syncrosse } from './Syncrosse';
import { Message } from './types';

export function useSyncrosse(lobbyId: string = '') {
  const [messages, setMessages] = useState<Message[]>([]);
  const [syncrosse] = useState<Syncrosse>(new Syncrosse(lobbyId));

  useEffect(() => {
    syncrosse.onEvent('chat', (message) => setMessages((oldMessages) => [...oldMessages, message]));
  }, [setMessages]);

  return { messages, syncrosse };
}
