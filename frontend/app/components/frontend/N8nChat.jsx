'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';

const CHAT_STYLES = `
  :root {
    --chat--color--primary: #20413A;
    --chat--color--primary-shade-50: #20413A;
    --chat--color--primary--shade-100: #20413A;
    --chat--color--secondary: #34C759;
    --chat--color-white: #FFFFFF;
    --chat--color-light: #F2F2F7;
    --chat--color-light-shade-50: #E5E5EA;
    --chat--color-light-shade-100: #C7C7CC;
    --chat--color-medium: #D1D1D6;
    --chat--color-dark: #1C1C1E;
    --chat--color-disabled: #D1D1D6;
    --chat--color-typing: #8E8E93;
    --chat--spacing: 1rem;
    --chat--border-radius: 22px;
    --chat--transition-duration: 0.3s;
    --chat--font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif;
    --chat--font-family--monospace: 'SF Mono', ui-monospace, Menlo, Consolas, monospace;
    --chat--window--width: 340px;
    --chat--window--height: 500px;
    --chat--window--bottom: 100px;
    --chat--window--right: 16px;
    --chat--window--z-index: 9999;
    --chat--window--border: none;
    --chat--window--border-radius: 28px;
    --chat--window--margin-bottom: 0;
    --chat--header-height: auto;
    --chat--header--padding: 16px 16px 12px;
    --chat--header--background: linear-gradient(135deg, #1C1C1E 0%, #2C2C2E 100%);
    --chat--header--color: #FFFFFF;
    --chat--header--border-top: none;
    --chat--header--border-bottom: none;
    --chat--header--border-left: none;
    --chat--header--border-right: none;
    --chat--heading--font-size: 1.05em;
    --chat--subtitle--font-size: 0.75em;
    --chat--subtitle--line-height: 1.4;
    --chat--message--font-size: 0.85rem;
    --chat--message--padding: 8px 14px;
    --chat--message--border-radius: 16px;
    --chat--message-line-height: 1.45;
    --chat--message--margin-bottom: 8px;
    --chat--message--bot--background: #F2F2F7;
    --chat--message--bot--color: #1C1C1E;
    --chat--message--bot--border: none;
    --chat--message--user--background: #20413A;
    --chat--message--user--color: #FFFFFF;
    --chat--message--user--border: none;
    --chat--input--background: #FFFFFF;
    --chat--input--border: 1px solid #E5E5EA;
    --chat--input--border-radius: 24px;
    --chat--input--color: #1C1C1E;
    --chat--input--font-size: 0.85rem;
    --chat--input--padding: 10px 44px 10px 16px;
    --chat--input--outline: none;
    --chat--input--shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  #n8n-chat {
    font-family: var(--chat--font-family) !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .chat--window {
    border-radius: 28px !important;
    overflow: hidden !important;
    box-shadow:
      0 25px 60px rgba(0, 0, 0, 0.2),
      0 0 0 0.5px rgba(0, 0, 0, 0.08),
      inset 0 0.5px 0 rgba(255, 255, 255, 0.1) !important;
    border: none !important;
    backdrop-filter: blur(40px) !important;
    -webkit-backdrop-filter: blur(40px) !important;
  }

  .chat--header {
    background: linear-gradient(135deg, #1C1C1E 0%, #2C2C2E 100%) !important;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.08) !important;
    padding: 16px 16px 12px !important;
  }

  .chat--header-title {
    font-size: 1rem !important;
    font-weight: 600 !important;
    letter-spacing: -0.01em !important;
    color: #FFFFFF !important;
  }

  .chat--header-subtitle {
    font-size: 0.75rem !important;
    color: rgba(255, 255, 255, 0.55) !important;
    top: 2px !important;
    font-weight: 400 !important;
  }

  .chat--header-close-button {
    color: rgba(255, 255, 255, 0.55) !important;
    transition: all 0.2s !important;
    width: 30px !important;
    height: 30px !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: rgba(255, 255, 255, 0.1) !important;
    border: none !important;
    cursor: pointer !important;
    padding: 0 !important;
  }

  .chat--header-close-button:hover {
    color: #FFFFFF !important;
    background: rgba(255, 255, 255, 0.2) !important;
  }

  .chat--header-close-button > * {
    display: none !important;
  }

  .chat--header-close-button::after {
    content: '✕' !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    line-height: 1 !important;
  }

  .chat--messages {
    background: #FFFFFF !important;
    padding: 12px !important;
    gap: 4px !important;
  }

  .chat--message {
    max-width: 82% !important;
    padding: 8px 14px !important;
    border-radius: 16px !important;
    font-size: 0.85rem !important;
    line-height: 1.45 !important;
    letter-spacing: -0.01em !important;
    animation: messageSlideIn 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
    word-wrap: break-word !important;
  }

  @keyframes messageSlideIn {
    from {
      opacity: 0;
      transform: translateY(8px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .chat--message-from-bot {
    background: #F2F2F7 !important;
    color: #1C1C1E !important;
    border-bottom-left-radius: 6px !important;
    align-self: flex-start !important;
  }

  .chat--message-from-user {
    background: linear-gradient(135deg, #007AFF 0%, #0056B8 100%) !important;
    color: #FFFFFF !important;
    border-bottom-right-radius: 6px !important;
    align-self: flex-end !important;
    margin-left: auto !important;
  }

  .chat--input-area {
    background: #FFFFFF !important;
    border-top: 0.5px solid #E5E5EA !important;
    padding: 10px 12px !important;
  }

  .chat--input-wrapper {
    background: #F2F2F7 !important;
    border-radius: 24px !important;
    border: none !important;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    transition: box-shadow 0.2s !important;
  }

  .chat--input-wrapper:focus-within {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04), 0 0 0 3px rgba(0, 122, 255, 0.15) !important;
  }

  .chat--input {
    background: transparent !important;
    border: none !important;
    outline: none !important;
    color: #1C1C1E !important;
    font-size: 0.85rem !important;
    padding: 10px 44px 10px 16px !important;
    font-family: var(--chat--font-family) !important;
    -webkit-appearance: none !important;
  }

  .chat--input::placeholder {
    color: #8E8E93 !important;
  }

  .chat--input-send-button {
    background: #007AFF !important;
    border: none !important;
    border-radius: 50% !important;
    width: 30px !important;
    height: 30px !important;
    min-width: 30px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: all 0.2s !important;
    box-shadow: 0 2px 8px rgba(0, 122, 255, 0.3) !important;
  }

  .chat--input-send-button:hover {
    background: #0056B8 !important;
    transform: scale(1.05) !important;
  }

  .chat--input-send-button:active {
    transform: scale(0.92) !important;
  }

  .chat--input-send-button svg {
    width: 16px !important;
    height: 16px !important;
    fill: #FFFFFF !important;
  }

  .chat--typing-indicator {
    display: flex !important;
    gap: 4px !important;
    padding: 14px 18px !important;
    align-items: center !important;
  }

  .chat--typing-indicator-dot {
    width: 7px !important;
    height: 7px !important;
    border-radius: 50% !important;
    background: #8E8E93 !important;
    animation: typingBounce 1.4s ease-in-out infinite !important;
  }

  .chat--typing-indicator-dot:nth-child(2) {
    animation-delay: 0.2s !important;
  }

  .chat--typing-indicator-dot:nth-child(3) {
    animation-delay: 0.4s !important;
  }

  @keyframes typingBounce {
    0%, 60%, 100% {
      transform: translateY(0);
      opacity: 0.4;
    }
    30% {
      transform: translateY(-4px);
      opacity: 1;
    }
  }

  .chat--welcome {
    padding: 24px 18px !important;
    text-align: center !important;
    background: #FFFFFF !important;
  }

  .chat--welcome-title {
    font-size: 1.15rem !important;
    font-weight: 700 !important;
    color: #1C1C1E !important;
    letter-spacing: -0.02em !important;
    margin-bottom: 6px !important;
  }

  .chat--welcome-subtitle {
    font-size: 0.875rem !important;
    color: #8E8E93 !important;
    line-height: 1.5 !important;
  }

  .chat--messages::-webkit-scrollbar {
    width: 4px !important;
  }

  .chat--messages::-webkit-scrollbar-track {
    background: transparent !important;
  }

  .chat--messages::-webkit-scrollbar-thumb {
    background: #D1D1D6 !important;
    border-radius: 4px !important;
  }

  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    .chat--input-area {
      padding-bottom: calc(12px + env(safe-area-inset-bottom)) !important;
    }
  }

  .chat-footer {
    display: block !important;
    background: #FFFFFF !important;
    border-top: 0.5px solid #E5E5EA !important;
    text-align: center !important;
    padding: 8px 0 !important;
  }

  .chat-get-started-footer {
    display: block !important;
    background: #FFFFFF !important;
    padding: 8px 0 !important;
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
`;

