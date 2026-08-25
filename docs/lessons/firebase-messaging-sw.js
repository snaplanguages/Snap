importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

// Cấu hình Firebase kết nối với dự án SnapEnglish của bạn
const firebaseConfig = {
  apiKey: "AIzaSyBlTU4B563sSsTVbLai_je29l6eC8T-cm0",
  authDomain: "snapenglish-cb6e2.firebaseapp.com",
  projectId: "snapenglish-cb6e2",
  storageBucket: "snapenglish-cb6e2.firebasestorage.app",
  messagingSenderId: "373152038413",
  appId: "1:373152038413:web:19284622571390f8585f44"
};

// Khởi tạo Firebase theo kiểu tương thích (Compat) dành riêng cho Service Worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Lắng nghe sự kiện đẩy tin nhắn từ Firebase Console khi trình duyệt ĐANG ĐÓNG
messaging.onBackgroundMessage((payload) => {
  console.log('Nhận thông báo ngầm thành công! 🔔', payload);

  const notificationTitle = payload.notification.title || "SnapEnglish nhắc học ⏰";
  const notificationOptions = {
    body: payload.notification.body || "Hôm nay bạn chưa làm bài Test nào đâu nhé. Vào ôn tập ngay thôi!",
    icon: payload.notification.icon || '/logo.png', // Đường dẫn tới logo ứng dụng của bạn
    badge: '/logo.png' // Icon nhỏ hiển thị trên thanh trạng thái điện thoại Android
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
