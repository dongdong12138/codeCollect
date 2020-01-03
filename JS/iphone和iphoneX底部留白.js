if ((window.screen.width / window.screen.height <= 0.5) && (window.osType == "ios")) {
    console.log('iphoneXiphoneXiphoneX')
    document.getElementsByTagName("html")[0].style.height =
    window.innerHeight + 260 + "px";
    document.getElementsByTagName("body")[0].style.height =
    window.innerHeight + 260 + "px";
    document.getElementById("page").style.height =
    window.innerHeight + 260 + "px";
  } else if (window.osType == "ios") {
    console.log('iphone普通iphone普通iphone普通')
    document.getElementsByTagName("html")[0].style.height =
    window.innerHeight + 88 + "px";
    document.getElementsByTagName("body")[0].style.height =
    window.innerHeight + 88 + "px";
    document.getElementById("page").style.height =
    window.innerHeight + 88 + "px";
  }

  // 注意：上面的值（260、88）要根据实际情况调整