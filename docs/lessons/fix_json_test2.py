import re
import json

def fix_json_file(file_path):
    print(f"🔄 Đang dọn dẹp file: {file_path}...")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ Không tìm thấy file {file_path}!")
        return

    # 1. Khâu lại các câu giải thích bị lỗi dấu nháy kép cắt đôi
    pattern_text = r'"text"\s*:\s*"([^"]+?)(?:\\+)?"\s*:\s*\'([^\']+?)\'\s*\.(?:"|\')'
    content = re.sub(pattern_text, '"text": "\\1: \'\\2\'."', content)

    # 2. Sửa lỗi nhãn hội thoại Part 3 & 4
    pattern_speakers = r'\\"n([WM]\d*)\s*\\"?:'
    content = re.sub(pattern_speakers, r'\\n\\"\1\\":', content)

    # 3. Sửa lỗi nháy kép lồng mốc giờ Q16
    content = content.replace('"At "3":30 P.M."', '"At 3:30 P.M."')
    content = content.replace('"Lúc "3":30 chiều."', '"Lúc 3:30 chiều."')

    # Kiểm tra tính hợp lệ trước khi ghi đè
    try:
        parsed_data = json.loads(content)
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(parsed_data, f, ensure_ascii=False, indent=2)
        print("🎉 THÀNH CÔNG! File JSON đã được sửa sạch toàn bộ lỗi cú pháp và định dạng chuẩn chỉnh.")
    except json.JSONDecodeError as e:
        print(f"❌ Vẫn còn lỗi cú pháp JSON chưa sửa hết tại vị trí: {e}")

if __name__ == "__main__":
    # Thay thế bằng tên file JSON thực tế của bạn
    fix_json_file("toeic-listening-test-2-2026.json")
