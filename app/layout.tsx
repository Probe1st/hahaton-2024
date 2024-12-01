import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Help Desk",
    description: "Приложение для отправки заявок",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`antialiased`}>
                <div className="background">
                    <div className="background__figures">{children}</div>
                </div>
            </body>
        </html>
    );
}
