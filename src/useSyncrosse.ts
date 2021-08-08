import { useEffect, useState } from 'react';
import { Syncrosse } from './Syncrosse';
import { Message } from './types';

export function useSyncrosse(lobbyId: string = '', name: string = 'guest') {
  const [messages, setMessages] = useState<Message[]>([]);
  const [syncrosse, setSyncrosse] = useState<Syncrosse | null>(null);

  useEffect(() => {
    setSyncrosse(new Syncrosse(lobbyId, name));
  }, []);

  useEffect(() => {
    if (!syncrosse) return;

    syncrosse.onMessage((message) => setMessages((oldMessages) => [...oldMessages, message]));
  }, [syncrosse, setMessages]);

  return { messages, syncrosse };
}
