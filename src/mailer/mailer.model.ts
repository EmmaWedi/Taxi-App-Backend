export interface messageInterface  {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
    attachments?: any[];
}