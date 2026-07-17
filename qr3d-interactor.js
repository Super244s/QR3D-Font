module.exports = {
  enable(data) {
    return {
      canOpenLink: !!data.link,
      canFillForm: !!data.form,
      canSubmit: true,
      extendedSupport: "พร้อมเพิ่มฟังก์ชันในอนาคต"
    };
  }
};

