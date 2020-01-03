// 判断设备是否为 全面屏
if (window.screen.width / window.screen.height < 0.5) {
    let dpr = window.devicePixelRatio;
    this.isIpx = true;
}