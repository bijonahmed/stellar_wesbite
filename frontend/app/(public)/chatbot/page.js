'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import '@n8n/chat/style.css';

const CHAT_STYLES = `
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden !important;
  }

  .chat-window-wrapper {
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 99999 !important;
  }

  .chat-window-toggle {
    display: none !important;
  }

  .chat-window {
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    border: none !important;
    overflow: hidden !important;
    margin: 0 !important;
    background: #fff !important;
  }

  .chat-header,
  .chat--header {
    background: linear-gradient(135deg, #1C1C1E 0%, #2C2C2E 100%) !important;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.08) !important;
    padding: 20px 20px 16px !important;
    border-radius: 0 !important;
    flex-shrink: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
  }

  .chat-heading,
  .chat--heading {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
  }

  .chat-header h1,
  .chat--header h1 {
    color: #FFFFFF !important;
    font-size: 1.125rem !important;
    font-weight: 600 !important;
    letter-spacing: -0.01em !important;
    margin: 0 !important;
  }

  .chat-header p,
  .chat--header p {
    color: rgba(255, 255, 255, 0.55) !important;
    font-size: 0.8125rem !important;
    margin: 2px 0 0 !important;
  }

  .chat-close-button,
  .chat--close-button {
    display: none !important;
  }

  .chat-body,
  .chat--body {
    background: #FFFFFF !important;
    flex: 1 !important;
    overflow-y: auto !important;
    display: flex !important;
    flex-direction: column !important;
  }

  .chat-messages,
  .chat--messages {
    background: #FFFFFF !important;
    padding: 16px !important;
    gap: 4px !important;
    flex: 1 !important;
    overflow-y: auto !important;
    display: flex !important;
    flex-direction: column !important;
  }

  .chat-message,
  .chat--message {
    max-width: 82% !important;
    padding: 10px 16px !important;
    border-radius: 20px !important;
    font-size: 0.9375rem !important;
    line-height: 1.45 !important;
    letter-spacing: -0.01em !important;
    word-wrap: break-word !important;
  }

  .chat-message-from-bot,
  .chat--message-from-bot {
    background: #F2F2F7 !important;
    color: #1C1C1E !important;
    border-bottom-left-radius: 6px !important;
    align-self: flex-start !important;
  }

  .chat-message-from-user,
  .chat--message-from-user {
    background: linear-gradient(135deg, #007AFF 0%, #0056B8 100%) !important;
    color: #FFFFFF !important;
    border-bottom-right-radius: 6px !important;
    align-self: flex-end !important;
    margin-left: auto !important;
  }

  .chat-input-area,
  .chat--input-area,
  .chat-footer,
  .chat--footer {
    background: #FFFFFF !important;
    border-top: 0.5px solid #E5E5EA !important;
    padding: 12px 16px !important;
    flex-shrink: 0 !important;
  }

  .chat-input-wrapper,
  .chat--input-wrapper {
    background: #F2F2F7 !important;
    border-radius: 24px !important;
    border: none !important;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    transition: box-shadow 0.2s !important;
  }

  .chat-input-wrapper:focus-within,
  .chat--input-wrapper:focus-within {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04), 0 0 0 3px rgba(0, 122, 255, 0.15) !important;
  }

  .chat-input,
  .chat--input {
    background: transparent !important;
    border: none !important;
    outline: none !important;
    color: #1C1C1E !important;
    font-size: 0.9375rem !important;
    padding: 12px 48px 12px 20px !important;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif !important;
    -webkit-appearance: none !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  .chat-input::placeholder,
  .chat--input::placeholder {
    color: #8E8E93 !important;
  }

  .chat-input-send-button,
  .chat--input-send-button {
    background: #007AFF !important;
    border: none !important;
    border-radius: 50% !important;
    width: 34px !important;
    height: 34px !important;
    min-width: 34px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: all 0.2s !important;
    box-shadow: 0 2px 8px rgba(0, 122, 255, 0.3) !important;
  }

  .chat-input-send-button:hover,
  .chat--input-send-button:hover {
    background: #0056B8 !important;
    transform: scale(1.05) !important;
  }

  .chat-input-send-button:active,
  .chat--input-send-button:active {
    transform: scale(0.92) !important;
  }

  .chat-input-send-button svg,
  .chat--input-send-button svg {
    width: 18px !important;
    height: 18px !important;
    fill: #FFFFFF !important;
  }

  .chat-typing-indicator,
  .chat--typing-indicator {
    display: flex !important;
    gap: 4px !important;
    padding: 14px 18px !important;
    align-items: center !important;
  }

  .chat-typing-indicator-dot,
  .chat--typing-indicator-dot {
    width: 7px !important;
    height: 7px !important;
    border-radius: 50% !important;
    background: #8E8E93 !important;
    animation: typingBounce 1.4s ease-in-out infinite !important;
  }

  .chat-typing-indicator-dot:nth-child(2),
  .chat--typing-indicator-dot:nth-child(2) { animation-delay: 0.2s !important; }
  .chat-typing-indicator-dot:nth-child(3),
  .chat--typing-indicator-dot:nth-child(3) { animation-delay: 0.4s !important; }

  @keyframes typingBounce {
    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
    30% { transform: translateY(-4px); opacity: 1; }
  }

  .chat-welcome,
  .chat--welcome,
  .chat-get-started {
    padding: 40px 24px !important;
    text-align: center !important;
    background: #FFFFFF !important;
    flex: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .chat-welcome h1,
  .chat--welcome h1,
  .chat-get-started h1 {
    font-size: 1.5rem !important;
    font-weight: 700 !important;
    color: #1C1C1E !important;
    letter-spacing: -0.02em !important;
    margin-bottom: 6px !important;
  }

  .chat-welcome p,
  .chat--welcome p,
  .chat-get-started p {
    font-size: 0.9375rem !important;
    color: #8E8E93 !important;
    line-height: 1.5 !important;
  }

  .chat-button {
    background: #007AFF !important;
    color: #FFFFFF !important;
    border: none !important;
    border-radius: 12px !important;
    padding: 12px 32px !important;
    font-size: 0.9375rem !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: all 0.2s !important;
    margin-top: 20px !important;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif !important;
  }

  .chat-button:hover {
    background: #0056B8 !important;
    transform: scale(1.02) !important;
  }

  .chat-button:active {
    transform: scale(0.98) !important;
  }

  .chat-get-started-footer {
    display: block !important;
    background: #FFFFFF !important;
    padding: 8px 0 !important;
    text-align: center !important;
    flex-shrink: 0 !important;
  }

  .chat-powered-by {
    font-size: 0 !important;
    line-height: 0 !important;
    background: #FFFFFF !important;
    padding: 6px 0 !important;
    text-align: center !important;
  }

  .chat-powered-by a {
    display: none !important;
  }

  .chat-powered-by::after {
    content: 'Powered by USASKILLSINC' !important;
    font-size: 0.6875rem !important;
    line-height: 1.4 !important;
    color: #8E8E93 !important;
    font-weight: 400 !important;
  }

  @media (max-width: 640px) {
    .chat-message,
    .chat--message {
      max-width: 90% !important;
    }
    .chat-header,
    .chat--header {
      padding: 16px 16px 12px !important;
    }
    .chat-messages,
    .chat--messages {
      padding: 12px !important;
    }
    .chat-input-area,
    .chat--input-area,
    .chat-footer,
    .chat--footer {
      padding: 8px 12px !important;
    }
    .chat-welcome,
    .chat--welcome,
    .chat-get-started {
      padding: 24px 16px !important;
    }
    .chat-welcome h1,
    .chat--welcome h1,
    .chat-get-started h1 {
      font-size: 1.25rem !important;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .chat-message,
    .chat--message {
      max-width: 75% !important;
    }
  }

  @media (min-width: 1025px) {
    .chat-messages,
    .chat--messages {
      padding: 24px 32px !important;
      max-width: 900px !important;
      margin: 0 auto !important;
      width: 100% !important;
    }
    .chat-message,
    .chat--message {
      max-width: 65% !important;
    }
  }
`;