function findBubbleInShadow(root) {
  if (!root) return null;
  const el = root.querySelector('.chat--bubble');
  if (el) return el;
  const allElements = root.querySelectorAll('*');
  for (const child of allElements) {
    if (child.shadowRoot) {
      const found = findBubbleInShadow(child.shadowRoot);
      if (found) return found;
    }
  }
  return null;
}

function styleBubble(bubble) {
  if (!bubble) return;
  bubble.style.setProperty('width', '14px', 'important');
  bubble.style.setProperty('height', '14px', 'important');
    bubble.style.setProperty('bottom', '240px', 'important');
  bubble.style.setProperty('right', '20px', 'important');

  const svg = bubble.querySelector('svg');
  if (svg) {
    svg.style.setProperty('width', '14px', 'important');
    svg.style.setProperty('height', '14px', 'important');
  }
}

export default function N8nChat() {
  useEffect(() => {
    let cleanup;
    let observer;

    const loadChat = async () => {
      try {
        const styleEl = document.createElement('style');
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

        const tryStyle = () => {
          const bubble = findBubbleInShadow(document.body) || document.querySelector('.chat--bubble');
          if (bubble) {
            styleBubble(bubble);
          }
        };

        tryStyle();
        observer = new MutationObserver(tryStyle);
        observer.observe(document.body, { childList: true, subtree: true });
      } catch (err) {
        console.error('N8nChat load error:', err);
      }
    };

    loadChat();

    return () => {
      if (typeof cleanup === 'function') cleanup();
      if (observer) observer.disconnect();
    };
  }, []);

  return null;
}
