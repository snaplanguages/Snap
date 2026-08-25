document.addEventListener("DOMContentLoaded", () => {
  // Tự động kiểm tra mỗi phút một lần
  checkAndFireReminder();
  setInterval(checkAndFireReminder, 60000); 
});

function checkAndFireReminder() {
  const isEnabled = localStorage.getItem('toeic_reminder_enabled') === 'true';
  const targetTime = localStorage.getItem('toeic_reminder_time'); // "HH:MM"
  if (!isEnabled || !targetTime) return;

  const now = new Date();
  const currentHour = now.getHours().toString().padStart(2, '0');
  const currentMinute = now.getMinutes().toString().padStart(2, '0');
  const currentTimeString = `${currentHour}:${currentMinute}`;
  const todayString = now.toLocaleDateString('vi-VN');
  
  const lastReminded = localStorage.getItem('toeic_last_reminded_date');

  // 1. Đúng giờ hẹn (Khi đang mở bất kỳ trang nào trên web)
  if (currentTimeString === targetTime && lastReminded !== todayString) {
    fireNotification();
  }
  
  // 2. Nhắc bù nếu vào web muộn hơn giờ hẹn mà hôm nay chưa học bài nào
  const [targetH, targetM] = targetTime.split(':').map(Number);
  const targetDateObj = new Date();
  targetDateObj.setHours(targetH, targetM, 0, 0);

  const lastMissedReminded = localStorage.getItem('toeic_last_missed_reminded_date');
  if (now > targetDateObj && lastMissedReminded !== todayString && lastReminded !== todayString) {
    // Lấy dữ liệu lịch sử từ localStorage để check xem hôm nay học bài chưa
    const localData = localStorage.getItem('toeic_local_records');
    const records = localData ? JSON.parse(localData) : [];
    const studiedToday = records.some(r => r.date === todayString);
    
    if (!studiedToday) {
      fireMissedNotification(targetTime);
    }
  }
}

function fireNotification() {
  const todayString = new Date().toLocaleDateString('vi-VN');
  localStorage.setItem('toeic_last_reminded_date', todayString);
  playReminderSound();

  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("SnapEnglish - Đến giờ học rồi! 🚀", {
      body: "Vào làm một bài Test TOEIC để duy trì chuỗi ngày kỷ luật nào bạn ơi!",
      icon: "logo.png"
    });
  } else {
    alert("⏰ Đến giờ học rồi! Vào làm bài ngay thôi bạn ơi! 🔥");
  }
}

function fireMissedNotification(targetTime) {
  const todayString = new Date().toLocaleDateString('vi-VN');
  localStorage.setItem('toeic_last_missed_reminded_date', todayString);
  playReminderSound();
  
  alert(`⏰ Nhắc nhở: Lịch hẹn học lúc ${targetTime} hôm nay đã qua nhưng bạn chưa làm bài. Tranh thủ ôn luyện nhé! 🌸`);
}

function playReminderSound() {
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
  audio.play().catch(e => console.log("Không thể tự động phát âm thanh:", e));
}
