function FindProxyForURL(url, host) {
    // 常见系统连通性检测域名列表（可根据需要增减）
    var directHosts = [
        "captive.apple.com",
        "connectivitycheck.gstatic.com",
        "www.google.com",
        "www.msftconnecttest.com",
        "www.baidu.com"
    ];
    
    // 如果请求的域名在列表中，直接返回 DIRECT（不走代理）
    for (var i = 0; i < directHosts.length; i++) {
        if (host == directHosts[i]) {
            return "DIRECT";
        }
    }

    // 原有逻辑：检查代理服务器是否可达
    if (isHostReachable("192.168.1.200:7890")) {
        return "PROXY 192.168.1.200:7890";
    }
    return "DIRECT";
}