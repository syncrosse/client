import { useEffect, useState } from 'react';
import { Syncrosse } from './Syncrosse';

export function useSyncrosse() {
  const [messages, setMessages] = useState<string[]>([]);
  const [syncrosse] = useState<Syncrosse>(new Syncrosse('general'));

  useEffect(() => {
    syncrosse.onEvent('chat', (message) => setMessages((oldMessages) => [...oldMessages, message]));
  }, [setMessages]);

  return { messages, syncrosse };
}
