'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';

const CHAT_STYLES = `
  :root {
    --chat--color--primary: #007AFF;
    --chat--color--primary-shade-50: #0063D1;
    --chat--color--primary--shade-100: #0056B8;
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
    --chat--window--width: 380px;
    --chat--window--height: 580px;
    --chat--window--bottom: 24px;
    --chat--window--right: 24px;
    --chat--window--z-index: 9999;
    --chat--window--border: none;
    --chat--window--border-radius: 28px;
    --chat--window--margin-bottom: 0;
    --chat--header-height: auto;
    --chat--header--padding: 20px 20px 16px;
    --chat--header--background: linear-gradient(135deg, #1C1C1E 0%, #2C2C2E 100%);
    --chat--header--color: #FFFFFF;
    --chat--header--border-top: none;
    --chat--header--border-bottom: none;
    --chat--header--border-left: none;
    --chat--header--border-right: none;
    --chat--heading--font-size: 1.25em;
    --chat--subtitle--font-size: 0.8125em;
    --chat--subtitle--line-height: 1.4;
    --chat--message--font-size: 0.9375rem;
    --chat--message--padding: 12px 16px;
    --chat--message--border-radius: 20px;
    --chat--message-line-height: 1.45;
    --chat--message--margin-bottom: 8px;
    --chat--message--bot--background: #F2F2F7;
    --chat--message--bot--color: #1C1C1E;
    --chat--message--bot--border: none;
    --chat--message--user--background: #007AFF;
    --chat--message--user--color: #FFFFFF;
    --chat--message--user--border: none;
    --chat--input--background: #FFFFFF;
    --chat--input--border: 1px solid #E5E5EA;
    --chat--input--border-radius: 24px;
    --chat--input--color: #1C1C1E;
    --chat--input--font-size: 0.9375rem;
    --chat--input--padding: 12px 48px 12px 20px;
    --chat--input--outline: none;
    --chat--input--shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  /* === Chat Window Container === */
  #n8n-chat {
    font-family: var(--chat--font-family) !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* === Chat Bubble / Floating Button === */
  .chat--bubble {
    width: 60px !important;
    height: 60px !important;
    border-radius: 50% !important;
    background: linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(0, 0, 0, 0.1) !important;
    border: none !important;
    bottom: 24px !important;
    right: 24px !important;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
  }

  .chat--bubble:hover {
    transform: scale(1.08) !important;
    box-shadow: 0 6px 28px rgba(0, 0, 0, 0.35) !important;
  }

  .chat--bubble:active {
    transform: scale(0.95) !important;
  }

  .chat--bubble svg {
    width: 28px !important;
    height: 28px !important;
    fill: #FFFFFF !important;
  }

  /* === Chat Window Panel === */
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

  /* === Header === */
  .chat--header {
    background: linear-gradient(135deg, #1C1C1E 0%, #2C2C2E 100%) !important;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.08) !important;
    padding: 20px 20px 16px !important;
  }

  .chat--header-title {
    font-size: 1.125rem !important;
    font-weight: 600 !important;
    letter-spacing: -0.01em !important;
    color: #FFFFFF !important;
  }

  .chat--header-subtitle {
    font-size: 0.8125rem !important;
    color: rgba(255, 255, 255, 0.55) !important;
    margin-top: 2px !important;
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

  /* === Messages Container === */
  .chat--messages {
    background: #FFFFFF !important;
    padding: 16px !important;
    gap: 4px !important;
  }

  /* === Individual Messages === */
  .chat--message {
    max-width: 82% !important;
    padding: 10px 16px !important;
    border-radius: 20px !important;
    font-size: 0.9375rem !important;
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

  /* === Input Area === */
  .chat--input-area {
    background: #FFFFFF !important;
    border-top: 0.5px solid #E5E5EA !important;
    padding: 12px 16px !important;
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
    font-size: 0.9375rem !important;
    padding: 12px 48px 12px 20px !important;
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
    width: 34px !important;
    height: 34px !important;
    min-width: 34px !important;
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
    width: 18px !important;
    height: 18px !important;
    fill: #FFFFFF !important;
  }

  /* === Typing Indicator === */
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

  /* === Welcome Screen === */
  .chat--welcome {
    padding: 32px 24px !important;
    text-align: center !important;
    background: #FFFFFF !important;
  }

  .chat--welcome-title {
    font-size: 1.375rem !important;
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

  /* === Scrollbar (Webkit) === */
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

  /* === Safe area for mobile === */
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    .chat--input-area {
      padding-bottom: calc(12px + env(safe-area-inset-bottom)) !important;
    }
  }

  /* === Powered By === */
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

export default function N8nChat() {
  useEffect(() => {
    let cleanup;

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
      } catch (err) {
        console.error('N8nChat load error:', err);
      }
    };

    loadChat();

    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return null;
}
