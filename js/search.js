// 历史记录
lishijilu();

function lishijilu() {

    let data = [];

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


    $('#search section .songlist').on('tap', 'li', function (i, e) {

        let arrhash = [];
        for (i; i < data.length; i++) {
            arrhash.push(data[i].hash);
        }
        if (arrhash.indexOf($(this).attr('hashnum')) == -1) {

            $.ajax({
                url: 'http://www.kugou.com/yy/index.php?r=play/getdata&hash=' + $(this).attr('hashnum'),
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
                    infofn();
                    audio.play();
                    addbensisong();
                }
            })
        } else {
            songindex = arrhash.indexOf($(this).attr('hashnum'));
            infofn();
            audio.play();
            addbensisong();
        }

    })




}