const BACK_HOME_STYLES = `
  .back-to-home {
    position: fixed !important;
    top: 18px !important;
    right: 20px !important;
    z-index: 100000 !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
    padding: 9px 18px !important;
    border-radius: 20px !important;
    background: rgba(255, 255, 255, 0.12) !important;
    border: 0.5px solid rgba(255, 255, 255, 0.15) !important;
    color: #FFFFFF !important;
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    text-decoration: none !important;
    cursor: pointer !important;
    transition: all 0.2s !important;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif !important;
    backdrop-filter: blur(8px) !important;
    -webkit-backdrop-filter: blur(8px) !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
  }

  .back-to-home:hover {
    background: rgba(255, 255, 255, 0.22) !important;
    transform: scale(1.03) !important;
  }

  .back-to-home:active {
    transform: scale(0.97) !important;
  }

  @media (max-width: 640px) {
    .back-to-home {
      top: 12px !important;
      right: 16px !important;
      padding: 7px 14px !important;
      font-size: 0.8125rem !important;
    }
  }
`;

export default function ChatboxPage() {
  useEffect(() => {
    let cleanup;
    let styleEl;

    const loadChat = async () => {
      try {
        styleEl = document.createElement('style');
        styleEl.id = 'n8n-chat-fullscreen';
        styleEl.textContent = CHAT_STYLES;
        document.head.appendChild(styleEl);

        const { createChat } = await import('@n8n/chat');

        cleanup = createChat({
          webhookUrl: 'https://n8n.srv1106977.hstgr.cloud/webhook/d6347915-48ea-412a-8b88-fe04264f7eee/chat',
          mode: 'window',
          showWelcomeScreen: true,
          initialMessages: [
            'Hello! 👋',
            'How can I help you today?'
          ],
          loadPreviousSession: false,
        });

        setTimeout(() => {
          const toggle = document.querySelector('.chat-window-toggle');
          if (toggle) toggle.click();
        }, 300);
      } catch (err) {
        console.error('Chatbox load error:', err);
      }
    };

    loadChat();

    return () => {
      if (typeof cleanup === 'function') cleanup();
      if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
    };
  }, []);

  return (
    <>
      <style>{BACK_HOME_STYLES}</style>
      <Link href="/" className="back-to-home" aria-label="Back to home">
        ← Back to Home
      </Link>
    </>
  );
}
