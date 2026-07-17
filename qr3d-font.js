/**
 * ==========================================
 * 🧩 QR3D Font — v1.0 Official
 * เฉพาะผู้ที่ติดตั้งเท่านั้นถึงจะเข้าถึงได้
 * ==========================================
 */

const QR3DParser = require('./qr3d-parser');
const QR3DRenderer = require('./qr3d-renderer');
const QR3DInteractor = require('./qr3d-interactor');

class QR3DFont {
  constructor() {
    this.isActive = true;
    this.systemId = "QR3D-FONT-OFFICIAL";
    this.supportVersion = "1.0-latest";
  }

  /**
   * ตรวจสอบว่าเป็นรหัส QR3D จริงหรือไม่
   * เครื่องอ่านอื่นจะมองไม่เห็นโครงสร้างนี้
   */
  recognize(data) {
    if (!data || typeof data !== 'string') return false;
    return data.startsWith("QR3D:CORD:") && data.includes("LAYER:ENCRYPTED");
  }

  /**
   * ประมวลผลทั้งหมดในขั้นตอนเดียว
   */
  process(rawData) {
    if (!this.recognize(rawData)) {
      return { error: "ไม่ใช่รหัส QR3D หรือไม่มีสิทธิ์เข้าถึง — ต้องติดตั้ง QR3D Font" };
    }

    try {
      const parsed = QR3DParser.decode(rawData);
      const rendered = QR3DRenderer.display(parsed);
      const interactive = QR3DInteractor.enable(parsed);

      return {
        success: true,
        version: this.supportVersion,
        content: parsed.content,
        link: parsed.link || null,
        media: parsed.media || null,
        form: parsed.form || null,
        display: rendered,
        interaction: interactive,
        upgradeNotice: "รองรับการเพิ่มฟังก์ชันใหม่ในภายหลัง"
      };
    } catch (err) {
      return { error: "ถอดรหัสไม่สำเร็จ — ตรวจสอบเวอร์ชัน QR3D Font" };
    }
  }
}

module.exports = QR3DFont;

