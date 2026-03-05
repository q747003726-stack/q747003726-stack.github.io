function FindProxyForURL(url, host) {
    // 尝试解析电脑的主机名，如果成功返回 IP（即电脑在线），则使用代理
    if (dnsResolve("mypc") == "192.168.1.200") {
        return "PROXY 192.168.1.200:7890";
    }
    // 解析失败（电脑关机或主机名不解析），所有流量直连
    return "DIRECT";
}