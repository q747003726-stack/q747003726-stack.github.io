function FindProxyForURL(url, host) {
    // 尝试解析代理服务器的IP地址（即检查电脑是否开机在线）
    if (isResolvable("192.168.1.200")) {
        return "PROXY 192.168.1.200:7890";
    }
    // 解析失败（电脑关机），所有流量直连
    return "DIRECT";
}