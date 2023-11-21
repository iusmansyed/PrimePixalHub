import React, { useEffect } from 'react';

function ChatWidget() {
  useEffect(() => {
    const scriptElement = document.createElement('script');

    scriptElement.type = 'text/javascript';
    scriptElement.async = true;
    scriptElement.src = 'https://embed.tawk.to/654d2bfacec6a912820e59ee/1heqn7js1'; // Update the src with your desired URL
    scriptElement.charset = 'UTF-8';
    scriptElement.setAttribute('crossorigin', '*');
    document.head.appendChild(scriptElement);
    return () => {
      scriptElement.parentNode.removeChild(scriptElement);
    };
  }, []); 
  return (
    <div>
      {/* Your chat widget UI can be placed here if needed */}
    </div>
  );
}

export default ChatWidget;



