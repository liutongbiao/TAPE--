function zishiying() {
    function setrem() {
        var windowwidth = window.innerWidth;
        var newpx = (windowwidth / 750) * 100;
        $('html').css('fontSize', newpx);
    }
    setrem();
    window.onresize = function () {
        setrem();
    };
}
zishiying();

// bofangyehtml();

// function bofangyehtml() {
    var songindex = 0;
    var timer = null;
    var parnum = 0; //模式
    var songtimearr = [];
    // var data = [{
    //     author_name: "\u674e\u8363\u6d69",
    //     song_name: "\u8001\u8857",
    //     lyrics: "[00:00.30]\u674e\u8363\u6d69 - \u8001\u8857\r\n[00:00.96]\u4f5c\u8bcd\uff1a\u674e\u8363\u6d69\r\n[00:01.16]\u4f5c\u66f2\uff1a\u674e\u8363\u6d69\r\n[00:16.80]\u4e00\u5f20\u892a\u8272\u7684\u7167\u7247\r\n[00:19.69]\u597d\u50cf\u5e26\u7ed9\u6211\u4e00\u70b9\u70b9\u6000\u5ff5\r\n[00:23.74]\u5df7\u5c3e\u8001\u7237\u7237\u5356\u7684\u70ed\u6c64\u9762\r\n[00:27.69]\u5473\u9053\u5f25\u6f2b\u8fc7\u65e7\u65e7\u7684\u540e\u9662\r\n[00:31.84]\u6d41\u6d6a\u732b\u7761\u719f\u5728\u6447\u6643\u79cb\u5343\r\n[00:35.68]\u5915\u9633\u7167\u4e86\u4e00\u904d\u4ed6\u772f\u7740\u773c\r\n[00:40.16]\u90a3\u5f20\u540c\u684c\u5bc4\u7684\u660e\u4fe1\u7247\r\n[00:43.80]\u5b89\u9759\u7684\u8eba\u5728\u8bfe\u684c\u7684\u91cc\u9762\r\n[00:48.81]\u5feb\u8981\u8fc7\u5b8c\u7684\u6625\u5929\r\n[00:51.74]\u8fd8\u6709\u96d5\u523b\u7740\u56fe\u6848\u7684\u95e8\u5e18\r\n[00:55.78]\u7a84\u7a84\u7684\u957f\u957f\u7684\u8fc7\u9053\u4e24\u8fb9\r\n[00:59.74]\u8001\u623f\u5b50\u4f9d\u7136\u5347\u8d77\u4e86\u708a\u70df\r\n[01:03.85]\u521a\u521a\u4e0b\u5b8c\u4e86\u5c0f\u96e8\u7684\u5b63\u8282\r\n[01:07.74]\u7238\u5988\u53c8\u4e00\u8d77\u8d70\u8fc7\u7684\u8001\u8857\r\n[01:12.15]\u8bb0\u4e0d\u5f97\u54ea\u5e74\u7684\u54ea\u4e00\u5929\r\n[01:15.79]\u5f88\u6f2b\u957f\u53c8\u5f88\u77ed\u6682\u7684\u5c81\u6708\r\n[01:20.31]\u73b0\u5728\u5df2\u7ecf\u56de\u4e0d\u53bb\r\n[01:24.45]\u65e9\u5df2\u6d41\u901d\u7684\u5149\u9634\r\n[01:28.00]\u624b\u91cc\u7684\u90a3\u4e00\u5f20\r\n[01:29.97]\u6e10\u6e10\u6a21\u7cca\u4e0d\u6e05\u7684\u8f66\u7968\r\n[01:32.86]\u6210\u4e86\u56de\u5fc6\u7684\u4fe1\u53f7\r\n[01:37.76]\u5fd8\u4e0d\u6389\u7684\u662f\u4ec0\u4e48\r\n[01:40.24]\u6211\u4e5f\u4e0d\u77e5\u9053\r\n[01:42.13]\u60f3\u4e0d\u8d77\u5f53\u5e74\u6a21\u6837\r\n[01:46.04]\u770b\u4e5f\u770b\u4e0d\u5230\r\n[01:48.05]\u53bb\u4e5f\u53bb\u4e0d\u4e86\u7684\u5730\u65b9\r\n[01:53.98]\u4e5f\u8bb8\u90a3\u8001\u8857\u7684\u8154\u8c03\r\n[01:58.19]\u662f\u5c5e\u4e8e\u6211\u7684\u5fe7\u4f24\r\n[02:02.24]\u5634\u89d2\u90a3\u70b9\u5fae\u7b11\r\n[02:04.78]\u8d8a\u6765\u8d8a\u52c9\u5f3a\r\n[02:09.90]\u5fd8\u4e0d\u6389\u7684\u662f\u4ec0\u4e48\r\n[02:12.10]\u6211\u4e5f\u4e0d\u77e5\u9053\r\n[02:14.29]\u653e\u4e0d\u4e0b\u719f\u6089\u7247\u6bb5\r\n[02:18.08]\u56de\u5934\u671b\u4e00\u773c\r\n[02:20.20]\u5df2\u7ecf\u5f88\u591a\u5e74\u7684\u65f6\u95f4\r\n[02:25.97]\u900f\u8fc7\u624b\u6307\u95f4\u770b\u7740\u5929\r\n[02:30.33]\u6211\u53c8\u56de\u5230\u90a3\u8001\u8857\r\n[02:34.17]\u9760\u5728\u4f60\u4eec\u8eab\u8fb9\u6e10\u884c\u6e10\u8fdc\r\n[03:10.80]\u5feb\u8981\u8fc7\u5b8c\u7684\u6625\u5929\r\n[03:13.73]\u8fd8\u6709\u96d5\u523b\u7740\u56fe\u6848\u7684\u95e8\u5e18\r\n[03:17.72]\u7a84\u7a84\u7684\u957f\u957f\u7684\u8fc7\u9053\u4e24\u8fb9\r\n[03:21.62]\u8001\u623f\u5b50\u4f9d\u7136\u5347\u8d77\u4e86\u708a\u70df\r\n[03:25.78]\u521a\u521a\u4e0b\u5b8c\u4e86\u5c0f\u96e8\u7684\u5b63\u8282\r\n[03:29.73]\u7238\u5988\u53c8\u4e00\u8d77\u8d70\u8fc7\u7684\u8001\u8857\r\n[03:34.08]\u8bb0\u4e0d\u5f97\u54ea\u5e74\u7684\u54ea\u4e00\u5929\r\n[03:37.72]\u5f88\u6f2b\u957f\u53c8\u5f88\u77ed\u6682\u7684\u5c81\u6708\r\n[03:42.40]\u73b0\u5728\u5df2\u7ecf\u56de\u4e0d\u53bb\r\n[03:46.20]\u65e9\u5df2\u6d41\u901d\u7684\u5149\u9634\r\n[03:49.80]\u624b\u91cc\u7684\u90a3\u4e00\u5f20\r\n[03:52.06]\u6e10\u6e10\u6a21\u7cca\u4e0d\u6e05\u7684\u8f66\u7968\r\n[03:54.92]\u6210\u4e86\u56de\u5fc6\u7684\u4fe1\u53f7\r\n[03:59.75]\u5fd8\u4e0d\u6389\u7684\u662f\u4ec0\u4e48\r\n[04:02.07]\u6211\u4e5f\u4e0d\u77e5\u9053\r\n[04:04.26]\u60f3\u4e0d\u8d77\u5f53\u5e74\u6a21\u6837\r\n[04:08.00]\u770b\u4e5f\u770b\u4e0d\u5230\r\n[04:10.13]\u53bb\u4e5f\u53bb\u4e0d\u4e86\u7684\u5730\u65b9\r\n[04:15.78]\u4e5f\u8bb8\u90a3\u8001\u8857\u7684\u8154\u8c03\r\n[04:20.10]\u662f\u5c5e\u4e8e\u6211\u7684\u5fe7\u4f24\r\n[04:24.11]\u5634\u89d2\u90a3\u70b9\u5fae\u7b11\r\n[04:27.01]\u8d8a\u6765\u8d8a\u52c9\u5f3a\r\n[04:31.90]\u5fd8\u4e0d\u6389\u7684\u662f\u4ec0\u4e48\r\n[04:34.12]\u6211\u4e5f\u4e0d\u77e5\u9053\r\n[04:36.28]\u653e\u4e0d\u4e0b\u719f\u6089\u7247\u6bb5\r\n[04:40.13]\u56de\u5934\u671b\u4e00\u773c\r\n[04:42.15]\u5df2\u7ecf\u5f88\u591a\u5e74\u7684\u65f6\u95f4\r\n[04:48.01]\u900f\u8fc7\u624b\u6307\u95f4\u770b\u7740\u5929\r\n[04:52.35]\u6211\u53c8\u56de\u5230\u90a3\u8001\u8857\r\n[04:56.13]\u9760\u5728\u4f60\u4eec\u8eab\u8fb9\u6e10\u884c\u6e10\u8fdc\r\n",
    //     play_url: "http://117.34.59.29/amobile.music.tc.qq.com/C400000sU9jC3bN2dY.m4a?guid=6824516572&vkey=DFA9B3A0CF0212300498CEA30B0A520D938ADDEBBB72CB1795D77B6CA813497951B5BB4E10B50F6F9E144FE77DCAA0B097D4F817BD626F59&uin=0&fromtag=66",
    //     img: "http:\/\/imge.kugou.com\/stdmusic\/20150718\/20150718081938784291.jpg",
    //     hash: "45f7cf77b759bdb5a24505fa6f8042dc",
    // }, {
    //     author_name: "\u674e\u7389\u521a",
    //     song_name: "\u521a\u597d\u9047\u89c1\u4f60",
    //     img: "http:\/\/imge.kugou.com\/stdmusic\/20161109\/20161109171040932108.jpg",
    //     play_url: "https:\/\/webfs.yun.kugou.com\/201908060909\/953abd0ec151bc067944ca60ee41f835\/G078\/M08\/18\/17\/jg0DAFgi6G-AKqsqADDP_nSW5F4051.mp3",
    //     lyrics: "[00:00.02]\u674e\u7389\u521a - \u521a\u597d\u9047\u89c1\u4f60\r\n[00:00.75]\u8bcd\uff1a\u9ad8\u8fdb\r\n[00:00.85]\u66f2\uff1a\u9ad8\u8fdb\r\n[00:00.94]\u7f16\u66f2\uff1a\u5173\u5929\u5929\r\n[00:13.13]\u6211\u4eec\u54ed\u4e86\r\n[00:15.79]\u6211\u4eec\u7b11\u7740\r\n[00:18.83]\u6211\u4eec\u62ac\u5934\u671b\u5929\u7a7a\r\n[00:21.86]\u661f\u661f\u8fd8\u4eae\u7740\u51e0\u9897\r\n[00:24.98]\u6211\u4eec\u5531\u7740\r\n[00:27.96]\u65f6\u95f4\u7684\u6b4c\r\n[00:31.09]\u624d\u61c2\u5f97\u76f8\u4e92\u62e5\u62b1\r\n[00:33.98]\u5230\u5e95\u662f\u4e3a\u4e86\u4ec0\u4e48\r\n[00:37.30]\u56e0\u4e3a\u6211\u521a\u597d\u9047\u89c1\u4f60\r\n[00:40.77]\u7559\u4e0b\u8db3\u8ff9\u624d\u7f8e\u4e3d\r\n[00:43.79]\u98ce\u5439\u82b1\u843d\u6cea\u5982\u96e8\r\n[00:46.80]\u56e0\u4e3a\u4e0d\u60f3\u5206\u79bb\r\n[00:49.95]\u56e0\u4e3a\u521a\u597d\u9047\u89c1\u4f60\r\n[00:53.10]\u7559\u4e0b\u5341\u5e74\u7684\u671f\u8bb8\r\n[00:55.99]\u5982\u679c\u518d\u76f8\u9047\r\n[00:59.21]\u6211\u60f3\u6211\u4f1a\u8bb0\u5f97\u4f60\r\n[01:14.32]\u6211\u4eec\u54ed\u4e86\r\n[01:17.23]\u6211\u4eec\u7b11\u7740\r\n[01:20.34]\u6211\u4eec\u62ac\u5934\u671b\u5929\u7a7a\r\n[01:23.33]\u661f\u661f\u8fd8\u4eae\u7740\u51e0\u9897\r\n[01:26.51]\u6211\u4eec\u5531\u7740\r\n[01:29.53]\u65f6\u95f4\u7684\u6b4c\r\n[01:32.59]\u624d\u61c2\u5f97\u76f8\u4e92\u62e5\u62b1\r\n[01:35.59]\u5230\u5e95\u662f\u4e3a\u4e86\u4ec0\u4e48\r\n[01:38.73]\u56e0\u4e3a\u6211\u521a\u597d\u9047\u89c1\u4f60\r\n[01:42.23]\u7559\u4e0b\u8db3\u8ff9\u624d\u7f8e\u4e3d\r\n[01:45.30]\u98ce\u5439\u82b1\u843d\u6cea\u5982\u96e8\r\n[01:48.39]\u56e0\u4e3a\u4e0d\u60f3\u5206\u79bb\r\n[01:51.55]\u56e0\u4e3a\u521a\u597d\u9047\u89c1\u4f60\r\n[01:54.54]\u7559\u4e0b\u5341\u5e74\u7684\u671f\u8bb8\r\n[01:57.61]\u5982\u679c\u518d\u76f8\u9047\r\n[02:00.81]\u6211\u60f3\u6211\u4f1a\u8bb0\u5f97\u4f60\r\n[02:03.99]\u56e0\u4e3a\u521a\u597d\u9047\u89c1\u4f60\r\n[02:06.86]\u7559\u4e0b\u8db3\u8ff9\u624d\u7f8e\u4e3d\r\n[02:09.94]\u98ce\u5439\u82b1\u843d\u6cea\u5982\u96e8\r\n[02:13.03]\u56e0\u4e3a\u4e0d\u60f3\u5206\u79bb\r\n[02:16.06]\u56e0\u4e3a\u521a\u597d\u9047\u89c1\u4f60\r\n[02:19.16]\u7559\u4e0b\u5341\u5e74\u7684\u671f\u8bb8\r\n[02:22.21]\u5982\u679c\u518d\u76f8\u9047\r\n[02:25.34]\u6211\u60f3\u6211\u4f1a\u8bb0\u5f97\u4f60\r\n[02:31.40]\u56e0\u4e3a\u6211\u521a\u597d\u9047\u89c1\u4f60\r\n[02:34.51]\u7559\u4e0b\u8db3\u8ff9\u624d\u7f8e\u4e3d\r\n[02:37.59]\u98ce\u5439\u82b1\u843d\u6cea\u5982\u96e8\r\n[02:40.67]\u56e0\u4e3a\u4e0d\u60f3\u5206\u79bb\r\n[02:43.77]\u56e0\u4e3a\u521a\u597d\u9047\u89c1\u4f60\r\n[02:46.84]\u7559\u4e0b\u5341\u5e74\u7684\u671f\u8bb8\r\n[02:49.94]\u5982\u679c\u518d\u76f8\u9047\r\n[02:53.11]\u6211\u60f3\u6211\u4f1a\u8bb0\u5f97\u4f60\r\n",
    //     hash: "CB7EE97F4CC11C4EA7A1FA4B516A5D97",
    // }, {
    //     author_name: "\u674e\u6615\u878d\u3001\u6a0a\u6850\u821f\u3001\u674e\u51ef\u7a20",
    //     song_name: "\u4f60\u7b11\u8d77\u6765\u771f\u597d\u770b",
    //     lyrics: "[00:00.39]\u674e\u6615\u878d\u3001\u6a0a\u6850\u821f\u3001\u674e\u51ef\u7a20 - \u4f60\u7b11\u8d77\u6765\u771f\u597d\u770b\r\n[00:01.08]\u4f5c\u8bcd\uff1a\u5468\u5175\r\n[00:01.23]\u4f5c\u66f2\uff1a\u674e\u51ef\u7a20\r\n[00:08.80]\u60f3\u53bb\u8fdc\u65b9\u7684\u5c71\u5ddd\r\n[00:11.38]\u60f3\u53bb\u6d77\u8fb9\u770b\u6d77\u9e25\r\n[00:14.27]\u4e0d\u7ba1\u98ce\u96e8\u6709\u591a\u5c11\r\n[00:17.20]\u6709\u4f60\u5c31\u8db3\u591f\r\n[00:19.98]\u559c\u6b22\u770b\u4f60\u7684\u5634\u89d2\r\n[00:22.92]\u559c\u6b22\u770b\u4f60\u7684\u7709\u68a2\r\n[00:25.70]\u767d\u4e91\u6302\u5728\u90a3\u84dd\u5929\r\n[00:28.64]\u50cf\u4f60\u7684\u5fae\u7b11\r\n[00:31.54]\u4f60\u7b11\u8d77\u6765\u771f\u597d\u770b\r\n[00:34.02]\u50cf\u6625\u5929\u7684\u82b1\u4e00\u6837\r\n[00:36.90]\u628a\u6240\u6709\u7684\u70e6\u607c\u6240\u6709\u7684\u5fe7\u6101\r\n[00:40.03]\u7edf\u7edf\u90fd\u5439\u6563\r\n[00:42.56]\u4f60\u7b11\u8d77\u6765\u771f\u597d\u770b\r\n[00:45.34]\u50cf\u590f\u5929\u7684\u9633\u5149\r\n[00:48.68]\u6574\u4e2a\u4e16\u754c\u5168\u90e8\u7684\u65f6\u5149\r\n[00:51.56]\u7f8e\u5f97\u50cf\u753b\u5377\r\n[01:06.03]\u60f3\u53bb\u8fdc\u65b9\u7684\u5c71\u5ddd\r\n[01:08.51]\u60f3\u53bb\u6d77\u8fb9\u770b\u6d77\u9e25\r\n[01:11.55]\u4e0d\u7ba1\u98ce\u96e8\u6709\u591a\u5c11\r\n[01:14.33]\u6709\u4f60\u5c31\u8db3\u591f\r\n[01:17.21]\u559c\u6b22\u770b\u4f60\u7684\u5634\u89d2\r\n[01:20.05]\u559c\u6b22\u770b\u4f60\u7684\u7709\u68a2\r\n[01:22.88]\u767d\u4e91\u6302\u5728\u90a3\u84dd\u5929\r\n[01:25.72]\u50cf\u4f60\u7684\u5fae\u7b11\r\n[01:28.30]\u4f60\u7b11\u8d77\u6765\u771f\u597d\u770b\r\n[01:31.13]\u50cf\u6625\u5929\u7684\u82b1\u4e00\u6837\r\n[01:33.96]\u628a\u6240\u6709\u7684\u70e6\u607c\u6240\u6709\u7684\u5fe7\u6101\r\n[01:37.20]\u7edf\u7edf\u90fd\u5439\u6563\r\n[01:39.68]\u4f60\u7b11\u8d77\u6765\u771f\u597d\u770b\r\n[01:42.47]\u50cf\u590f\u5929\u7684\u9633\u5149\r\n[01:45.76]\u6574\u4e2a\u4e16\u754c\u5168\u90e8\u7684\u65f6\u5149\r\n[01:48.68]\u7f8e\u5f97\u50cf\u753b\u5377\r\n[01:51.31]\u4f60\u7b11\u8d77\u6765\u771f\u597d\u770b\r\n[01:53.99]\u50cf\u6625\u5929\u7684\u82b1\u4e00\u6837\r\n[01:56.83]\u628a\u6240\u6709\u7684\u70e6\u607c\u6240\u6709\u7684\u5fe7\u6101\r\n[02:00.06]\u7edf\u7edf\u90fd\u5439\u6563\r\n[02:02.54]\u4f60\u7b11\u8d77\u6765\u771f\u597d\u770b\r\n[02:05.37]\u50cf\u590f\u5929\u7684\u9633\u5149\r\n[02:08.60]\u6574\u4e2a\u4e16\u754c\u5168\u90e8\u7684\u65f6\u5149\r\n[02:11.48]\u7f8e\u5f97\u50cf\u753b\u5377\r\n[02:13.96]\u4f60\u7b11\u8d77\u6765\u771f\u597d\u770b\r\n[02:16.79]\u50cf\u6625\u5929\u7684\u82b1\u4e00\u6837\r\n[02:19.73]\u628a\u6240\u6709\u7684\u70e6\u607c\u6240\u6709\u7684\u5fe7\u6101\r\n[02:22.91]\u7edf\u7edf\u90fd\u5439\u6563\r\n[02:25.39]\u4f60\u7b11\u8d77\u6765\u771f\u597d\u770b\r\n[02:28.22]\u50cf\u590f\u5929\u7684\u9633\u5149\r\n[02:31.49]\u6574\u4e2a\u4e16\u754c\u5168\u90e8\u7684\u65f6\u5149\r\n[02:34.32]\u7f8e\u5f97\u50cf\u753b\u5377\r\n[02:37.35]\u6574\u4e2a\u4e16\u754c\u5168\u90e8\u7684\u65f6\u5149\r\n[02:40.08]\u7f8e\u5f97\u50cf\u753b\u5377\r\n",
    //     img: "http:\/\/imge.kugou.com\/stdmusic\/20190424\/20190424194033137377.jpg",
    //     play_url: "https:\/\/webfs.yun.kugou.com\/201908060924\/8635c3dd7f5a92260c37587dc091147c\/G156\/M00\/1C\/0B\/fJQEAFy_JfCAUjQtACoEl8Wawq4506.mp3",
    //     hash: "07a55d0f8ff088bdca36b836f7fe115f",
    // }];

    // localStorage.setItem('songmoreinfo', JSON.stringify(data));
    var data = [];
    if (localStorage.getItem('songmoreinfo')) {
        data = JSON.parse(localStorage.getItem('songmoreinfo')) ? JSON.parse(localStorage.getItem('songmoreinfo')) : [];
    };

    //把本地歌曲添加到本地列表
    function addbensisong() {
        var bendistrone = '';
        for (let i = 0; i < data.length; i++) {
            bendistrone += ' <li>';
            bendistrone += '  <div class="leftinfo">';
            bendistrone += '<div class="songname">' + data[i].song_name + '</div>';
            bendistrone += ' <p>－</p>';
            bendistrone += ' <div class="singer">' + data[i].author_name + '</div>';
            bendistrone += ' </div>';
            bendistrone += ' <div class="removeone"> </div>';
            bendistrone += '</li> ';
        }
        $('#bofangye .bofanglist .bendisong').html(bendistrone);
    }
    addbensisong();

    //   整理歌词
    // lrcfn(songindex);
    function lrcfn(songindex) {
        var lrctimearr = [];
        var strlcr = '';
        var arr = data[songindex].lyrics.split('[');

        arr = arr.slice(1);

        var arrlcr = [];

        for (let i = 0; i < arr.length; i++) {
            arrlcr.push({
                time: arr[i].substr(0, 8),
                text: arr[i].substr(9)
            })
        }

        for (let j = 0; j < arrlcr.length; j++) {

            strlcr += '<p>' + arrlcr[j].text + '</p>';

            lrctimearr[j] = min_sen(arrlcr[j].time);
        }
        $('#bofangye .content .songlrcone .lrcbox').html(strlcr);

        return lrctimearr;

    }
    var audio = document.getElementById('audio');



    infofn();

    function infofn() {
        if (data.length) {
            songindex = songindex < 0 ? data.length - 1 : songindex;
            songindex = songindex > data.length - 1 ? 0 : songindex;
            $('#bofangye .title .songname').html(data[songindex].song_name);
            $('#bofangye .title .singer').html(data[songindex].author_name);
            $('#search .xuanfusong>.top>p span').text(data[songindex].song_name+'——'+data[songindex].author_name);
            audio.src = data[songindex].play_url;
            $('#bofangye .songimg img').attr('src', data[songindex].img);
            $('#search .xuanfusong>.top>.img>img').attr('src', data[songindex].img);
            lrcfn(songindex);
            songtimearr = lrcfn(songindex);
        }
    }


    $('#bofangye .star').on('tap', function () {
        audio.paused ? audio.play() : audio.pause();
        panduansong();
    })
    
    $('#search .xuanfusong .zongstop').on('tap', function () {
        audio.paused ? audio.play() : audio.pause();
        panduansong();
        return false;
    })
    //判断歌状态
    panduansong();

    function panduansong() {
        if (audio.paused) {
            $('#bofangye .star').find('img').attr('src', "./imgs/star.png");
            cidaizhuan(0);

        } else {
            $('#bofangye .star').find('img').attr('src', "./imgs/stop.png");
            cidaizhuan(1);
        }
    }
    $('#bofangye .contrl .next').on('tap', function () {
        songindex++;
        infofn();
        audio.play();
        panduansong();
        return false;
    })
    $('#search .xuanfusong .zongnext').on('tap', function () {
        songindex++;
        infofn();
        audio.play();
        panduansong();
        return false;
    })
    $('#bofangye .contrl .prev').on('tap', function () {
        songindex--;
        infofn();
        audio.play();
        panduansong();
        return false;
    })
    $('#search .xuanfusong .zongprev').on('tap', function () {
        songindex--;
        infofn();
        audio.play();
        panduansong();
        return false;
    })


    //转圈
    function cidaizhuan(a) {
        let rotat = 0;
        if (a) {
            clearInterval(timer);
            timer = setInterval(function () {
                rotat++;
                rotat = rotat > 360 ? rotat = 0 : rotat;
                $('#bofangye .boxone .zhuan span').css('transform', ' rotateZ(' + rotat + 'deg)');
            }, 10)
        } else {
            clearInterval(timer);
        }
    }


    //分钟转换秒
    function min_sen(timearr) {
        let a = parseInt(timearr.substr(0, 2)) * 60;
        let b = Math.round(timearr.substr(3, 5));
        return a + b;
    }
    //   console.log(min_sen(arrlcr[2]));


    //秒转分钟
    function sen_min(num) {
        num = Math.round(num);
        let a = parseInt(num / 60) < 10 ? '0' + parseInt(num / 60) : parseInt(num / 60);
        let b = num % 60 < 10 ? '0' + num % 60 : num % 60;
        return a + ":" + b;
    }


    //进度条
    function progre() {

        audio.ontimeupdate = function () {
            let $nowtime = $('#bofangye .contrl .jindutiao .nowtime');
            let $totalbgc = $('#bofangye .contrl .jindutiao .totalbgc');
            let nowtime = audio.currentTime;
            let totaltime = sen_min(audio.duration);
            $nowtime.html(sen_min(nowtime));
            $('#bofangye .jindutiao .totaltime').html(totaltime);
            var left = Math.round(audio.currentTime) / Math.round(audio.duration) * $('#bofangye .jindutiao .totalbgc').width();
            var left2 = Math.round(audio.currentTime) / Math.round(audio.duration) * $('body').width();

            $('#search .xuanfusong .totalbgc .nowbgc').css('width', left2);
            $('#bofangye .contrl .jindutiao .totalbgc .nowbgc').css('width', left);
            $('#bofangye .contrl .jindutiao .totalbgc .dian').css('left', left - 6);
            $totalbgc.on('touchstart', function (e) {
                e = e || event;
                audio.currentTime = parseInt((e.touches[0].clientX - $totalbgc.offset().left) / $totalbgc.width() * Math.round(audio.duration));
            })
            

            if (songtimearr.indexOf(Math.round(nowtime)) !== -1) {
                let pindex = songtimearr.indexOf(Math.round(nowtime));
                let top = -pindex * 0.7 + 1.4;
                $("#bofangye .content .songlrcone .lrcbox").animate({
                    top: top + "rem"
                }, 200);
                $("#bofangye .content .songlrcone .lrcbox p").eq(pindex).css({
                    fontSize: ' 0.36rem',
                    opacity: 1
                }).prev().css({
                    fontSize: ' 0.3rem',
                    opacity: 0.6
                })
                $("#bofangye .content .songlrcone .lrcbox p").eq(pindex).prev().prev().css({
                    fontSize: ' 0.28rem',
                    opacity: 0.2
                })
                $("#bofangye .content .songlrcone .lrcbox p").eq(pindex).next().css({
                    fontSize: ' 0.3rem',
                    opacity: 0.6
                })
                $("#bofangye .content .songlrcone .lrcbox p").eq(pindex).next().next().css({
                    fontSize: ' 0.28rem',
                    opacity: 0.2
                })
            }



            //判断模式
            if (parnum == 0) {
                if (audio.ended) {
                    songindex = Math.floor(Math.random() * data.length);
                    infofn();
                    audio.play();
                }
            } else if (parnum == 1) {
                if (audio.ended) {
                    songindex;
                    infofn();
                    audio.play();
                }
            } else if (parnum == 2) {
                if (audio.ended) {
                    songindex++;
                    infofn();
                    audio.play();
                }
            }
        }

    }
    progre();


    // 模式
    moshifn();

    function moshifn() {
        $("#bofangye .contrl .gongneng .moshi").on('tap', function () {
            parnum++;
            parnum = parnum > 2 ? 0 : parnum;
            if (parnum == 0) {

                $("#bofangye .contrl .gongneng .moshi img").attr('src', './imgs/听歌模式@2x.png');

            } else if (parnum == 1) {

                $("#bofangye .contrl .gongneng .moshi img").attr('src', './imgs/单曲循环.png');

            } else if (parnum == 2) {

                $("#bofangye .contrl .gongneng .moshi img").attr('src', './imgs/顺序播放.png');
            }
        })
    }


       //控制播放列表显示隐藏
        $('#bofangye .bendilistzhezhao').on('tap', function () {
            $('#bofangye .bofanglist').addClass('bounceOutDown');
            $('#bofangye .bendilistzhezhao').animate({
                opacity: 0
            }, 500).hide();
            setTimeout(function () {
                $('#bofangye .bofanglist').removeClass('bounceOutDown').hide();
            }, 1000)
        })
        $('#bofangye .contrl .gongneng ul li.menu').on('tap', function () {
            $('#bofangye .bendilistzhezhao').animate({
                opacity: 0.6
            }, 500).show();
            $('#bofangye .bofanglist').addClass('bounceInUp').show();
            setTimeout(function () {
                $('#bofangye .bofanglist').removeClass('bounceInUp');
            }, 1000)
        })
    




    //删除歌曲
    removefn();

    function removefn() {
        //清空
        $('#bofangye .bofanglist .removeallsong').on('tap', function () {
            data.splice(0);
            localStorage.setItem('songmoreinfo', JSON.stringify(data));
            addbensisong();
            $('#bofangye .bofanglist .bendisong').html('');
        })
        $('#bofangye .bofanglist').on('tap', 'li', function (e) {
            if (e.target.className === 'removeone') {
                let index = $(this).index();
                data.splice(index, 1);
                localStorage.setItem('songmoreinfo', JSON.stringify(data));
                addbensisong();
            }
            return false;
        })
    }


    // 播放本地歌曲
    $('#bofangye .bofanglist li').on('tap', function () {
        songindex = $(this).index();
        infofn();
        audio.play()
        panduansong();
    })




