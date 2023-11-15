import React, { useEffect } from 'react';

function ChatWidget() {
  useEffect(() => {
    var s1 = document.createElement('script');
    s1.type = 'text/javascript';
    s1.async = true;
    s1.src = 'https://embed.tawk.to/654d2bfacec6a912820e59ee/1heqn7js1'; // Update the src with your desired URL
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.getElementsByTagName('head')[0].appendChild(s1);

    return () => {
      // Cleanup the script element if needed
      s1.parentNode.removeChild(s1);
    };
  }, []); 
  return (
    <div>
      {/* Your chat widget UI can be placed here if needed */}
    </div>
  );
}

export default ChatWidget;


