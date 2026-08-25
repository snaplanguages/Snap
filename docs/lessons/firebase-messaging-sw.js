import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
    import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBlTU4B563sSsTVbLai_je29l6eC8T-cm0",
      authDomain: "snapenglish-cb6e2.firebaseapp.com",
      projectId: "snapenglish-cb6e2",
      storageBucket: "snapenglish-cb6e2.firebasestorage.app",
      messagingSenderId: "373152038413",
      appId: "1:373152038413:web:19284622571390f8585f44"
    };

const messaging = firebase.messaging();

// Lắng nghe sự kiện đẩy tin nhắn khi trình duyệt ĐANG ĐÓNG
messaging.onBackgroundMessage((payload) => {
  console.log('Nhận thông báo ngầm:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