// }

// 历史记录

    var lishidata = [];

    function zairulishi() {

        lishidata = JSON.parse(localStorage.getItem('sousuolishi')) ? JSON.parse(localStorage.getItem('sousuolishi')) : [];

        // console.log( lishidata);

        var lishistr = '';
        $.each(lishidata, function (i, e) {
            lishistr += '<p>' + e + '</p>';
        })
        $('.lishicucun').html(lishistr);
    }
    zairulishi();

    $('.remove').on('tap', function () {
        localStorage.removeItem("sousuolishi");
        zairulishi();
        // location.reload();
        $('.lishicucun').html('');
    })

    $('#search .renmensearch>div:nth-child(2)').on('tap', 'p', function () {
        $(this).css('color', '#ff5858').siblings().css('color', 'rgb(79,79,79)');
    })

    $('#input').on('keyup', function (e) {
        // alert(e.keyCode);
        if (e.keyCode == 13) {
            lishidata.push($(this).val());

            lishidata = JSON.stringify(lishidata);
            localStorage.setItem('sousuolishi', lishidata);
            zairulishi();

            $('#search section').removeClass('fadeOutRight').show().addClass('fadeInLeft');
            $('#search .renmensearch').removeClass('fadeInLeft').addClass('fadeOutRight').hide();

            var text = $(this).val();

            if (text) {
                $.ajax({
                    url: 'http://cors-anywhere.herokuapp.com/http://mobilecdn.kugou.com/api/v3/search/song',
                    type: 'GET',
                    data: {
                        format: 'json',
                        keyword: text,
                        page: '1',
                        pagesize: '20',
                        showtype: '1',
                    },
                    dataType: 'json',
                    beforeSend: function () {
                        $('#search section .songlist').html('<li>搜索中...</li>');
                        bodong = setTimeout(function () {
                            alert('此次请求网络较差，请重试');
                            location.reload();
                        }, 5000);
                    },
                    success: function (options) {

                        clearTimeout(bodong);
                        josnsonglist = options.data.info;
                        var josntsr = '';
                        for (var i = 0; i < josnsonglist.length; i++) {
                            josntsr += '<li hashnum=' + josnsonglist[i].hash + '>';
                            josntsr += '<div class="left">';
                            josntsr += ' <div class="songname">' + josnsonglist[i].songname + '</div>';
                            josntsr += '<div class="singer">' + josnsonglist[i].singername + '</div>';
                            josntsr += '</div>';
                            josntsr += ' <div class="right">';
                            josntsr += '</div>';
                            josntsr += ' </li>';
                        }
                        $('#search section .songlist').html(josntsr);
                        $(this).val("");
                    }
                })
            }

        }

    })

    $('#search .back').on('tap', function () {
        $('#search section').removeClass('fadeInLeft').addClass('fadeOutRight').hide();
        $('#search .renmensearch').removeClass('fadeOutRight').show().addClass('fadeInLeft');
    })

    $('#search section .songlist').on('tap', 'li', function () {
            //    alert($(this).attr('hashnum'));
               let text=$(this).attr('hashnum');
        let arrhash = [];
        for (let i=0; i < data.length; i++){
            arrhash.push(data[i].hash);
        }

        if (arrhash.indexOf(text) == -1) {

            $.ajax({
                url: 'http://www.kugou.com/yy/index.php?r=play/getdata&hash=' + text,
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'callback',
                success: function (o) {
              data.push({
                        author_name: o.data.author_name,
                        song_name: o.data.song_name,
                        lyrics: o.data.lyrics,
                        play_url: o.data.play_url,
                        img: o.data.img,
                        hash: o.data.hash,
                    })
                    songindex = data.length - 1;
                    localStorage.setItem('songmoreinfo', JSON.stringify(data));
                     addbensisong();
                    infofn();
                    audio.play();  
                    panduansong();
                },
                error:function(err){
                    alert(JSON.stringify(err))                      
                }
            })
        } else {
            songindex = arrhash.indexOf($(this).attr('hashnum'));
            infofn();
            audio.play();
            panduansong();
        }

    })
   
