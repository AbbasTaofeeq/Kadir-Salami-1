declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.module.css';
declare module '*.module.scss';
declare module '*.module.sass';

/** Response returned by the EmailJS browser SDK. */
interface EmailJSResponse {
  status: number;
  text: string;
}

/** The subset of the CDN-loaded EmailJS browser SDK that this app uses. */
interface EmailJS {
  init(publicKey: string): void;
  send(
    serviceId: string,
    templateId: string,
    templateParams: Record<string, unknown>,
  ): Promise<EmailJSResponse>;
}

interface Window {
  emailjs?: EmailJS;
}