module.exports = {
  display(data) {
    return {
      showText: !!data.content,
      showImage: !!data.media,
      openLink: !!data.link,
      renderMode: "full-qr3d-standard",
      offlineCapable: true
    };
  }
};
