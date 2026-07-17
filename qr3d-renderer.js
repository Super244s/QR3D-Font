module.exports = {
  decode(raw) {
    const clean = raw.replace("QR3D:CORD:", "");
    const parts = clean.split("|");

    return {
      header: parts[0],
      content: parts[1] ? atob(parts[1]) : null,
      link: parts[2] || null,
      media: parts[3] || null,
      form: parts[4] || null,
      signature: parts[parts.length - 1]
    };
  }
};

