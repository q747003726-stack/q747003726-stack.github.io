function FindProxyForURL(url, host) {
    // 检查代理服务器是否可达
    if (isHostReachable("192.168.1.200:7890")) {
        return "PROXY 192.168.1.200:7890";
    }
    // 如果代理不可达，则直接连接
    return "DIRECT";
}