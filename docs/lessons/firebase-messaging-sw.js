// Import thư viện Firebase v10 Compat dành riêng cho Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

// Cấu hình kết nối dự án SnapEnglish
const firebaseConfig = {
    apiKey: "AIzaSyBlTU4B563sSsTVbLai_je29l6eC8T-cm0",
    authDomain: "snapenglish-cb6e2.firebaseapp.com",
    projectId: "snapenglish-cb6e2",
    storageBucket: "[đã xoá đường liên kết đáng ngờ]",
    messagingSenderId: "373152038413",
    appId: "1:373152038413:web:19284622571390f8585f44"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Lắng nghe thông báo đẩy ngầm từ Firebase Console khi trình duyệt Chrome được mở
messaging.onBackgroundMessage((payload) => {
    console.log('Nhận thông báo ngầm FCM thành công! 🔔', payload);

    const notificationTitle = payload.notification?.title || "SnapEnglish nhắc học nè! ⏰🌸";
    const notificationOptions = {
        body: payload.notification?.body || "Hôm nay bạn có từ vựng chờ ôn tập đó. Vào học ngay thôi! ✨",
        icon: payload.notification?.icon || '/logo.png',
        badge: '/logo.png',
        requireInteraction: true,
        data: {
            url: '/'
        }
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Sự kiện khi người dùng nhấn vào thông báo đẩy -> Mở trang web SnapEnglish
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow([đã xoá đường liên kết đáng ngờ] || '/')
    );
});
