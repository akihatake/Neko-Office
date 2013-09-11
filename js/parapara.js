/**
 * Created with JetBrains WebStorm.
 * User: kimuratakeya
 * Date: 2012/11/02
 * Time: 16:20
 * パラパラアニメクラス
 */

/*
 * The MIT License (MIT)
 *
 * Copyright (c) <2012> <Takeya Kimura>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function ParaPara(frames, container) {

    //ティッカーインスタンス作成
    if (!ParaParaTicker.ticker) {
        ParaParaTicker.ticker = new ParaParaTicker();
    }

    this.frames = frames;
    this.container = container;

    var aLength = 0;
    for (var key in this.frames.data) {
        aLength++;
    }

    /**
     * アニメ終了時のハンドラ
     * @type {Function}
     */
    this.completeHandler = null;

    /**
     * 遅延
     * @type {Number}
     */
    this.delayFrame = 0;

    /**
     * リピート
     * @type {Boolean}
     */
    this.repeat = false;

    /**
     * リピート時再生フレーム
     * @type {Number}
     */
    this.repeatStart = 0;

    var _delayCounter = 0;
    var _isPlay = false;
    var counter = 0;
    var tickerIndex = -1;
    var self = this;

    /**
     * img要素置き換え
     */
    this.animate = function () {

        if (_delayCounter >= self.delayFrame) {

            container.empty();
            container.append($(frames.data[ParaPara.zeroPadding(counter, 4)]));

            if (counter >= aLength - 1) {

                //終了ハンドラ呼び出し
                if (self.completeHandler) {
                    self.completeHandler();
                }

                if (!self.repeat) {
                    _isPlay = false;
                    //ティッカーから削除して終了
                    if (tickerIndex != -1) {
                        tickerIndex = ParaParaTicker.ticker.removeHandler(tickerIndex);
                    }

                    return;
                }
            }

            counter++;
            if (counter >= aLength) {
                counter = self.repeatStart;
            }
        }
        else {
            _delayCounter++;
        }
    };

    /**
     * 再生
     */
    this.play = function () {
        //ティッカーに登録
        if (tickerIndex == -1) {
            tickerIndex = ParaParaTicker.ticker.addHandler(this.animate);
        }
        counter = 0;
        _isPlay = true;
    };

    /**
     * 停止
     */
    this.stop = function () {
        //ティッカーから削除
        if (_isPlay) {
            //ティッカーから削除して終了
            if (tickerIndex != -1) {
                tickerIndex = ParaParaTicker.ticker.removeHandler(tickerIndex);
            }
        }
        counter = 0;
        _isPlay = false;
//        _delayCounter = 0;
    };

    /**
     * 再生中かを表す
     * @return {Boolean}
     */
    this.isPlay = function () {
        return _isPlay;
    };

    /**
     * 移動して停止
     * @param index アニメフレームのキー
     */
    this.gotoAndStop = function (index) {
        container.empty();
        container.append($(frames.data[ParaPara.zeroPadding(index, 4)]));
    };

}

/**
 * ゼロパディング
 * @param value 値
 * @param digit 桁
 * @return {String}
 */
ParaPara.zeroPadding = function (value, digit) {
    var returnValue = String(parseInt(value));
    while (returnValue.length < digit) {
        returnValue = "0" + returnValue;
    }
    return returnValue;
};

/**
 * インターバルティッカークラス
 * @constructor
 */
function ParaParaTicker() {

    this.handlers = new Object();
    this.id = 0;

    var self = this;

    var tick = function () {
        for (var key in self.handlers) {
            self.handlers[key]();
        }
    };

    var itvl = setInterval(tick, 1000 / 30);
}

/**
 * インターバルで実行したい関数を登録
 * @param handler
 * @return {Number} 関数配列のキー
 */
ParaParaTicker.prototype.addHandler = function (handler) {

    this.handlers[String(this.id)] = handler;
    this.id++;
    return this.id - 1;

};

/**
 * 関数を削除
 * @param id
 * @return 失敗:id 成功:-1
 */
ParaParaTicker.prototype.removeHandler = function (id) {

    try {
        delete this.handlers[String(id)];
    } catch (e) {
        return id;
    }

    return -1;
};


/**
 * アニメデータクラス
 * フレームアニメのデータ（img要素の集合）
 * @constructor
 */
function ParaParaData() {
    this.data = new Object();
}

/**
 * フレームデータ（img要素集合）をクローンする
 * ※保持しているimg要素はあくまで1つでしかないので
 */
ParaParaData.prototype.clone = function () {
    var result = new ParaParaData();

    for (var key in this.data) {
        result.data[key] = $(this.data[key]).clone();
    }

    return result;
};

/**
 * フレームデータを破棄（GC効果未確認）
 */
ParaParaData.prototype.dispose = function () {
    for (var key in this.data) {
        $(this.data[key]).remove();
        if (!jQuery.support.opacity) { //IE8判定
        }
        else {
            delete this.data[key];
        }
    }
    this.data = null;
};
