# Sử dụng Next.js với .NET Framework

![](https://assets.vercel.com/image/upload/v1662090959/front/nextjs/twitter-card.png)

## Giới Thiệu {#intro}

Next.js là gì? Next.js là một React framework giúp bạn tạo ra ứng dụng web (Web Application) một cách nhanh chóng và thuận tiện vì Next.js hỗ trợ rất nhiều công cụ hữu ích trong mà các bạn cần trong quá trình làm ra một Web App. Nó có thể tạo ra một ứng dụng web react full-stack với những công cụ mà nó hỗ trợ! Từ Client and Server Rendering, Dynamic Routes đến API Routes, mọi thứ dường như rất dễ dàng hơn rất nhiều so với ứng dụng React thuần.

## Tài liệu liên quan {#docs}

- [React Docs](https://reactjs.org/docs/getting-started.html)
- [Next.js Docs](https://nextjs.org/docs/getting-started)

## Điều kiện {#pre-setup}

Trước khi bắt đầu, có một số điều kiện cần thiết để cài đặt Next.js như là phần **Views** (hoặc Frontend) với .NET Framework: 

- Solution trên Visual Studio đã bao gồm project `.NET Web Application 4.7.2` với template `Web API` (để sử dụng làm **Models**, **Controller**)
- [Node.js 14.6.0](https://nodejs.org) hoặc mới hơn

## Thực hiện {#setup}

#### 1. Tạo 1 project Next.js theo hướng dẫn trên [tài liệu liên quan](#docs)

- [Tự động](https://nextjs.org/docs/getting-started#automatic-setup)
- [Thủ công](https://nextjs.org/docs/getting-started#manual-setup)

#### 2. Link dự án Next.js vào Solution